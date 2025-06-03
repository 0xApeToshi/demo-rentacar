import { contactBaitersTypes } from "./types/contactBaitersTypes";

type WordCase = {
    nominative: string;
    genitive: string;
    dative: string;
    accusative: string;
    vocative: string;
    locative: string;
    instrumental: string;
};

type VariationType = keyof WordCase;

type WordVariationsType = {
    [key: string]: WordCase;
};

export const wordVariations: WordVariationsType = {
    Zagreb: {
        nominative: "Zagreb",
        genitive: "Zagreba",
        dative: "Zagrebu",
        accusative: "Zagreb",
        vocative: "Zagrebe",
        locative: "Zagrebu",
        instrumental: "Zagrebom",
    },
    Split: {
        nominative: "Split",
        genitive: "Splita",
        dative: "Splitu",
        accusative: "Split",
        vocative: "Splite",
        locative: "Splitu",
        instrumental: "Splitom",
    },
    Osijek: {
        nominative: "Osijek",
        genitive: "Osijeka",
        dative: "Osijeku",
        accusative: "Osijek",
        vocative: "Osiječe",
        locative: "Osijeku",
        instrumental: "Osijekom",
    },
    Dubrovnik: {
        nominative: "Dubrovnik",
        genitive: "Dubrovnika",
        dative: "Dubrovniku",
        accusative: "Dubrovnik",
        vocative: "Dubrovniče",
        locative: "Dubrovniku",
        instrumental: "Dubrovnikom",
    },
    Rijeka: {
        nominative: "Rijeka",
        genitive: "Rijeke",
        dative: "Rijeci",
        accusative: "Rijeku",
        vocative: "Rijeko",
        locative: "Rijeci",
        instrumental: "Rijekom",
    },
};

export const getWordVariation = (word: string, variation: VariationType) => {
    if (!word) return "";

    const variations = wordVariations[word];
    if (!variations) return word;

    return variations[variation] || word;
};

const cityContent = {
    Zagreb: {
        imageSrc: "/src/assets/zagrebBaiter.jpg",
        title: "Istražite Zagreb uz Optima Rent",
        subtitle:
            "Uz Optima Rent, istraživanje grada nikada nije bilo jednostavnije i ugodnije!",
        text: "Zagreb, glavni grad Hrvatske, nudi jedinstvenu kombinaciju povijesnog šarma, suvremene kulture i prekrasnih prirodnih krajolika. Uz Optima Rent, istraživanje grada nikada nije bilo jednostavnije i ugodnije! Unajmite pouzdan automobil i otkrijte sve što Zagreb nudi – od šarmantnih ulica Gornjeg grada i veličanstvenog Trga bana Jelačića do parkova Maksimir i Jarun za opuštanje u prirodi. Isplanirajte vlastiti ritam putovanja i posjetite kulturne znamenitosti, gurmanske restorane ili živopisne tržnice – sve to uz fleksibilnost i udobnost koju pruža Optima Rent. Zagreb vas čeka, a s nama stižete dalje!",
        buttonText: "",
    },
    Split: {
        imageSrc: "/src/assets/splitBaiter.jpg",
        title: "Istražite Split uz Optima Rent",
        subtitle:
            "Uz Optima Rent, istraživanje grada nikada nije bilo jednostavnije i ugodnije!",
        text: "Split, drugi najveći grad Hrvatske, očarat će vas svojim bogatim povijesnim nasljeđem i mediteranskim šarmom. Uz Optima Rent, otkrijte sve čari ovog drevnog grada – od impozantne Dioklecijanove palače i živopisne Rive do prekrasnih plaža i okolnih otoka. Unajmite pouzdano vozilo i istražite grad svojim tempom, od povijesnih znamenitosti do skrivenih dragulja gastronomske scene. Split vas poziva, a mi vam omogućujemo da ga doživite u potpunosti!",
        buttonText: "",
    },
} as const;

export const cityData = (city: string) => {
    const defaultData = {
        imageSrc: "/src/assets/defaultCityBaiter.jpg",
        title: `Istražite ${city} uz Optima Rent`,
        subtitle:
            "Uz Optima Rent, istraživanje grada nikada nije bilo jednostavnije i ugodnije!",
        text: `Otkrijte sve što ${city} nudi uz Optima Rent! Unajmite pouzdan automobil i istražite grad svojim tempom. ${city} vas čeka, a s nama stižete dalje!`,
        buttonText: "",
    };

    const citySpecificData =
        cityContent[city as keyof typeof cityContent] || defaultData;
    return [citySpecificData] as contactBaitersTypes[];
};

export const getOtherCities = (excludeCity: string): string[] => {
    const allCities = Object.keys(wordVariations);
    return allCities.filter((city) => city !== excludeCity);
};
