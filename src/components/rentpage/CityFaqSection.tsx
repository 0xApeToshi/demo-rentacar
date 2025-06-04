// src/components/rentpage/CityFaqSection.tsx
import { useState } from "react";
import { CityFaq } from "@/utils/cityRepository";
import { getWordVariation } from "@/utils/cityDeclinations";
import { useTranslation } from "react-i18next";

interface CityFaqSectionProps {
    city: string;
    faqs: CityFaq[];
}

function CityFaqSection({ city, faqs }: CityFaqSectionProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { t } = useTranslation();
    const cityInDative = getWordVariation(city, "dative");

    function handleToggle(index: number) {
        setActiveIndex(activeIndex === index ? null : index);
    }

    function handleKeyDown(e: React.KeyboardEvent, index: number) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle(index);
        }
    }

    if (faqs.length === 0) {
        return null;
    }

    return (
        <div className="bg-base w-full flex justify-center">
            <section className="w-[1440px] px-[188px] pt-[80px] pb-[80px] flex flex-col gap-[20px] items-center">
                <h3
                    className="w-[653px] text-left font-gilroy leading-[110%] text-[46px] text-primary"
                    id="faq-heading"
                >
                    {t("rent.faq.title", { city, defaultValue: `Najčešća pitanja za najam u ${cityInDative}` })}
                </h3>
                {faqs.map((faq, index) => (
                    <div
                        key={`faq-${index}`}
                        className="w-[653px] flex justify-between text-left"
                    >
                        <div className="flex flex-col gap-[8px] w-full">
                            <h4
                                className="text-base-black font-gilroy leading-[120%] text-[20px] cursor-pointer"
                                onClick={() => handleToggle(index)}
                                tabIndex={0}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                role="button"
                                aria-expanded={activeIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                {index + 1}. {faq.question}
                            </h4>
                            {activeIndex === index && (
                                <p
                                    id={`faq-answer-${index}`}
                                    className="px-[16px] text-[16px] leading-[150%] text-base-black"
                                >
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                        {activeIndex === index ? (
                            <img
                                src="/assets/minusIcon.svg"
                                className="w-[32px] h-[32px] cursor-pointer flex-shrink-0"
                                alt="Collapse"
                                onClick={() => handleToggle(index)}
                            />
                        ) : (
                            <img
                                src="/assets/arrowDownIcon.svg"
                                className="w-[32px] h-[32px] cursor-pointer flex-shrink-0"
                                alt="Expand"
                                onClick={() => handleToggle(index)}
                            />
                        )}
                    </div>
                ))}
                <div className="w-[653px] text-left mt-[20px]">
                    <a
                        href="/faq"
                        className="text-primary underline text-[16px] hover:text-primary-800"
                    >
                        {t("rent.faq.view_all", { defaultValue: "Pogledajte sva česta pitanja" })}
                    </a>
                </div>
            </section>
        </div>
    );
}

export default CityFaqSection;