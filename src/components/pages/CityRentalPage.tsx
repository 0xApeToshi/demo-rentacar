// src/components/pages/CityRentalPage.tsx
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';

import RentHero from "@/components/rentpage/RentHero";
import FeatureCards from "@/components/homepage/FeatureCards";
import Reviews from "@/components/homepage/Reviews";
import ContactBaiters from "@/components/longtermpage/ContactBaiters";
import Navigation from "@/components/rentpage/Navigation";
import RentBanner from "@/components/rentpage/RentBanner";
import CarPicker from "@/components/rentpage/CarPicker";
import CityFaqSection from "@/components/rentpage/CityFaqSection";
import CityAttractions from "@/components/rentpage/CityAttractions";
import { getCityBySlug, getCityNamesExcept, CityData } from "@/utils/cityRepository";
import { getWordVariation } from "@/utils/cityDeclinations";

function CityRentalPage() {
    const { citySlug } = useParams<{ citySlug: string }>();
    console.log(citySlug);
    const { t } = useTranslation();
    const [cityData, setCityData] = useState<CityData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (citySlug) {
            const data = getCityBySlug(citySlug);
            if (data) {
                setCityData(data);
                setLoading(false);
                setError(false);
            } else {
                setError(true);
                setLoading(false);
            }
        } else {
            setError(true);
            setLoading(false);
        }
    }, [citySlug]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-2xl font-gilroy">Loading...</p>
            </div>
        );
    }

    if (error || !cityData) {
        return (
            <div className="flex justify-center items-center min-h-screen flex-col gap-4">
                <p className="text-2xl text-primary font-gilroy">City not found</p>
                <p>The requested city page does not exist.</p>
                <Link to="/" className="text-primary underline">Return to homepage</Link>
            </div>
        );
    }

    const city = cityData.name;
    const otherCities = getCityNamesExcept(city);
    const cityInDative = getWordVariation(city, "dative");

    return (
        <div className="flex flex-col items-center bg-base w-full">
            <RentHero city={city} imageUrl={cityData.heroImage} />

            <div className="bg-base pt-[70px] w-full flex justify-center">
                <h3 className="w-[994px] font-gilroy leading-[110%] text-[46px] text-base-black">
                    {t('rent.why_choose.title', { city: cityInDative })}
                </h3>
            </div>

            <FeatureCards />

            <Navigation
                city={city}
                locations={cityData.locations}
            />

            <CarPicker
                city={city}
                recommendedVehicles={cityData.recommendedVehicles}
            />

            <CityAttractions
                city={city}
                attractions={cityData.attractions}
            />

            <ContactBaiters
                items={[cityData.baiterContent]}
            />

            <CityFaqSection
                city={city}
                faqs={cityData.faqs}
            />

            <Reviews
                title={t('rent.reviews.title', { city: cityInDative })}
                text={t('rent.reviews.subtitle', { city: cityInDative })}
            />

            <RentBanner city={city} />

            <div className="w-full bg-white flex justify-center">
                <div className="w-[1440px] flex flex-wrap gap-[20px] px-[120px] py-[80px]">
                    {otherCities.map((otherCity) => (
                        <Link
                            key={otherCity}
                            to={`/rent-${otherCity.toLowerCase()}`}
                            className="bg-base w-[266px] rounded-[8px] shadow-lg p-[12px] font-gilroy text-[20px] leading-[120%] hover:bg-secondary-100 transition-colors inline-block text-center"
                        >
                            Rent a car {otherCity}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CityRentalPage;