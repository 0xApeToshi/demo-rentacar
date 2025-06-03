import RentHero from "@/components/rentpage/RentHero";
import FeatureCards from "../homepage/FeatureCards";
import Reviews from "../homepage/Reviews";
import {
    cityData,
    getOtherCities,
    getWordVariation,
} from "@/utils/cityDeclinations";
import ContactBaiters from "../longtermpage/ContactBaiters";
import Navigation from "../rentpage/Navigation";
import RentBanner from "../rentpage/RentBanner";
import CarPicker from "../rentpage/CarPicker";

export interface rentProps {
    city: string;
}

function RentACarZagreb({ city }: rentProps) {
    return (
        <div className="flex flex-col items-center bg-base w-full">
            <RentHero city={city}></RentHero>
            <div className="bg-base pt-[70px] w-full flex justify-center">
                <h3 className="w-[994px] font-gilroy leading-[110%] text-[46px] text-base-black">
                    Zašto odabrati Optima Rent za najam automobila u{" "}
                    {getWordVariation(city, "dative")}?
                </h3>
            </div>
            <FeatureCards />
            <Navigation city={city} />
            <CarPicker city={city} />
            <ContactBaiters items={cityData(city)} />
            <Reviews
                title={`Što naši korisnici kažu o najmu u ${getWordVariation(city, "dative")}?`}
                text={`Prikaz nekoliko recenzija korisnika koji su unajmili vozilo u ${getWordVariation(city, "dative")}.`}
            />
            <RentBanner city={city} />
            <div className="w-full bg-white flex justify-center">
                <div className="w-[1440px] flex gap-[20px] px-[120px] py-[80px]">
                    {getOtherCities(city).map((otherCity) => (
                        <button
                            id="index"
                            className="bg-base w-[266px] rounded-[8px] shadow-lg p-[12px] font-gilroy text-[20px] leading-[120%]"
                        >
                            Rent a car {otherCity}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RentACarZagreb;
