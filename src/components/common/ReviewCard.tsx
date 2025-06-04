import { useTranslation } from "react-i18next";
import StarRating from "./StarRating";

interface ReviewCardProps {
    company?: "facebook" | "google";
    rating?: number;
    reviewCount?: number;
}

function ReviewCard({
    company = "facebook",
    rating = 5,
    reviewCount = 10
}: ReviewCardProps) {
    const { t } = useTranslation();
    let imageSrc = "/assets/facebookReviews.png";

    if (company === "google") {
        imageSrc = "/assets/googleReviews.png";
    }

    return (
        <div className="flex flex-col items-center w-fit bg-secondary-100 rounded-[5px] p-3 sm:p-[16px]">
            <img
                className="grayscale-75 w-[80px] sm:w-[101px] object-contain"
                src={imageSrc}
                alt={company}
            />
            <div className="flex flex-col gap-[4px] mt-1">
                <StarRating rating={rating} size={16} />
                <p className="text-base-black text-[10px] sm:text-[12px]">
                    {t("home.reviews.from_reviews", { count: reviewCount })}
                </p>
            </div>
        </div>
    );
}

export default ReviewCard;