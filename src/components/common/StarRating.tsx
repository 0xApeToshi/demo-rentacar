import { Star, StarHalf } from "lucide-react";

interface StarProps {
    rating: number;
    size?: number;
    color?: string;
    className?: string;
}

function StarRating({
    rating,
    size = 20,
    color = "#EDB167",
    className = "",
}: StarProps) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.3;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className={`flex items-center ${className}`}>
            {[...Array(fullStars)].map((_, i) => (
                <Star
                    key={`full-${i}`}
                    size={size}
                    fill={color}
                    color={color}
                />
            ))}

            {hasHalfStar && <StarHalf size={size} fill={color} color={color} />}

            {[...Array(emptyStars)].map((_, i) => (
                <Star
                    key={`empty-${i}`}
                    size={size}
                    color={color}
                    strokeWidth={1.5}
                />
            ))}
            <span className="heading-[120%] text-base-black text-[16px] font-semibold">
                ({rating.toFixed(1)})
            </span>
        </div>
    );
}

export default StarRating;
