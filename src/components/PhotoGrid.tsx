import PhotoCard from "./PhotoCard";

export type PhotoItem = {
    src: string;
    alt: string;
    caption?: string;
};

export default function PhotoGrid({ items }: { items: PhotoItem[] }) {
    return (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-5">
            {items.map((p, i) => (
                <PhotoCard key={`${p.src}-${i}`} src={p.src} alt={p.alt} caption={p.caption} />
            ))}
        </div>
    );
}
