import { getWordVariation } from "@/utils/cityDeclinations";
import Button from "../common/Button";
import { rentProps } from "../pages/RentACarZagreb";

function RentBanner({ city }: rentProps) {
    return (
        <div className="w-full bg-white flex justify-center">
            <section className="w-[1440px] px-[120px] py-[80px]">
                <div className="w-full rounded-[32px] bg-primary py-[88px] px-[120px] flex flex-col gap-[32px] items-center">
                    <div className="w-[736px] flex flex-col gap-[16px] items-start text-left">
                        <h3 className="w-[697px] font-gilroy text-[64px] leading-[110%] text-base">
                            Rezervirajte automobil već danas
                        </h3>
                        <p className="font-gilroy text-[20px] leading-[120%] text-base">
                            Iskoristite vrhunsku uslugu najma u{" "}
                            {getWordVariation(city, "dative")} uz Optima Rent
                        </p>
                        <p className="text-base leading-[120%]">
                            Whether you need a car for a day or a long-term
                            rental, we’ve got you covered with flexible options
                            and a customer-first approach.
                        </p>
                    </div>
                    <div className="w-[736px] flex justify-start gap-[16px]">
                        <Button
                            variant="primary"
                            icon="search"
                            className="border"
                        >
                            Kontaktirajte nas
                        </Button>
                        <Button variant="secondary" icon="search">
                            Pogledajte flotu
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default RentBanner;
