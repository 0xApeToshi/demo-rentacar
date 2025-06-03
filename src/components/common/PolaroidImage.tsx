interface PolaroidProps {
    src: string;
    alt?: string;
    tiltDegrees: number;
    className?: string;
    absolute?: boolean;
}

function PolaroidImage({
    src,
    alt,
    tiltDegrees,
    className,
    absolute,
}: PolaroidProps) {
    return (
        <div className={`inline-block ${absolute ? "absolute" : ""}`}>
            <div
                className={`relative bg-white p-[26px] pb-[65px] rounded-sm shadow-lg transform transition-transform duration-300 ${className}`}
                style={{
                    transform: `rotate(${tiltDegrees}deg)`,
                    transformOrigin: "center center",
                }}
            >
                <div className="relative overflow-hidden">
                    <img
                        src={src}
                        alt={alt}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default PolaroidImage;
