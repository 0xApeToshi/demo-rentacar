import { useTranslation } from "react-i18next";
import Button from "../common/Button";

function LongTermHero() {
    const { t } = useTranslation();

    return (
        <div className="bg-black w-full flex justify-center">
            <div className="flex h-[582px] overflow-hidden w-[1440px]">
                <div className="justify-between py-[62px] pl-[120px]">
                    <div className="w-[605px] flex flex-col gap-[16px] justify-start z-1">
                        <h2 className="text-left text-[64px] font-extrabold text-base leading-[110%]">
                            Dugoročni najam vozila, bezbrižna vožnja
                        </h2>
                        <span className="text-[20px] font-extrabold text-base">
                            <span className="flex justify-start w-[527px] text-left">
                                Uživajte u novim vozilima, 0-24 podršci i
                                fleksibilnim uvjetima koji se prilagođavaju
                                vašim potrebama.
                            </span>
                        </span>
                        <div className="flex flex-col gap-[4px] text-base text-[18px] leading-[120%]">
                            <div className="flex gap-[4px]">
                                <img src="/src/assets/longtermCheckCircle.svg"></img>
                                <a className="w-fit font-gilroy-medium">
                                    New cars
                                </a>
                            </div>

                            <div className="flex gap-[4px]">
                                <img src="/src/assets/longtermCheckCircle.svg"></img>

                                <a className="w-fit font-gilroy-medium">
                                    Flexible contracts
                                </a>
                            </div>

                            <div className="flex gap-[4px]">
                                <img src="/src/assets/longtermCheckCircle.svg"></img>

                                <a className="w-fit font-gilroy-medium">
                                    24/7 support - tailored to your needs
                                </a>
                            </div>
                        </div>
                        <Button variant="primary">Zatraži ponudu</Button>
                    </div>
                </div>
                <div className="relative h-[582px] w-full">
                    <img
                        className="h-full aspect-3/2 object-cover"
                        src="/src/assets/longTerm.png"
                    ></img>
                    <div className="absolute -inset-1 rotate-180 bg-gradient-to-l from-[rgba(0,0,0,1)] via-[rgba(34,31,31,0.1)] to-[rgba(34,31,31,0)]"></div>
                </div>
            </div>
        </div>
    );
}

export default LongTermHero;
