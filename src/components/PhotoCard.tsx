type Props = {
    src: string;
    alt: string;
    caption?: string;
};

export default function PhotoCard({ src, alt, caption }: Props) {
    return (
        <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft">
            <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                    src={src}
                    alt={alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                />
            </div>
            {caption ? (
                <div className="px-4 py-3">
                    <p className="text-sm text-zinc-200">{caption}</p>
                </div>
            ) : null}
        </div>
    );
}
