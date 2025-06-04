import { exampleTestimonials } from "@/utils/types/testimonialTypes";
import ReviewCard from "../common/ReviewCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState, useRef } from "react";
import StarRating from "../common/StarRating";
import { useTranslation } from "react-i18next";
import ResponsiveContainer from "../common/ResponsiveContainer";

interface reviewProps {
    title: string;
    text: string;
}

function Reviews({ title, text }: reviewProps) {
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(false);

    // Check screen size
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <div className="w-full bg-white">
            <ResponsiveContainer className="py-10 md:py-16 lg:py-[120px] flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between">
                <div className="w-full md:w-[505px] text-left flex flex-col gap-4 md:gap-[16px]">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[64px] text-primary font-gilroy leading-tight">
                        {title}
                    </h3>
                    <p className="text-lg md:text-xl lg:text-[20px] text-base-black font-gilroy leading-tight">
                        {text}
                    </p>
                    <div className="flex flex-wrap gap-4 md:gap-[16px] justify-center md:justify-start">
                        <ReviewCard />
                        <ReviewCard
                            company="google"
                            rating={4.9}
                            reviewCount={150}
                        />
                    </div>
                </div>

                <ResponsiveReviewsCarousel isMobile={isMobile} />
            </ResponsiveContainer>
        </div>
    );
}

interface ResponsiveReviewsCarouselProps {
    isMobile: boolean;
    autoPlayInterval?: number;
}

function ResponsiveReviewsCarousel({
    isMobile,
    autoPlayInterval = 5000
}: ResponsiveReviewsCarouselProps) {
    const testimonials = exampleTestimonials;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const goToSlide = useCallback(
        (index: number) => {
            setCurrentIndex(() => {
                const newIndex =
                    (index + testimonials.length) % testimonials.length;
                return newIndex;
            });
        },
        [testimonials.length]
    );

    const nextSlide = useCallback(() => {
        goToSlide(currentIndex + 1);
    }, [currentIndex, goToSlide]);

    const prevSlide = useCallback(() => {
        goToSlide(currentIndex - 1);
    }, [currentIndex, goToSlide]);

    useEffect(() => {
        if (!isPaused) {
            timerRef.current = setInterval(nextSlide, autoPlayInterval);
        }
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [nextSlide, autoPlayInterval, isPaused]);

    // Mobile Carousel
    if (isMobile) {
        return (
            <div className="w-full flex flex-col gap-6">
                <div
                    className="overflow-hidden relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="w-full flex-shrink-0"
                            >
                                <div className="bg-white rounded-lg shadow-md p-5 mx-2">
                                    <StarRating rating={testimonial.rating} size={16} />
                                    <p className="text-sm text-base-black mt-3 mb-4">
                                        {testimonial.text}
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={testimonial.author.image}
                                            alt={testimonial.author.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="font-semibold text-base-black">
                                                {testimonial.author.name}
                                            </p>
                                            <p className="text-xs text-neutral-500">
                                                {testimonial.author.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={prevSlide}
                        className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 border border-secondary-900"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-5 h-5 text-secondary-700" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 border border-secondary-900"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-5 h-5 text-secondary-700" />
                    </button>
                </div>
            </div>
        );
    }

    // Desktop Carousel
    return (
        <div className="flex flex-col gap-10 items-end">
            <div
                className="relative w-[546px] h-[608px]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                role="region"
                aria-label="Customer reviews carousel"
            >
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex === testimonials.length - 1
                                    ? (testimonials.length - 2) * 50
                                    : currentIndex * 50
                                }%)`,
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className="w-1/2 flex-shrink-0 px-4 flex items-center justify-center"
                                role="group"
                                aria-roledescription="slide"
                                aria-label={`Slide ${index + 1} of ${testimonials.length}`}
                            >
                                <div
                                    className={`relative rounded-[16px] shadow-lg flex flex-col gap-[20px] px-[28px] py-[32px] transition-all duration-500 ease-in-out ${index === currentIndex
                                            ? "scale-100"
                                            : "scale-80"
                                        }`}
                                >
                                    <StarRating rating={testimonial.rating} />

                                    <p className="text-[16px] leading-[150%] text-left text-base-black">
                                        {testimonial.text}
                                    </p>
                                    <div>
                                        <p className="text-[16px] leading-[120%] text-neutral-500 text-left font-semibold">
                                            {testimonial.author.name}
                                        </p>
                                        <p className="text-[14px] leading-[120%] text-neutral-500 text-left">
                                            {testimonial.author.title}
                                        </p>
                                    </div>
                                    <div className="h-[210px]"></div>
                                    <img
                                        src={testimonial.author.image}
                                        alt=""
                                        className="absolute left-0 bottom-0 w-[241px] h-[250px] bg-top rounded-b-lg object-top object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex gap-[25px]">
                <button
                    onClick={prevSlide}
                    className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 border border-secondary-900"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6 text-secondary-700" />
                </button>

                <button
                    onClick={nextSlide}
                    className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 border border-secondary-900"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6 text-secondary-700" />
                </button>
            </div>
        </div>
    );
}

export default Reviews;