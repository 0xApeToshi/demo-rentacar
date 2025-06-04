import { useTranslation } from "react-i18next";
import StarRating from "./StarRating";

function ReviewCard({ company = "facebook", rating = 5, reviewCount = 10 }) {
    const { t } = useTranslation();
    let imageSrc = "/src/assets/facebookReviews.png";

    if (company === "google") {
        imageSrc = "/src/assets/googleReviews.png";
    }

    return (
        <div className="flex flex-col items-center w-fit bg-secondary-100 rounded-[5px] p-[16px]">
            <img
                className="grayscale-75 w-[101px] object-contain"
                src={imageSrc}
                alt={company}
            ></img>
            <div className="flex flex-col gap-[4px]">
                <StarRating rating={rating} />
                <p className="text-base-black text-[12px]">
                    {t("home.reviews.from_reviews", { count: reviewCount })}
                </p>
            </div>
        </div>
    );
}

export default ReviewCard;