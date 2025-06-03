import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import Button from "../common/Button";

function TeamCarousel() {
    const teamData = [
        {
            id: 1,
            name: "Name Surname",
            image: "/src/assets/teamMemberPlaceholder.png",
            description: "Founder & CEO",
            hoverText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            hoverImg: "/src/assets/membersHover.png",
        },
        {
            id: 2,
            name: "Name Surname",
            image: "/src/assets/teamMemberPlaceholder.png",
            description: "Head of Operations",
            hoverText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            hoverImg: "/src/assets/membersHover.png",
        },
        {
            id: 3,
            name: "Name Surname",
            image: "/src/assets/teamMemberPlaceholder.png",
            description: "Customer Support Manager",
            hoverText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            hoverImg: "/src/assets/membersHover.png",
        },
        {
            id: 4,
            name: "Name Surname",
            image: "/src/assets/teamMemberPlaceholder.png",
            description: "Customer Support Manager",
            hoverText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            hoverImg: "/src/assets/membersHover.png",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const goToSlide = useCallback(
        (index: number) => {
            setCurrentIndex(() => {
                const newIndex = (index + teamData.length) % teamData.length;
                return newIndex;
            });
        },
        [teamData.length]
    );

    const nextSlide = useCallback(() => {
        goToSlide(currentIndex + 1);
    }, [currentIndex, goToSlide]);

    const prevSlide = useCallback(() => {
        goToSlide(currentIndex - 1);
    }, [currentIndex, goToSlide]);

    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(nextSlide, 5000);
            return () => clearInterval(timer);
        }
    }, [nextSlide, isPaused]);

    return (
        <div className="w-fit flex flex-col gap-[20px] justify-center items-center px-[120px] py-[80px] bg-base">
            <div className="flex flex-col gap-[40px] max-w-[1200px]">
                <div className="flex flex-col gap-[16px] text-left w-fit max-w-[520px]">
                    <h3 className=" text-[46px] font-gilroy text-primary leading-[110%]">
                        Tim koji brine više
                    </h3>
                    <p className="text-base-black text-[16px] leading-[120%]">
                        Iza svakog izvrsnog iskustva najma stoji tim posvećenih
                        stručnjaka koji su spremni učiniti više. U Optima Rentu
                        nismo samo obučeni – mi smo posvećeni tome da vaše
                        iskustvo bude jednostavno, bez stresa i prilagođeno
                        vama.
                    </p>
                    <p className="text-base-black text-[16px] leading-[120%]">
                        Od korisničke podrške do tima za održavanje vozila, svi
                        dijelimo istu misiju:{" "}
                        <strong>staviti vas na prvo mjesto.</strong>
                    </p>
                </div>

                <div
                    className="overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        className="flex gap-[32px] transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${
                                currentIndex === teamData.length - 1
                                    ? (teamData.length - 2) * (351 + 32)
                                    : currentIndex * (351 + 32)
                            }px)`,
                        }}
                    >
                        {teamData.map((member) => (
                            <Card
                                key={member.id}
                                className={`relative flex-shrink-0 py-0 flex-col gap-[10px] w-[351px] h-[434px] rounded-[8px] overflow-hidden border border-solid border-neutral-200 shadow-[7px_4px_13.2px_#00000040] transition-all duration-500 ease-in-out`}
                                onMouseEnter={() => setHoveredCard(member.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div
                                    className={`absolute inset-0 transition-opacity duration-500 ${hoveredCard === member.id ? "opacity-0" : "opacity-100"}`}
                                >
                                    <img
                                        className="h-[292px] w-full object-cover"
                                        alt={member.name}
                                        src={member.image}
                                    />
                                    <CardContent className="flex flex-col items-start gap-[10px] px-[40px] py-[32px] bg-white">
                                        <h3 className="text-[24px] font-extrabold leading-[120%] text-primary">
                                            {member.name}
                                        </h3>
                                        <p className="max-w-[226px] text-base-black leading-[120%] text-[16px]">
                                            {member.description}
                                        </p>
                                    </CardContent>
                                </div>

                                <div
                                    className={`flex flex-col jutify-between px-[40px] py-[32px] absolute inset-0 bg-primary transition-all duration-500 transform 
                                    ${hoveredCard === member.id ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                                >
                                    <img
                                        className="absolute top-0 left-0 w-full h-full object-cover"
                                        src={member.hoverImg}
                                    />
                                    <p className="text-[100px] font-semibold text-left z-1">
                                        ”
                                    </p>
                                    <p className="font-gilroy text-left z-1 text-[32px] leading-[120%] text-base-black">
                                        Ensuring every car is delivered on time,
                                        in perfect condition.
                                    </p>
                                </div>
                            </Card>
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

export default TeamCarousel;
