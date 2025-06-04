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
            <section className="w-[1440px] flex flex-col gap-[80px] p-[120px]">
                <h3 className="text-primary font-gilroy text-[46px] leading-[110%]">
                    {t("long_term.flow.title")}
                </h3>
                <div className="flex gap-[44px] text-left">
                    {flowRentData.map((item, index) => (
                        <div key={index} className="flex flex-col gap-[36px]">
                            <div className="flex gap-[10px]">
                                <img
                                    className="w-[64px] h-[64px]"
                                    src={item.src}
                                    alt={`Step ${index + 1}`}
                                ></img>
                                {item.arrow ? <img src={item.arrow} alt="Arrow"></img> : ""}
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
            </section>
        </div>
    );
}

export default RentFlow;