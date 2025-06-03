import { useTranslation } from "react-i18next";
import CarCarousel from "../common/CarCarousel";

function HomeCarPicker() {
    const { t } = useTranslation();

    return (
        <div className="w-full bg-base flex justify-center">
            <div className="w-[1440px] flex flex-col gap-[40px] px-[120px] py-[80px]">
                <div className="flex flex-col gap-[8px] text-left w-fit">
                    <h2 className="text-[46px] font-gilroy text-primary leading-[110%]">
                        Drive Only the Best
                    </h2>
                    <p className="text-base-black text-[20px] font-gilroy leading-[120%]">
                        All our vehicles are new and reliable, ensuring your journey remains stress-free.
                    </p>
                </div>
                <CarCarousel />
            </div>
        </div>
    );
}
export default HomeCarPicker;