// src/components/rentpage/CityAttractions.tsx
import { CityAttraction } from "@/utils/cityRepository";
import { getWordVariation } from "@/utils/cityDeclinations";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

interface CityAttractionsProps {
    city: string;
    attractions: CityAttraction[];
}

function CityAttractions({ city, attractions }: CityAttractionsProps) {
    const { t } = useTranslation();
    const cityInDative = getWordVariation(city, "dative");

    return (
        <div className="w-full bg-neutral-100 flex justify-center">
            <section className="w-[1440px] px-[120px] py-[80px] flex flex-col gap-[40px]">
                <div className="flex flex-col gap-[8px] text-left">
                    <h3 className="font-gilroy text-[46px] leading-[110%] text-primary">
                        {t("rent.attractions.title", { city: cityInDative, defaultValue: `Popularne destinacije u okolici ${city}` })}
                    </h3>
                    <p className="text-base-black text-[20px] font-gilroy leading-[120%]">
                        {t("rent.attractions.subtitle", { city, defaultValue: `Otkrijte predivna mjesta dostupna automobilom iz ${city}` })}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
                    {attractions.map((attraction, index) => (
                        <Card key={index} className="rounded-[8px] overflow-hidden shadow-lg bg-white border-none">
                            <div className="w-full h-[200px]">
                                <img
                                    src={attraction.image}
                                    alt={attraction.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <CardContent className="p-[24px] flex flex-col gap-[16px]">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-gilroy text-[24px] text-primary leading-[120%]">
                                        {attraction.name}
                                    </h4>
                                    <span className="bg-secondary-100 text-secondary-900 px-[12px] py-[4px] rounded-full text-[14px] font-semibold">
                                        {attraction.distance}
                                    </span>
                                </div>
                                <p className="text-base-black text-[16px] leading-[150%]">
                                    {attraction.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-left">
                    <p className="text-base-black text-[16px] leading-[150%]">
                        {t("rent.attractions.driving_tip_title", { defaultValue: "Savjeti za vožnju u " + cityInDative + ":" })}
                    </p>
                    <ul className="list-disc pl-[20px] mt-[12px] space-y-[8px]">
                        {attractions.length > 0 && (
                            <li className="text-base-black text-[16px] leading-[150%]">
                                {t("rent.attractions.rental_tip", { defaultValue: "Za najbolje iskustvo istraživanja, preporučamo najam vozila na minimalno 3 dana." })}
                            </li>
                        )}
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default CityAttractions;