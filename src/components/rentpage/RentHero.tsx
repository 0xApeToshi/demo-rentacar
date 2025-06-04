// src/components/rentpage/RentHero.tsx
import SearchBar from "@/components/common/SearchBar";
import { useTranslation } from "react-i18next";

interface RentHeroProps {
    city: string;
    imageUrl?: string;
}

function RentHero({ city, imageUrl = "/assets/zagrebHero.png" }: RentHeroProps) {
    const { t } = useTranslation();

    return (
        <div className="w-[1440px] pl-[120px] pb-[84px] h-[602px] overflow-hidden relative flex items-start justify-end flex-col gap-[50px]">
            <span className="text-left font-gilroy text-base flex z-1 flex-col gap-[16px]">
                <h2 className="text-[64px] leading-[110%]">
                    {t('rent.hero.title', { city })}
                </h2>
                <p className="text-[20px] leading-[120%]">
                    {t('rent.hero.subtitle')}
                </p>
            </span>
            <SearchBar initialLocation={city} />
            <div className="absolute top-0 left-0 h-full w-full">
                <img
                    className="absolute -top-[272px] left-0 w-full h-[1100px] object-cover"
                    src={imageUrl}
                    alt={`Rent a car ${city}`}
                />
                <div className="absolute -inset-1 rotate-180 bg-gradient-to-l from-[rgba(0,0,0,1)] via-[rgba(34,31,31,0.6)] to-[rgba(34,31,31,0)]"></div>
            </div>
        </div>
    );
}

export default RentHero;