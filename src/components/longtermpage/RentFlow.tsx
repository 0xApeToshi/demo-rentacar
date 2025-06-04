import { useTranslation } from "react-i18next";

function RentFlow() {
    const { t } = useTranslation();

    const flowRentData = [
        {
            src: "/assets/firstStep.svg",
            title: t("long_term.flow.steps.choose.title"),
            text: t("long_term.flow.steps.choose.text"),
            arrow: "/assets/arrowVector.svg",
        },
        {
            src: "/assets/secondStep.svg",
            title: t("long_term.flow.steps.contact.title"),
            text: t("long_term.flow.steps.contact.text"),
            arrow: "/assets/arrowVector.svg",
        },
        {
            src: "/assets/thirdStep.svg",
            title: t("long_term.flow.steps.call.title"),
            text: t("long_term.flow.steps.call.text"),
            arrow: "/assets/arrowVector.svg",
            offer: t("long_term.flow.steps.call.offer"),
        },
        {
            src: "/assets/finalStep.svg",
            title: t("long_term.flow.steps.confirm.title"),
            text: t("long_term.flow.steps.confirm.text"),
        },
    ];

    return (
        <div className="w-full bg-base flex justify-center">
            <section className="w-full max-w-[1440px] flex flex-col gap-[40px] sm:gap-[60px] md:gap-[80px] px-4 sm:px-6 md:px-8 lg:px-[120px] py-[60px] sm:py-[80px] md:py-[120px]">
                <h3 className="text-primary font-gilroy text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-[110%] text-center md:text-left">
                    {t("long_term.flow.title")}
                </h3>

                {/* Desktop layout */}
                <div className="hidden md:flex gap-[24px] lg:gap-[44px] text-left">
                    {flowRentData.map((item, index) => (
                        <div key={index} className="flex flex-col gap-[24px] md:gap-[36px]">
                            <div className="flex gap-[10px]">
                                <img
                                    className="w-[64px] h-[64px]"
                                    src={item.src}
                                    alt={`Step ${index + 1}`}
                                />
                                {item.arrow ? <img src={item.arrow} alt="Arrow" /> : ""}
                            </div>
                            <div className="flex flex-col gap-[16px]">
                                <div className="flex flex-col gap-[4px]">
                                    <p className="font-gilroy text-[20px] leading-[120%]">
                                        {item.title}
                                    </p>
                                    {item.offer ? (
                                        <p className="text-[16px] leading-[120%] font-semibold text-primary">
                                            {item.offer}
                                        </p>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <p className="text-[14px] leading-[120%]">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile layout - vertical steps */}
                <div className="flex flex-col gap-[40px] md:hidden">
                    {flowRentData.map((item, index) => (
                        <div key={index} className="flex flex-col sm:flex-row gap-[16px] sm:gap-[24px]">
                            <div className="flex items-center gap-[16px]">
                                <img
                                    className="w-[48px] h-[48px] sm:w-[64px] sm:h-[64px]"
                                    src={item.src}
                                    alt={`Step ${index + 1}`}
                                />
                                {index < flowRentData.length - 1 && (
                                    <div className="sm:hidden">
                                        <img
                                            src="/assets/arrowDown.svg"
                                            alt="Down Arrow"
                                            className="w-6 h-12 rotate-90"
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col gap-[8px] sm:gap-[16px]">
                                <div className="flex flex-col gap-[4px]">
                                    <p className="font-gilroy text-lg sm:text-[20px] leading-[120%]">
                                        {item.title}
                                    </p>
                                    {item.offer ? (
                                        <p className="text-[16px] leading-[120%] font-semibold text-primary">
                                            {item.offer}
                                        </p>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <p className="text-sm sm:text-[14px] leading-[120%]">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default RentFlow;