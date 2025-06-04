import { useTranslation } from "react-i18next";

export interface FooterItem {
    text: string;
    url: string;
}

export interface FooterColumnProps {
    title?: string;
    items: FooterItem[];
    className?: string;
}

// Add a translation hook that returns the same structure
// Add a translation hook that returns the same structure
export const useFooterData = () => {
    const { t } = useTranslation();

    return {
        columns: {
            locations: [
                { text: t("common.footer.locations.rent_zagreb"), url: "/rent-zagreb" },
                { text: t("common.footer.locations.rent_split"), url: "/rent-split" },
                { text: t("common.footer.locations.rent_zadar"), url: "/rent-zadar" },
            ],
            travelGuides: [
                { text: t("common.footer.travel_guides.zagreb"), url: "/zagreb" },
                { text: t("common.footer.travel_guides.istria"), url: "/istria" },
                { text: t("common.footer.travel_guides.dalmatia"), url: "/dalmatia" },
                { text: t("common.footer.travel_guides.slavonia"), url: "/slavonia" },
            ],
            services: [
                { text: t("common.footer.services.rent_a_car"), url: "/rent-a-car" },
                { text: t("common.footer.services.long_term"), url: "/long-term" },
                { text: t("common.footer.services.offers"), url: "/offers" },
            ],
            vehicles: [
                { text: t("common.footer.vehicles.suv"), url: "/suv" },
                { text: t("common.footer.vehicles.sports"), url: "/sports" },
                { text: t("common.footer.vehicles.electric"), url: "/electric" },
                { text: t("common.footer.vehicles.limousine"), url: "/limousine" },
                { text: t("common.footer.vehicles.luxury"), url: "/luxury" },
                { text: t("common.footer.vehicles.city_car"), url: "/city-car" },
            ],
            company: [
                { text: t("common.footer.company.about_us"), url: "/about-us" },
                { text: t("common.footer.company.careers"), url: "/careers" },
                { text: t("common.footer.company.sponsorship"), url: "/sponsorship" },
                { text: t("common.footer.company.press"), url: "/press" },
            ],
            support: [
                { text: t("common.footer.support.contact"), url: "/contact" },
                { text: t("common.footer.support.rental_conditions"), url: "/rental-conditions" },
                { text: t("common.footer.support.loyalty"), url: "/loyalty" },
                { text: t("common.footer.support.faq"), url: "/faq" },
                { text: t("common.footer.support.roadside"), url: "/roadside" },
                { text: t("common.footer.support.mobile"), url: "/mobile" },
            ],
        },
        legal: [
            { text: t("common.footer.legal.terms"), url: "/terms" },
            { text: t("common.footer.legal.privacy"), url: "/privacy" },
            { text: t("common.footer.legal.cookies"), url: "/cookies" },
        ],
    };
};