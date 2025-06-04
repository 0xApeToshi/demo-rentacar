// src/components/common/Footer.tsx
import { useTranslation } from "react-i18next";
import Facebook from "/assets/Facebook.svg";
import Instagram from "/assets/Instagram.svg";
import { FooterColumnProps, useFooterData } from "../../utils/types/footerTypes";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FooterColumn = ({ title, items, className = "" }: FooterColumnProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    // On desktop, always show content
    // On mobile, toggle content visibility
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`flex flex-col gap-[8px] w-full items-start ${className}`}>
            {title && (
                <div
                    className="font-bold text-base w-full flex justify-between items-center cursor-pointer md:cursor-default"
                    onClick={toggleOpen}
                >
                    <p className="text-left">{t(`common.footer.categories.${title.toLowerCase()}`)}</p>
                    <button className="md:hidden">
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                </div>
            )}
            <ul
                aria-label={title}
                className={`flex flex-col items-start w-full gap-[8px] text-secondary-200 text-[14px] overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px]' : 'max-h-0 md:max-h-[500px]'}`}
            >
                {items.map((item) => (
                    <li key={item.text} className="w-full text-left">
                        <Link
                            className={`block text-left hover:text-primary ${className}`}
                            to={item.url}
                        >
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

function Footer() {
    const { t } = useTranslation();
    // Use the translated footer data
    const footerData = useFooterData();

    return (
        <footer className="flex flex-col md:flex-row w-full bg-secondary-1000 px-6 sm:px-8 md:px-12 lg:px-[120px] py-[50px] md:py-[100px]">
            {/* Logo, Hours, and Social Icons Column */}
            <div className="flex flex-col min-w-[200px] px-[13px] gap-[32px] items-center mb-8 md:mb-0 md:mr-[60px] lg:mr-[80px]">
                <div className="flex flex-col gap-[16px] items-center text-center">
                    <img
                        src="/assets/OptimaLogoFooter.svg"
                        alt="Optima Rent Logo"
                        className="max-w-full h-auto"
                    />

                    <div className="flex flex-col w-[115px] h-[76px] items-center text-center text-base text-[14px] gap-[8px]">
                        <p className="w-[103px] h-[34px]">
                            {t("common.footer.work_hours.weekdays")}
                            <br />
                            {t("common.footer.work_hours.weekdays_hours")}
                        </p>
                        <p className="w-[103px] h-[34px]">
                            <span className="block whitespace-nowrap">
                                {t("common.footer.work_hours.weekend")}
                            </span>
                            {t("common.footer.work_hours.weekend_hours")}
                        </p>
                    </div>
                </div>
                <div className="flex gap-[8px] w-[56px] h-[24px] justify-center">
                    <Link to="/facebook" aria-label="Facebook">
                        <img
                            className="brightness-0 invert"
                            src={Facebook}
                            alt="Facebook"
                        />
                    </Link>
                    <Link to="/instagram" aria-label="Instagram">
                        <img
                            className="brightness-0 invert"
                            src={Instagram}
                            alt="Instagram"
                        />
                    </Link>
                </div>
            </div>

            {/* Footer Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full justify-between">
                {/* Column 1 & 2 Grouped */}
                <div className="flex flex-col gap-[16px] md:gap-[36px]">
                    <FooterColumn
                        title="LOCATIONS"
                        items={footerData.columns.locations}
                    />
                    <FooterColumn
                        title="TRAVEL_GUIDES"
                        items={footerData.columns.travelGuides}
                    />
                </div>

                {/* Column 3 & 4 Grouped */}
                <div className="flex flex-col gap-[16px] md:gap-[36px]">
                    <FooterColumn
                        title="SERVICES"
                        items={footerData.columns.services}
                    />
                    <FooterColumn
                        title="VEHICLES"
                        items={footerData.columns.vehicles}
                    />
                </div>

                {/* Column 5 & 6 Grouped */}
                <div className="flex flex-col gap-[16px] md:gap-[40px]">
                    <FooterColumn
                        title="COMPANY"
                        items={footerData.columns.company}
                    />
                    <FooterColumn
                        title="SUPPORT"
                        items={footerData.columns.support}
                    />
                </div>

                {/* Column 7 - Legal */}
                <div className="flex flex-col gap-[8px] items-start w-full">
                    <p className="font-bold text-base md:hidden text-left">{t("common.footer.categories.legal")}</p>
                    <ul className="flex flex-col items-start w-full gap-[8px] text-secondary-200 text-[14px]">
                        {footerData.legal.map((item) => (
                            <li key={item.text} className="w-full text-left">
                                <Link
                                    className="block text-left hover:text-primary underline"
                                    to={item.url}
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;