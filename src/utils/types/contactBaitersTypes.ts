import { useTranslation } from "react-i18next";

export interface contactBaitersTypes {
    imageSrc: string;
    title: string;
    subtitle: string;
    text?: string;
    buttonText: string;
    points?: string[];
    color?: "blue" | "green";
}

export interface BaiterProps {
    items: contactBaitersTypes[];
}

export const baiterData: contactBaitersTypes[] = [
    {
        imageSrc: "/assets/contactBaiterOne.jfif",
        title: "Dugoročni najam za privatne korisnike",
        subtitle:
            "Tražite fleksibilan i pristupačan način vožnje bez obveze vlasništva?",
        text: "Naše opcije dugoročnog najma automobila daju vam slobodu da unajmite vozilo tjednima ili mjesecima—savršeno za produženi odmor, privremene potrebe ili jednostavno uživanje u pogodnostima posjedovanja vlastitog automobila. Birajte iz naše široke ponude vozila, prilagodite svoj najam i uživajte u vožnji bez muke onoliko dugo koliko vam je potrebno.",
        buttonText: "Kontaktirajte nas",
    },
    {
        imageSrc: "/assets/contactBaiterTwo.jfif",
        title: "Poslovni najam",
        subtitle: "Trebate vozila za neometano poslovanje?",
        text: "Naši dugoročni poslovni najam pružaju jednostavno i isplativo rješenje. Bilo da opremate svoj prodajni tim službenim automobilima, rješavate sezonsku potražnju ili upravljate poslovnim putovanjima, nudimo flotu pouzdanih vozila prilagođenih vašim poslovnim potrebama. Iskoristite prednosti konkurentnih cijena, fleksibilnih ugovora i personalizirane podrške kako biste zadržali svoje operacije na putu.",
        buttonText: "Kontaktirajte nas",
    },
];

export const aboutData: contactBaitersTypes[] = [
    {
        imageSrc: "/assets/fleet.jfif",
        title: "Moderna flota",
        subtitle: "Kvaliteta, sigurnost i udobnost",
        points: [
            "Do 2 godine starosti",
            "Redovito održavana - bez nepredviđenih kvarova",
            "Raznolika ponuda - od gradskih automobila do SUV-pva i kombija",
            "Kod nas ne iznajmljujete samo automobil – birate sigurnost i pouzdanost.",
        ],
        color: "blue",
        buttonText: "Rent now",
    },
    {
        imageSrc: "/assets/values.jfif",
        title: "Naše temeljne vrijednosti",
        subtitle:
            "U srcu svega što radimo su vrijednosti koje definiraju tko smo:",
        points: [
            "Briga o korisnicima",
            "Fleksibilnost",
            "Inovacije",
            "Povjerenje",
        ],
        color: "blue",
        buttonText: "Rent long-term",
    },
    {
        imageSrc: "/assets/environment.jfif",
        title: "Održivost i društvena odgovornost",
        subtitle:
            "Brinemo više – ne samo o korisnicima, već i o okolišu i zajednici. U Optima Rentu posvećeni smo smanjenju ekološkog otiska kroz:",
        points: [
            "Ekološki prihvatljiva vozila s nižom potrošnjom goriva",
            "Redovno održavanje flote za smanjenje emisija",
            "Podršku lokalnim inicijativama i partnerstva s društveno odgovornim projektima",
        ],
        color: "green",
        buttonText: "",
    },
];

export const useBaiterData = () => {
    const { t } = useTranslation();

    return [
        {
            imageSrc: "/assets/contactBaiterOne.jfif",
            title: t("long_term.contact_baiters.private.title"),
            subtitle: t("long_term.contact_baiters.private.subtitle"),
            text: t("long_term.contact_baiters.private.text"),
            buttonText: t("common.buttons.contact_us"),
        },
        {
            imageSrc: "/assets/contactBaiterTwo.jfif",
            title: t("long_term.contact_baiters.business.title"),
            subtitle: t("long_term.contact_baiters.business.subtitle"),
            text: t("long_term.contact_baiters.business.text"),
            buttonText: t("common.buttons.contact_us"),
        },
    ];
};

export const useAboutData = () => {
    const { t } = useTranslation();

    return [
        {
            imageSrc: "/assets/fleet.jfif",
            title: t("about.fleet.title"),
            subtitle: t("about.fleet.subtitle"),
            points: [
                t("about.fleet.points.0"),
                t("about.fleet.points.1"),
                t("about.fleet.points.2"),
                t("about.fleet.points.3"),
            ],
            color: "blue",
            buttonText: t("common.buttons.rent_now"),
        },
        {
            imageSrc: "/assets/values.jfif",
            title: t("about.values.title"),
            subtitle: t("about.values.subtitle"),
            points: [
                t("about.values.points.0"),
                t("about.values.points.1"),
                t("about.values.points.2"),
                t("about.values.points.3"),
            ],
            color: "blue",
            buttonText: t("common.buttons.rent_long_term"),
        },
        {
            imageSrc: "/assets/environment.jfif",
            title: t("about.sustainable.title"),
            subtitle: t("about.sustainable.subtitle"),
            points: [
                t("about.sustainable.points.0"),
                t("about.sustainable.points.1"),
                t("about.sustainable.points.2"),
            ],
            color: "green",
            buttonText: "",
        },
    ];
};