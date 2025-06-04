import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
    rating: number;
    size?: number;
    color?: string;
    className?: string;
    showValue?: boolean;
}

function StarRating({
    rating,
    size = 20,
    color = "#EDB167",
    className = "",
    showValue = true,
}: StarRatingProps) {
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
                    strokeWidth={1}
                />
            ))}

            {hasHalfStar && <StarHalf size={size} fill={color} color={color} strokeWidth={1} />}

            {[...Array(emptyStars)].map((_, i) => (
                <Star
                    key={`empty-${i}`}
                    size={size}
                    color={color}
                    strokeWidth={1}
                    fill="transparent"
                />
            ))}

            {showValue && (
                <span className="heading-[120%] text-base-black text-sm sm:text-base font-semibold ml-1">
                    ({rating.toFixed(1)})
                </span>
            )}
        </div>
    );
}

export default StarRating;