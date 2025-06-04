// Simple interface definitions only
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

// Only keeping the original data for reference or fallback
export const baiterData: contactBaitersTypes[] = [
    {
        imageSrc: "/assets/contactBaiterOne.jpg",
        title: "Dugoročni najam za privatne korisnike",
        subtitle:
            "Tražite fleksibilan i pristupačan način vožnje bez obveze vlasništva?",
        text: "Naše opcije dugoročnog najma automobila daju vam slobodu da unajmite vozilo tjednima ili mjesecima—savršeno za produženi odmor, privremene potrebe ili jednostavno uživanje u pogodnostima posjedovanja vlastitog automobila. Birajte iz naše široke ponude vozila, prilagodite svoj najam i uživajte u vožnji bez muke onoliko dugo koliko vam je potrebno.",
        buttonText: "Kontaktirajte nas",
    },
    {
        imageSrc: "/assets/contactBaiterTwo.jpg",
        title: "Poslovni najam",
        subtitle: "Trebate vozila za neometano poslovanje?",
        text: "Naši dugoročni poslovni najam pružaju jednostavno i isplativo rješenje. Bilo da opremate svoj prodajni tim službenim automobilima, rješavate sezonsku potražnju ili upravljate poslovnim putovanjima, nudimo flotu pouzdanih vozila prilagođenih vašim poslovnim potrebama. Iskoristite prednosti konkurentnih cijena, fleksibilnih ugovora i personalizirane podrške kako biste zadržali svoje operacije na putu.",
        buttonText: "Kontaktirajte nas",
    },
];

export const aboutData: contactBaitersTypes[] = [
    {
        imageSrc: "/assets/fleet.jpg",
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
        imageSrc: "/assets/values.jpg",
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
        imageSrc: "/assets/environment.jpg",
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