// src/utils/cityRepository.ts
import { contactBaitersTypes } from "./types/contactBaitersTypes";

export interface CityLocation {
    title: string;
    description: string;
    coordinates: [number, number]; // For map display
}

export interface CityAttraction {
    name: string;
    description: string;
    distance: string;
    image: string;
}

export interface CityFaq {
    question: string;
    answer: string;
}

export interface CityData {
    slug: string;         // URL slug: 'zagreb', 'split', etc.
    name: string;         // Display name: 'Zagreb', 'Split', etc.
    heroImage: string;    // Path to city-specific hero image
    locations: {          // City-specific pickup locations
        airport?: CityLocation;
        center: CityLocation;
        custom?: CityLocation;
        // Other locations specific to the city
    };
    recommendedVehicles: string[];  // IDs or types of vehicles recommended for this city
    faqs: CityFaq[];               // City-specific FAQs
    attractions: CityAttraction[];  // Nearby attractions
    drivingTips: string[];          // City-specific driving tips
    baiterContent: contactBaitersTypes; // City-specific baiter content
}

export const CITIES: Record<string, CityData> = {
    zagreb: {
        slug: 'zagreb',
        name: 'Zagreb',
        heroImage: '/assets/zagrebHero.png',
        locations: {
            airport: {
                title: "Aerodrom Zagreb",
                description: "Besplatan transfer i dostava vozila",
                coordinates: [45.7293, 16.0686]
            },
            center: {
                title: "Centar Zagreba",
                description: "Udoban najam u srcu grada",
                coordinates: [45.8150, 15.9819]
            },
            custom: {
                title: "Vaša adresa",
                description: "Dostavljamo vozilo direktno na vašu lokaciju – kući, hotelu ili uredu",
                coordinates: [45.8150, 15.9819]
            }
        },
        recommendedVehicles: ["mini", "economy", "suv"],
        faqs: [
            {
                question: "Koje dokumente trebam za najam vozila u Zagrebu?",
                answer: "Za najam vozila u Zagrebu potrebna vam je važeća vozačka dozvola, osobna iskaznica ili putovnica, te kreditna kartica na ime vozača za depozit."
            },
            {
                question: "Mogu li preuzeti vozilo na aerodromu Zagreb?",
                answer: "Da, nudimo preuzimanje vozila na Zračnoj luci Franjo Tuđman. Naši predstavnici će vas dočekati i predati vam ključeve bez dodatne naknade."
            },
            {
                question: "Koje su najbolje lokacije za posjetiti automobilom u okolici Zagreba?",
                answer: "Iz Zagreba automobilom možete lako posjetiti Medvednicu, Samobor, Plitvička jezera (2 sata vožnje), te brojne dvorce Hrvatskog zagorja."
            }
        ],
        attractions: [
            {
                name: "Medvednica i Sljeme",
                description: "Planina nadomak Zagreba s brojnim planinarskim stazama i skijalištem",
                distance: "30 min",
                image: "/assets/medvednica.jpg"
            },
            {
                name: "Samobor",
                description: "Šarmantni gradić poznat po kremšnitama i prirodnim ljepotama",
                distance: "30 min",
                image: "/assets/samobor.jpg"
            },
            {
                name: "Plitvička jezera",
                description: "Nacionalni park pod zaštitom UNESCO-a s prekrasnim jezerima i slapovima",
                distance: "2h",
                image: "/assets/plitvice.jpg"
            }
        ],
        drivingTips: [
            "U Zagrebu je parkiranje organizirano u zonama. Zona 1 (crvena) je najskuplja i nalazi se u strogom centru.",
            "Zagrebačka obilaznica je izvrsna za brzo obilaženje grada i izbjegavanje gradskih gužvi.",
            "Izbjegavajte vožnju kroz centar tijekom jutarnjih (7-9h) i popodnevnih (16-18h) gužvi."
        ],
        baiterContent: {
            imageSrc: "/assets/zagrebBaiter.jpg",
            title: "Istražite Zagreb uz Optima Rent",
            subtitle: "Uz Optima Rent, istraživanje grada nikada nije bilo jednostavnije i ugodnije!",
            text: "Zagreb, glavni grad Hrvatske, nudi jedinstvenu kombinaciju povijesnog šarma, suvremene kulture i prekrasnih prirodnih krajolika. Uz Optima Rent, istraživanje grada nikada nije bilo jednostavnije i ugodnije! Unajmite pouzdan automobil i otkrijte sve što Zagreb nudi – od šarmantnih ulica Gornjeg grada i veličanstvenog Trga bana Jelačića do parkova Maksimir i Jarun za opuštanje u prirodi.",
            buttonText: "Rezerviraj odmah"
        }
    },
    split: {
        slug: 'split',
        name: 'Split',
        heroImage: '/assets/splitHero.jpg',
        locations: {
            airport: {
                title: "Zračna luka Split",
                description: "Brz i jednostavan najam odmah po slijetanju",
                coordinates: [43.5390, 16.2980]
            },
            center: {
                title: "Centar Splita",
                description: "Preuzimanje vozila u blizini Dioklecijanove palače",
                coordinates: [43.5081, 16.4402]
            },
            custom: {
                title: "Vaša adresa",
                description: "Dostavljamo vozilo na vašu lokaciju bez dodatne naknade",
                coordinates: [43.5081, 16.4402]
            }
        },
        recommendedVehicles: ["mini", "economy", "cabrio"],
        faqs: [
            {
                question: "Mogu li unajmljenim vozilom posjetiti hrvatske otoke?",
                answer: "Da, s našim vozilima možete putovati trajektom na otoke. Potrebno je samo da nas obavijestite unaprijed o svojim planovima."
            },
            {
                question: "Kakva je procedura za preuzimanje vozila na splitskom aerodromu?",
                answer: "Naš predstavnik će vas dočekati u dolasku s natpisom Optima Rent. Alternativno, možemo organizirati shuttle do našeg ureda koji se nalazi samo 5 minuta od aerodroma."
            },
            {
                question: "Postoje li ograničenja gdje mogu putovati s unajmljenim vozilom iz Splita?",
                answer: "S našim vozilima možete slobodno putovati po cijeloj Hrvatskoj. Za putovanja u druge zemlje potrebna je prethodna najava i moguća je dodatna naknada za zeleni karton."
            }
        ],
        attractions: [
            {
                name: "Trogir",
                description: "Povijesni grad pod zaštitom UNESCO-a, samo 30 minuta vožnje od Splita",
                distance: "30 min",
                image: "/assets/trogir.jpg"
            },
            {
                name: "Nacionalni park Krka",
                description: "Prekrasni slapovi i prirodne ljepote",
                distance: "1h",
                image: "/assets/krka.jpg"
            },
            {
                name: "Makarska rivijera",
                description: "Predivne plaže i kristalno čisto more",
                distance: "1h",
                image: "/assets/makarska.jpg"
            }
        ],
        drivingTips: [
            "Ljeti je promet u Splitu vrlo gust, posebno oko trajektne luke. Planirajte putovanje unaprijed.",
            "Za obilazak okolice Splita, magistrala (Jadranska cesta) pruža prekrasne poglede na more.",
            "Pazite na parkiranje u centru Splita - parkirna mjesta su ograničena, preporučamo korištenje javnih garaža."
        ],
        baiterContent: {
            imageSrc: "/assets/splitBaiter.jpg",
            title: "Istražite Split uz Optima Rent",
            subtitle: "Otkrijte sve čari Dalmacije s našim pouzdanim vozilima",
            text: "Split, drugi najveći grad Hrvatske, očarat će vas svojim bogatim povijesnim nasljeđem i mediteranskim šarmom. Uz Optima Rent, otkrijte sve čari ovog drevnog grada – od impozantne Dioklecijanove palače i živopisne Rive do prekrasnih plaža i okolnih otoka.",
            buttonText: "Rezerviraj odmah"
        }
    },
    dubrovnik: {
        slug: 'dubrovnik',
        name: 'Dubrovnik',
        heroImage: '/assets/dubrovnikHero.jpg',
        locations: {
            airport: {
                title: "Zračna luka Dubrovnik",
                description: "Jednostavno preuzimanje vozila odmah po slijetanju",
                coordinates: [42.5614, 18.2683]
            },
            center: {
                title: "Centar Dubrovnika",
                description: "Preuzimanje vozila blizu Starog grada",
                coordinates: [42.6507, 18.0944]
            }
        },
        recommendedVehicles: ["economy", "cabrio", "suv"],
        faqs: [
            {
                question: "Je li moguće s unajmljenim vozilom putovati u Crnu Goru?",
                answer: "Da, s našim vozilima možete putovati u Crnu Goru uz prethodnu najavu i dodatnu naknadu za zeleni karton osiguranja."
            },
            {
                question: "Gdje mogu parkirati u blizini Starog grada Dubrovnika?",
                answer: "Parking u blizini Starog grada je ograničen. Preporučamo korištenje javnih garaža ili parkiranje u zoni Lapad, odakle možete koristiti javni prijevoz do Starog grada."
            }
        ],
        attractions: [
            {
                name: "Elafitski otoci",
                description: "Prekrasni otoci Koločep, Lopud i Šipan, idealni za jednodnevne izlete",
                distance: "30 min (trajekt)",
                image: "/assets/elafiti.jpg"
            },
            {
                name: "Cavtat",
                description: "Slikoviti gradić s predivnom rivom i povijesnim znamenitostima",
                distance: "30 min",
                image: "/assets/cavtat.jpg"
            }
        ],
        drivingTips: [
            "Jadranska magistrala oko Dubrovnika nudi spektakularne poglede, ali zahtijeva opreznu vožnju zbog zavojitih dionica.",
            "Ljeti očekujte gužve na cestama, posebno oko Starog grada i na graničnim prijelazima s Bosnom i Hercegovinom."
        ],
        baiterContent: {
            imageSrc: "/assets/dubrovnikBaiter.jpg",
            title: "Istražite Dubrovnik uz Optima Rent",
            subtitle: "Doživite biser Jadrana s našim pouzdanim vozilima",
            text: "Dubrovnik, poznat kao 'Biser Jadrana', očarat će vas svojom ljepotom, bogatom poviješću i predivnim okruženjem. S našim vozilima možete istražiti ne samo ovaj fascinantni grad, već i prekrasnu okolicu, od Elafitskih otoka do Cavtata i Konavala.",
            buttonText: "Rezerviraj odmah"
        }
    }
};

export function getCityBySlug(slug: string): CityData | undefined {
    return CITIES[slug];
}

export function getAllCities(): CityData[] {
    return Object.values(CITIES);
}

export function getCityNamesExcept(excludeCity: string): string[] {
    return Object.values(CITIES)
        .filter(city => city.slug !== excludeCity.toLowerCase())
        .map(city => city.name);
}