import { exampleTestimonials } from "@/utils/types/testimonialTypes";
import ReviewCard from "../common/ReviewCard";
import ReviewsCarousel from "../common/ReviewsCarousel";
import { useTranslation } from "react-i18next";

interface reviewProps {
    title: string;
    text: string;
}

function Reviews({ title, text }: reviewProps) {
    const { t } = useTranslation();

    return (
        <div className="w-full bg-white flex justify-center">
            <div className="w-[1440px] p-[120px] flex justify-between">
                <div className="w-[505px] text-left flex flex-col gap-[16px]">
                    <h3 className="text-primary text-[64px] font-extrabold leading-[110%]">
                        {title}
                    </h3>
                    <p className="text-base-black text-[20px] font-extrabold leading-[120%]">
                        {text}
                    </p>
                    <div className="flex text-center gap-[16px]">
                        <ReviewCard />
                        <ReviewCard
                            company="google"
                            rating={4.9}
                            reviewCount={150}
                        />
                    </div>
                </div>
                <ReviewsCarousel testimonials={exampleTestimonials} />
            </div>
        </div>
    );
}
export default Reviews;