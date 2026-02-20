import { useEffect, useRef, useState } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";

import surpriseVideo from "../assets/video/surpresa.mp4";
import HeartsRain from "../components/HeartsRain.tsx";

type Pos = { x: number; y: number };

function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
}

export default function Curious() {
    const [accepted, setAccepted] = useState(false);
    const [noPos, setNoPos] = useState<Pos>({ x: 0, y: 0 });

    const videoRef = useRef<HTMLVideoElement | null>(null);

    // container dos botões (SIM / NÃO)
    const actionsRef = useRef<HTMLDivElement | null>(null);
    // “slot” onde o NÃO deveria estar (pra pegarmos a posição inicial certinha)
    const noSlotRef = useRef<HTMLDivElement | null>(null);

    const question = "Cuzinho hoje?";

    function moveNoButton() {
        const actions = actionsRef.current;
        if (!actions) return;

        const rect = actions.getBoundingClientRect();

        const padding = 8;
        const btnH = 48;

        const halfW = rect.width / 2;
        const btnW = halfW - 6;

        const maxX = rect.width - btnW - padding;
        const maxY = rect.height - btnH - padding;

        // força ele ir mais para direita ou mais para esquerda alternando
        const goRight = Math.random() > 0.5;

        const nextX = goRight
            ? clamp(Math.random() * maxX * 0.8, maxX * 0.4, maxX)
            : clamp(Math.random() * maxX * 0.4, padding, maxX * 0.4);

        const nextY = clamp(Math.random() * maxY, padding, maxY);

        setNoPos({ x: nextX, y: nextY });
    }


    // posiciona o NÃO inicialmente exatamente no “lugar do NÃO”
    useEffect(() => {
        const actions = actionsRef.current;
        const slot = noSlotRef.current;
        if (!actions || !slot) return;

        const actionsRect = actions.getBoundingClientRect();
        const slotRect = slot.getBoundingClientRect();

        const x = slotRect.left - actionsRect.left;
        const y = slotRect.top - actionsRect.top;

        setNoPos({ x, y });
    }, []);

    useEffect(() => {
        if (!accepted) return;
        const v = videoRef.current;
        if (!v) return;

        v.muted = false;
        v.play().catch(() => {});
    }, [accepted]);

    return (
        <Container>
            <HeartsRain />
            <Header />

            <div
                className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft sm:p-10"
                style={{ minHeight: accepted ? 520 : 420 }}
            >
                <div className="mx-auto flex max-w-xl flex-col items-center justify-center text-center">
                    <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                        {question}
                    </h2>

                    {!accepted ? (
                        <>
                            <p className="mt-3 text-sm text-zinc-300">
                                (Prometo que vale a pena 😄)
                            </p>

                            <div
                                ref={actionsRef}
                                className="relative mt-8 flex w-full max-w-sm items-center justify-center gap-3"
                            >
                                <PrimaryButton className="w-full" onClick={() => setAccepted(true)}>
                                    SIM
                                </PrimaryButton>

                                {/* Slot do NÃO (só pra manter o layout e marcar posição inicial) */}
                                <div ref={noSlotRef} className="w-full">
                                    <div className="h-[48px]" />
                                </div>

                                {/* ÚNICO botão NÃO (sempre foge) */}
                                <button
                                    type="button"
                                    className="absolute rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-zinc-100 hover:bg-white/10 transition select-none"
                                    style={{
                                        left: 0,
                                        top: 0,
                                        transform: `translate(${noPos.x}px, ${noPos.y}px)`,
                                        width: "calc(50% - 0.375rem)",
                                        height: 48,
                                    }}
                                    onMouseEnter={moveNoButton}
                                    onMouseMove={moveNoButton}
                                    onPointerDown={(e) => {
                                        e.preventDefault();
                                        moveNoButton();
                                    }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        moveNoButton();
                                        alert("Aperta o sim aí, patroa.");
                                    }}
                                >
                                    NÃO
                                </button>
                            </div>

                            <p className="mt-6 text-xs text-zinc-500">
                                Dica: o NÃO tá meio tímido 😅
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="mt-3 text-sm text-zinc-300">Então toma ❤️</p>

                            <div className="mt-6 w-full overflow-hidden rounded-3xl border border-white/10 bg-black shadow-soft">
                                <video
                                    ref={videoRef}
                                    src={surpriseVideo}
                                    controls
                                    playsInline
                                    className="h-full w-full"
                                    autoPlay
                                />
                            </div>

                            <div className="mt-6">
                                <p className="text-xs text-zinc-500">
                                    Se não tocar sozinho, é bloqueio do navegador — só apertar play 🙂
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Container>
    );
}
