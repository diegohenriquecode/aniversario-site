import type {ButtonHTMLAttributes} from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "ghost";
};

export default function PrimaryButton({ variant = "primary", className, ...props }: Props) {
    return (
        <button
            className={clsx(
                "inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition active:scale-[0.98]",
                "focus:outline-none focus:ring-2 focus:ring-pink-400/60 focus:ring-offset-2 focus:ring-offset-zinc-950",
                variant === "primary" &&
                "bg-pink-500 text-zinc-950 hover:bg-pink-400 shadow-soft",
                variant === "ghost" &&
                "bg-white/5 text-zinc-100 hover:bg-white/10 border border-white/10",
                className
            )}
            {...props}
        />
    );
}
