import { useEffect, useState } from "react";

type Heart = {
    id: number;
    left: number;
    size: number;
    duration: number;
    delay: number;
};

export default function HeartsRain() {
    const [hearts, setHearts] = useState<Heart[]>([]);

    useEffect(() => {
        const generated = Array.from({ length: 35 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            size: 14 + Math.random() * 26,
            duration: 8 + Math.random() * 8,
            delay: Math.random() * 10,
        }));

        setHearts(generated);
    }, []);

    return (
        <>
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                {hearts.map((heart) => (
                    <span
                        key={heart.id}
                        className="heart"
                        style={{
                            left: `${heart.left}%`,
                            fontSize: `${heart.size}px`,
                            animationDuration: `${heart.duration}s`,
                            animationDelay: `${heart.delay}s`,
                        }}
                    >
            ❤️
          </span>
                ))}
            </div>

            {/* CSS embutido para garantir que funcione */}
            <style>
                {`
          .heart {
            position: absolute;
            top: -5vh;
            opacity: 0;
            animation-name: fall;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            filter: drop-shadow(0 0 6px rgba(255, 105, 180, 0.6));
          }

          @keyframes fall {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 0.9;
            }
            50% {
              transform: translateY(50vh) rotate(20deg);
            }
            100% {
              transform: translateY(110vh) rotate(-20deg);
              opacity: 0;
            }
          }
        `}
            </style>
        </>
    );
}
