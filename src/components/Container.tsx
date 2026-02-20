import type {ReactNode} from "react";

export default function Container({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-dvh">
            <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
                {children}
            </div>
        </div>
    );
}
