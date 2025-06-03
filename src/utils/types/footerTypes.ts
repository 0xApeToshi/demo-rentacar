export interface FooterItem {
    text: string;
    url: string;
}

export interface FooterColumnProps {
    title?: string;
    items: FooterItem[];
    className?: string;
}

export const footerData: {
    columns: {
        locations: FooterItem[];
        travelGuides: FooterItem[];
        services: FooterItem[];
        vehicles: FooterItem[];
        company: FooterItem[];
        support: FooterItem[];
    };
    legal: FooterItem[];
} = {
    columns: {
        locations: [
            { text: "Rent a car Zagreb", url: "/rent-zagreb" },
            { text: "Rent a car Split", url: "/rent-split" },
            { text: "Rent a car Zadar", url: "/rent-zadar" },
        ],
        travelGuides: [
            { text: "Zagreb", url: "/zagreb" },
            { text: "Istria", url: "/istria" },
            { text: "Dalmatia", url: "/dalmatia" },
            { text: "Slavonia", url: "/slavonia" },
        ],
        services: [
            { text: "Rent a car", url: "/rent-a-car" },
            { text: "Long term rental", url: "/long-term" },
            { text: "Special offers", url: "/offers" },
        ],
        vehicles: [
            { text: "SUV >", url: "/suv" },
            { text: "Sports >", url: "/sports" },
            { text: "Electric >", url: "/electric" },
            { text: "Limousine >", url: "/limousine" },
            { text: "Luxury >", url: "/luxury" },
            { text: "City car >", url: "/city-car" },
        ],
        company: [
            { text: "About us", url: "/about-us" },
            { text: "Careers", url: "/careers" },
            { text: "Sponsorship", url: "/sponsorship" },
            { text: "Press", url: "/press" },
        ],
        support: [
            { text: "Contact >", url: "/suv" },
            { text: "Rental conditions >", url: "/rental-conditions" },
            { text: "Loyalty >", url: "/loyalty" },
            { text: "FAQ >", url: "/faq" },
            { text: "Roadside assistance >", url: "/roadside" },
            { text: "Optima Rent - mobile app >", url: "/mobile" },
        ],
    },
    legal: [
        { text: "Terms & Conditions", url: "/terms" },
        { text: "Privacy Policy", url: "/privacy" },
        { text: "Cookie Policy", url: "/cookies" },
    ],
};
