import { getWordVariation } from "@/utils/cityDeclinations";
import { rentProps } from "../pages/RentACarZagreb";
import CarCarousel from "../common/CarCarousel";
import Button from "../common/Button";

const rentPickerData = [
    {
        title: "MINI AUTOMOBILI",
        description: "Idealni za gradske vožnje.",
    },
    {
        title: "SUV I LIMUZINE",
        description: "Savršeni za obiteljske i poslovne korisnike.",
    },
    {
        title: "KOMBI VOZILA",
        description: "Prostrana opcija za grupe ili veći prtljag.",
    },
];

function CarPicker({ city }: rentProps) {
    return (
        <div className="w-full bg-white flex justify-center">
            <section className="w-[1440px] px-[120px] py-[80px]">
                <div className="flex flex-col gap-[8px] text-left w-[593px] items-start">
                    <h3 className="font-gilroy text-[46px] leading-[110%] text-primary">
                        Odaberite savršeno vozilo za svoj boravak u{" "}
                        {getWordVariation(city, "dative")}
                    </h3>
                    <p className="w-[565px] text-base-black text-[20px] font-gilory leading-[120%]">
                        Provjerite našu flotu i pronađite automobil koji
                        najbolje odgovara vašim potrebama.
                    </p>
                </div>
                <div className="pb-[80px] pt-[40px] flex gap-[32px]">
                    {rentPickerData.map((item) => (
                        <div className="p-[22px] rounded-[16px] w-1/3 h-fit flex flex-col gap-[16px] items-center shadow-lg">
                            <div className="flex flex-col gap-[8px]">
                                <p className="font-gilroy text-[28px] leading-[112%] text-base-black">
                                    {item.title}
                                </p>
                                <p className="text-[16px] leading-[150%] text-base-black">
                                    {item.description}
                                </p>
                            </div>
                            <Button variant="secondary" icon="search">
                                Pretražite
                            </Button>
                        </div>
                    ))}
                </div>
                <CarCarousel />
            </section>
        </div>
    );
}

export default CarPicker;
