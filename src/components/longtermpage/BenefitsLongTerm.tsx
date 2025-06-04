import { useState, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";

function BenefitsLongTerm() {
    const { t } = useTranslation();

    const menuItems = [
        {
            id: 1,
            title: t("long_term.benefits.tabs.registration.title"),
            content: {
                text: t("long_term.benefits.tabs.registration.text"),
                image: "/assets/vehicleRegistration.jpg",
            },
        },
        {
            id: 2,
            title: t("long_term.benefits.tabs.replacement.title"),
            content: {
                text: t("long_term.benefits.tabs.replacement.text"),
                image: "/assets/dalmatia.jpg",
            },
        },
        {
            id: 3,
            title: t("long_term.benefits.tabs.maintenance.title"),
            content: {
                text: t("long_term.benefits.tabs.maintenance.text"),
                image: "/api/placeholder/400/300",
            },
        },
        {
            id: 4,
            title: t("long_term.benefits.tabs.damage.title"),
            content: {
                text: t("long_term.benefits.tabs.damage.text"),
                image: "/api/placeholder/400/300",
            },
        },
        {
            id: 5,
            title: t("long_term.benefits.tabs.insurance.title"),
            content: {
                text: t("long_term.benefits.tabs.insurance.text"),
                image: "/api/placeholder/400/300",
            },
        },
        {
            id: 6,
            title: t("long_term.benefits.tabs.roadside.title"),
            content: {
                text: t("long_term.benefits.tabs.roadside.text"),
                image: "/api/placeholder/400/300",
            },
        },
        {
            id: 7,
            title: t("long_term.benefits.tabs.tires.title"),
            content: {
                text: t("long_term.benefits.tabs.tires.text"),
                image: "/api/placeholder/400/300",
            },
        },
        {
            id: 8,
            title: t("long_term.benefits.tabs.cost_control.title"),
            content: {
                text: t("long_term.benefits.tabs.cost_control.text"),
                image: "/api/placeholder/400/300",
            },
        },
    ];

    const [activeId, setActiveId] = useState(1);
    const navRef = useRef(null);

    const handleItemClick = useCallback((id: number) => {
        setActiveId(id);
    }, []);

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>, id: number) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setActiveId(id);
            }
        },
        []
    );

    const activeContent = menuItems.find((item) => item.id === activeId)
        ?.content ?? {
        text: "Content not found",
        image: "/api/placeholder/400/300",
    };

    return (
        <div className="w-full bg-secondary-100 flex justify-center">
            <div className="flex flex-col items-center gap-[20px] sm:gap-[30px] md:gap-[40px] w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[160px] pt-[40px] sm:pt-[60px] md:pt-[80px] pb-[60px] sm:pb-[80px] md:pb-[120px]">
                <h3 className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-extrabold leading-[110%] text-center sm:text-left">
                    {t("long_term.benefits.title")}
                </h3>

                {/* Mobile dropdown for small screens */}
                <div className="block md:hidden w-full">
                    <select
                        className="w-full p-3 bg-white border border-neutral-300 rounded text-base-black text-lg"
                        value={activeId}
                        onChange={(e) => setActiveId(Number(e.target.value))}
                    >
                        {menuItems.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.title}
                            </option>
                        ))}
                    </select>

                    <div className="mt-6">
                        <div role="tabpanel" id={`panel-${activeId}`} aria-labelledby={`tab-${activeId}`}>
                            <div className="relative flex flex-col gap-[16px] w-full transition-opacity duration-300 ease-in-out">
                                <img
                                    src={activeContent.image}
                                    alt=""
                                    className="w-full h-auto sm:h-[288px] object-cover rounded-[16px] sm:rounded-[32px]"
                                    aria-hidden="true"
                                />
                                <div className="w-full sm:w-[312px] p-[16px] flex flex-col gap-[8px] rounded rounded-[9px] bg-white sm:absolute sm:right-0 sm:top-1/4">
                                    <div className="flex gap-[4px]">
                                        <img src="/assets/checkCircle.svg" alt="" className="w-5 h-5 flex-shrink-0" />
                                        <p className="font-gilroy-medium text-[16px] sm:text-[18px] leading-[120%] text-base-black">
                                            {t("long_term.benefits.tabs.registration.points.0")}
                                        </p>
                                    </div>
                                    <div className="flex gap-[4px]">
                                        <img src="/assets/checkCircle.svg" alt="" className="w-5 h-5 flex-shrink-0" />
                                        <p className="font-gilroy-medium text-[16px] sm:text-[18px] leading-[120%] text-base-black">
                                            {t("long_term.benefits.tabs.registration.points.1")}
                                        </p>
                                    </div>
                                    <div className="flex gap-[4px]">
                                        <img src="/assets/checkCircle.svg" alt="" className="w-5 h-5 flex-shrink-0" />
                                        <p className="font-gilroy-medium text-[16px] sm:text-[18px] leading-[120%] text-base-black">
                                            {t("long_term.benefits.tabs.registration.points.2")}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-left text-[16px] sm:text-[18px] text-base-black leading-[120%]">
                                    {activeContent.text}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop tab layout */}
                <div className="hidden md:flex items-start justify-between w-full relative flex-col lg:flex-row gap-8 lg:gap-0">
                    <nav
                        ref={navRef}
                        role="tablist"
                        aria-label="Benefits navigation"
                        className="flex flex-col items-start relative w-full lg:w-auto lg:min-w-[280px]"
                    >
                        {menuItems.map((item) => (
                            <div
                                key={item.id}
                                role="tab"
                                tabIndex={0}
                                id={`tab-${item.id}`}
                                aria-selected={activeId === item.id}
                                aria-controls={`panel-${item.id}`}
                                onClick={() => handleItemClick(item.id)}
                                onKeyDown={(e) => handleKeyDown(e, item.id)}
                                className={`flex items-end gap-2 pt-6 pb-5 px-5 relative self-stretch w-full border-r 
                                    ${activeId === item.id
                                        ? "bg-secondary-200 border-r-4 border-secondary"
                                        : "border-neutral-300"
                                    }`}
                            >
                                <h3
                                    className={`relative w-fit text-[18px] md:text-[20px] font-gilroy leading-[120%] whitespace-nowrap 
                                    ${activeId === item.id
                                            ? "text-secondary"
                                            : "text-base-black"
                                        }
                                    `}
                                >
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </nav>
                    <div
                        className="w-full lg:w-auto"
                        role="tabpanel"
                        id={`panel-${activeId}`}
                        aria-labelledby={`tab-${activeId}`}
                    >
                        <div className="relative flex flex-col gap-[16px] w-full lg:w-[631px] transition-opacity duration-300 ease-in-out">
                            <img
                                src={activeContent.image}
                                alt=""
                                className="w-full lg:w-[431px] h-auto lg:h-[288px] object-cover rounded-[32px]"
                                aria-hidden="true"
                            />
                            <div className="w-full sm:w-[312px] p-[16px] flex flex-col gap-[8px] rounded rounded-[9px] bg-white lg:absolute lg:right-0 lg:top-1/4">
                                <div className="flex gap-[4px]">
                                    <img src="/assets/checkCircle.svg" alt="" className="w-5 h-5 flex-shrink-0" />
                                    <p className="font-gilroy-medium text-[16px] md:text-[18px] leading-[120%] text-base-black">
                                        {t("long_term.benefits.tabs.registration.points.0")}
                                    </p>
                                </div>
                                <div className="flex gap-[4px]">
                                    <img src="/assets/checkCircle.svg" alt="" className="w-5 h-5 flex-shrink-0" />
                                    <p className="font-gilroy-medium text-[16px] md:text-[18px] leading-[120%] text-base-black">
                                        {t("long_term.benefits.tabs.registration.points.1")}
                                    </p>
                                </div>
                                <div className="flex gap-[4px]">
                                    <img src="/assets/checkCircle.svg" alt="" className="w-5 h-5 flex-shrink-0" />
                                    <p className="font-gilroy-medium text-[16px] md:text-[18px] leading-[120%] text-base-black">
                                        {t("long_term.benefits.tabs.registration.points.2")}
                                    </p>
                                </div>
                            </div>
                            <p className="text-left text-[16px] md:text-[18px] text-base-black leading-[120%]">
                                {activeContent.text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BenefitsLongTerm;