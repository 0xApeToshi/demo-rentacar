import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StarRating from "./StarRating";
import { ReviewsCarouselProps } from "@/utils/types/testimonialTypes";

function ReviewsCarousel({
    testimonials,
    autoPlayInterval = 5000,
    className = "",
}: ReviewsCarouselProps) {
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

    return (
        <div className="flex flex-col gap-10 items-end">
            <div
                className={`relative w-[546px] h-[608px] ${className}`}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                role="region"
                aria-label="Customer reviews carousel"
            >
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${
                                currentIndex === testimonials.length - 1
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
                                    className={`relative rounded-[16px] shadow-lg flex flex-col gap-[20px] px-[28px] py-[32px] transition-all duration-500 ease-in-out ${
                                        index === currentIndex
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

export default ReviewsCarousel;
