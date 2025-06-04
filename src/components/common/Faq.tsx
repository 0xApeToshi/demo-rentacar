import { useState } from "react";
import { useTranslation } from "react-i18next";

function Faq() {
    const [isActive, setActive] = useState(1);
    const { t } = useTranslation();

    const faqItems = t("faq.questions", { returnObjects: true }) as Array<{
        question: string;
        answer: string;
    }>;

    function handleClick(index: number) {
        setActive(isActive === index ? 0 : index);
    }

    function handleKeyDown(e: React.KeyboardEvent, index: number) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick(index);
        }
    }

    return (
        <div className="bg-base w-full flex justify-center">
            <section className="w-[1440px] px-[188px] pt-[80px] pb-[140px] flex flex-col gap-[20px] items-center">
                <h3
                    className="w-[653px] text-left font-gilroy leading-[110%] text-[64px] text-primary"
                    id="faq-heading"
                >
                    {t("faq.title")}
                </h3>
                {faqItems.map((item, index) => (
                    <div
                        className="w-[653px] flex justify-between text-left"
                        key={`faq-item-${index}`}
                    >
                        <div className="flex flex-col gap-[8px]">
                            <h4
                                className="text-base-black font-gilroy leading-[120%] text-[20px]"
                                onClick={() => handleClick(index + 1)}
                                tabIndex={0}
                                onKeyDown={(e) => handleKeyDown(e, index + 1)}
                                role="button"
                                aria-expanded={isActive === index + 1}
                                aria-controls={`faq-answer-${index + 1}`}
                            >
                                {index + 1}. {item.question}
                            </h4>
                            {isActive === index + 1 && (
                                <p
                                    id={`faq-answer-${index + 1}`}
                                    className="px-[16px] text-[16px] leading-[150%] text-base-black"
                                >
                                    {item.answer}
                                </p>
                            )}
                        </div>
                        {isActive === index + 1 ? (
                            <img
                                src="/assets/minusIcon.svg"
                                className="w-[32px] h-[32px]"
                                alt="Collapse"
                                onClick={() => handleClick(index + 1)}
                            ></img>
                        ) : (
                            <img
                                src="/assets/arrowDownIcon.svg"
                                className="w-[32px] h-[32px]"
                                alt="Expand"
                                onClick={() => handleClick(index + 1)}
                            ></img>
                        )}
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Faq;