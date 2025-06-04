import { useTranslation } from "react-i18next";

function ComparisonTable() {
    const { t } = useTranslation();

    const comparisonData = [
        {
            feature: t("long_term.comparison.table.rows.initial_payment.feature"),
            longTerm: t("long_term.comparison.table.rows.initial_payment.long_term"),
            leasing: t("long_term.comparison.table.rows.initial_payment.leasing"),
            type: "text",
        },
        {
            feature: t("long_term.comparison.table.rows.financing.feature"),
            longTerm: true,
            leasing: true,
            type: "boolean",
        },
        {
            feature: t("long_term.comparison.table.rows.basic_insurance.feature"),
            longTerm: true,
            leasing: false,
            type: "boolean",
        },
        {
            feature: t("long_term.comparison.table.rows.full_insurance.feature"),
            longTerm: true,
            leasing: false,
            type: "boolean",
        },
        {
            feature: t("long_term.comparison.table.rows.registration.feature"),
            longTerm: true,
            leasing: false,
            type: "boolean",
        },
        {
            feature: t("long_term.comparison.table.rows.road_tax.feature"),
            longTerm: true,
            leasing: false,
            type: "boolean",
        },
        {
            feature: t("long_term.comparison.table.rows.maintenance.feature"),
            longTerm: true,
            leasing: false,
            type: "boolean",
        },
        {
            feature: t("long_term.comparison.table.rows.assistance.feature"),
            longTerm: true,
            leasing: false,
            type: "boolean",
            isNew: true,
        },
        {
            feature: t("long_term.comparison.table.rows.replacement.feature"),
            longTerm: true,
            leasing: false,
            type: "boolean",
            isNew: true,
        },
        {
            feature: t("long_term.comparison.table.rows.tires.feature"),
            longTerm: true,
            leasing: false,
            type: "boolean",
            isNew: true,
        },
        {
            feature: t("long_term.comparison.table.rows.vehicle_age.feature"),
            longTerm: t("long_term.comparison.table.rows.vehicle_age.long_term"),
            leasing: t("long_term.comparison.table.rows.vehicle_age.leasing"),
            type: "text",
        },
        {
            feature: t("long_term.comparison.table.rows.contract_flexibility.feature"),
            longTerm: t("long_term.comparison.table.rows.contract_flexibility.long_term"),
            leasing: t("long_term.comparison.table.rows.contract_flexibility.leasing"),
            type: "text",
        },
        {
            feature: t("long_term.comparison.table.rows.initial_costs.feature"),
            longTerm: t("long_term.comparison.table.rows.initial_costs.long_term"),
            leasing: t("long_term.comparison.table.rows.initial_costs.leasing"),
            type: "text",
        },
        {
            feature: t("long_term.comparison.table.rows.vehicle_exchange.feature"),
            longTerm: true,
            leasing: false,
            type: "boolean",
        },
        {
            feature: t("long_term.comparison.table.rows.single_payment.feature"),
            longTerm: true,
            leasing: false,
            type: "boolean",
        },
        {
            feature: t("long_term.comparison.table.rows.availability.feature"),
            longTerm: t("long_term.comparison.table.rows.availability.long_term"),
            leasing: t("long_term.comparison.table.rows.availability.leasing"),
            type: "text",
        },
    ];

    return (
        <div className="w-full flex justify-center bg-secondary">
            <section className="w-full max-w-[1440px] flex flex-col items-center gap-[20px] sm:gap-[30px] md:gap-[40px] px-4 sm:px-6 md:px-8 lg:px-[120px] pt-[40px] sm:pt-[60px] md:pt-[80px] pb-[60px] sm:pb-[80px] md:pb-[100px]">
                <div className="flex flex-col gap-[8px] sm:gap-[16px] w-full max-w-[754px] text-center sm:text-left">
                    <h3 className="text-white font-gilroy text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-[110%]">
                        {t("long_term.comparison.title")}
                    </h3>
                    <p className="text-white font-gilroy text-base sm:text-lg md:text-[20px] leading-[120%]">
                        {t("long_term.comparison.subtitle")}
                    </p>
                </div>

                {/* Mobile comparison table (card style for small screens) */}
                <div className="md:hidden w-full">
                    <div className="flex justify-between bg-white rounded-t-[16px] p-4">
                        <span className="font-gilroy text-xl text-primary font-bold">
                            {t("long_term.comparison.table.header")}
                        </span>
                    </div>

                    {comparisonData.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col bg-white ${index === comparisonData.length - 1 ? 'rounded-b-[16px]' : 'border-b border-secondary-200'} p-4`}
                        >
                            <div className="font-medium text-base mb-3">
                                {item.feature}
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col items-center">
                                    <span className="text-sm text-secondary-400 mb-2">
                                        {t("long_term.comparison.long_term")}
                                    </span>
                                    <div>
                                        {item.type === "boolean" ? (
                                            item.longTerm ? (
                                                <img
                                                    className="w-6 h-6"
                                                    src="/assets/checkCircle.svg"
                                                    alt={t("common.yes")}
                                                />
                                            ) : (
                                                <img
                                                    className="w-6 h-6"
                                                    src="/assets/closeCircle.svg"
                                                    alt={t("common.no")}
                                                />
                                            )
                                        ) : (
                                            <p className="text-sm text-center">
                                                {item.longTerm}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-sm text-secondary-400 mb-2">
                                        {t("long_term.comparison.leasing")}
                                    </span>
                                    <div>
                                        {item.type === "boolean" ? (
                                            item.leasing ? (
                                                <img
                                                    className="w-6 h-6"
                                                    src="/assets/checkCircle.svg"
                                                    alt={t("common.yes")}
                                                />
                                            ) : (
                                                <img
                                                    className="w-6 h-6"
                                                    src="/assets/closeCircle.svg"
                                                    alt={t("common.no")}
                                                />
                                            )
                                        ) : (
                                            <p className="text-sm text-center">
                                                {item.leasing}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop comparison table */}
                <div className="relative bg-white overflow-hidden hidden md:flex md:flex-col gap-[12px] rounded-[16px] w-full max-w-[1202px] px-[40px] lg:px-[100px] pt-[60px] lg:pt-[96px] pb-[60px] lg:pb-[80px]">
                    <div className="absolute w-[211px] h-full top-[15px] left-[calc(100%-440px)] rounded-lg bg-secondary-300/40 z-1"></div>
                    <div className="absolute w-[211px] h-[38px] top-[15px] left-[calc(100%-440px)] rounded-t-lg bg-secondary-200 z-0"></div>

                    <div className="flex w-full justify-end z-10">
                        <span className="w-[211px] font-gilroy text-[20px] lg:text-[28px] leading-[120%] text-primary">
                            {t("long_term.comparison.long_term")}
                        </span>
                        <span className="w-[229px] flex justify-center items-end font-gilroy text-[20px] lg:text-[28px] leading-[120%] text-primary">
                            {t("long_term.comparison.leasing")}
                        </span>
                    </div>
                    <div className="w-full">
                        <span className="w-full flex text-left text-secondary-400 font-gilroy text-[14px] leading-[120%] border-b border-b-secondary-200">
                            {t("long_term.comparison.table.header")}
                        </span>
                        {comparisonData.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center border-b border-b-secondary-200 pl-[12px] justify-between ${index % 2 === 0 ? "" : "bg-base"}`}
                            >
                                <div className="leading-[120%] text-[16px] lg:text-[18px]">
                                    {item.feature}
                                </div>
                                <div className="flex">
                                    <div
                                        className={`${index % 2 === 0 ? "" : "bg-secondary-200"} w-[211px] leading-[150%] text-[16px] flex justify-center items-center pt-[16px] pb-[16px]`}
                                    >
                                        {item.type === "boolean" ? (
                                            item.longTerm ? (
                                                <img
                                                    className="z-10"
                                                    src="/assets/checkCircle.svg"
                                                    alt={t("common.yes")}
                                                />
                                            ) : (
                                                <img
                                                    className="z-10"
                                                    src="/assets/closeCircle.svg"
                                                    alt={t("common.no")}
                                                />
                                            )
                                        ) : (
                                            <p className="z-10">
                                                {item.longTerm}
                                            </p>
                                        )}
                                    </div>
                                    <div className="w-[229px] leading-[150%] text-[16px] flex justify-center items-center pt-[16px] pb-[16px]">
                                        {item.type === "boolean" ? (
                                            item.leasing ? (
                                                <img
                                                    className="z-10"
                                                    src="/assets/checkCircle.svg"
                                                    alt={t("common.yes")}
                                                />
                                            ) : (
                                                <img
                                                    className="z-10"
                                                    src="/assets/closeCircle.svg"
                                                    alt={t("common.no")}
                                                />
                                            )
                                        ) : (
                                            <p>{item.leasing}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
export default ComparisonTable;