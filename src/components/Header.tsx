import { Link, useLocation } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

export default function Header() {
    const loc = useLocation();
    const isHome = loc.pathname === "/";

    return (
        <div className="flex items-start justify-between gap-4">
            <div>
                <p className="text-xs text-zinc-400">Um site feito com amor</p>
                <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                    Feliz aniversário ❤️
                </h1>
            </div>

            {isHome ? (
                <Link to="/curiosa">
                    <PrimaryButton className="whitespace-nowrap">
                        SE FOR CURIOSA, CLIQUE AQUI
                    </PrimaryButton>
                </Link>
            ) : (
                <Link to="/">
                    <PrimaryButton variant="ghost" className="whitespace-nowrap">
                        Voltar
                    </PrimaryButton>
                </Link>
            )}
        </div>
    );
}
