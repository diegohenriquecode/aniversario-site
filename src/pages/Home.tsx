import Container from "../components/Container";
import Header from "../components/Header";
import PhotoGrid, {type PhotoItem } from "../components/PhotoGrid";
import { useEffect, useRef } from "react";
import HeartsRain from "../components/HeartsRain";

// ✅ Troque pelos seus arquivos em src/assets/photos
import p1 from "../assets/photos/01.jpeg";
import p2 from "../assets/photos/02.jpeg";
import p3 from "../assets/photos/03.jpeg";
import p4 from "../assets/photos/04.jpeg";
import p5 from "../assets/photos/05.jpeg";
import p6 from "../assets/photos/06.jpeg";
import p7 from "../assets/photos/07.jpeg";
import p8 from "../assets/photos/08.jpeg";
import p9 from "../assets/photos/09.jpeg";
import p10 from "../assets/photos/10.jpeg";
import p11 from "../assets/photos/11.jpeg";
import p12 from "../assets/photos/12.jpeg";
import p13 from "../assets/photos/13.jpeg";
import p14 from "../assets/photos/14.jpeg";
import p15 from "../assets/photos/15.jpeg";
import p16 from "../assets/photos/16.jpeg";
import p17 from "../assets/photos/17.jpeg";
import p18 from "../assets/photos/18.jpeg";
import p19 from "../assets/photos/19.jpeg";
import p20 from "../assets/photos/20.jpeg";
import p21 from "../assets/photos/21.jpeg";
import p22 from "../assets/photos/22.jpeg";
import p23 from "../assets/photos/23.jpeg";
import p25 from "../assets/photos/25.jpeg";

export default function Home() {
    const photos: PhotoItem[] = [
        { src: p1, alt: "Foto 1", caption: "Uma tchu-tchu-ca" },
        { src: p2, alt: "Foto 2", caption: "Minha melhor companhia." },
        { src: p3, alt: "Foto 3", caption: "A gente sendo a gente." },
        { src: p4, alt: "Foto 4", caption: "Elevador é nossa sala das fotos." },
        { src: p5, alt: "Foto 5", caption: "Acabou a criatividade das legendas" },
        { src: p6, alt: "Foto 6", caption: "Duas cobras, brinks." },
        { src: p7, alt: "Foto 6", caption: "Eu, você e a Mama." },
        { src: p8, alt: "Foto 6", caption: "Os dois mulambentos." },
        { src: p9, alt: "Foto 6", caption: "Nhami nhami." },
        { src: p10, alt: "Foto 6", caption: "Aqui você já tava bêbada." },
        { src: p11, alt: "Foto 6", caption: "Circo do Tirú, lembra?" },
        { src: p12, alt: "Foto 6", caption: "Isto um dia aí..." },
        { src: p13, alt: "Foto 6", caption: "Amo quando você da esse sorriso." },
        { src: p14, alt: "Foto 6", caption: "Depois de uma treta" },
        { src: p15, alt: "Foto 6", caption: "Me trocou pela gata." },
        { src: p16, alt: "Foto 6", caption: "Mais elevador..." },
        { src: p17, alt: "Foto 6", caption: "No melhor airbnb." },
        { src: p18, alt: "Foto 6", caption: "Elevador..." },
        { src: p19, alt: "Foto 6", caption: "Os dois segurando vômito." },
        { src: p20, alt: "Foto 6", caption: "Sítio do bosco." },
        { src: p21, alt: "Foto 6", caption: "Eu, você e a Ceci na terra.." },
        { src: p22, alt: "Foto 6", caption: "Obrigado por amar os meus preferidos." },
        { src: p25, alt: "Foto 6", caption: "Com carinha de 17." },
        { src: p23, alt: "Foto 6", caption: "A última tinha que ser no elevador." },
    ];

    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = 0.4;

        // tentativa de autoplay
        audio.play().catch(() => {
            console.log("Autoplay bloqueado pelo navegador");
        });
    }, []);

    useEffect(() => {
        const playOnInteraction = () => {
            audioRef.current?.play();
            window.removeEventListener("click", playOnInteraction);
        };

        window.addEventListener("click", playOnInteraction);
    }, []);

    return (
        <Container>
            <HeartsRain />
            <Header />
            <audio ref={audioRef} src="/music/musica.mp3" loop />

            <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 shadow-soft sm:mt-8 sm:p-8">
                <p className="text-sm text-zinc-200 sm:text-base leading-relaxed">
                    Hoje é o seu dia — e eu queria te lembrar do quanto você é especial pra mim.
                    Obrigado por ser casa, por ser parceria, por ser riso fácil e abraço que acalma.
                    <span className="block mt-3 text-zinc-300">
            Eu te amo. Feliz aniversário, meu amor. ❤️
          </span>
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-200 border border-white/10">
            + memórias
          </span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-200 border border-white/10">
            + carinho
          </span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-200 border border-white/10">
            + nós dois
          </span>
                </div>
            </div>

            <PhotoGrid items={photos} />

            <p className="mt-8 text-center text-xs text-zinc-500">
                Feito por você-sabe-quem 😄
            </p>
        </Container>
    );
}
