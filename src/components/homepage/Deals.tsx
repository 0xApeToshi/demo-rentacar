import { Card, CardContent } from "../ui/card";
import Button from "../common/Button";

function Deals() {
    return (
        <div className="w-[1440px] flex flex-col items-start gap-[40px] px-[120px] pt-[80px] pb-[100px]">
            <div className="w-full flex justify-between items-end   ">
                <div className="flex flex-col gap-[16px]">
                    <h3 className="w-[842px] text-primary text-[46px] font-extrabold leading-[110%] flex justify-start">
                        Vozite više, platite manje
                    </h3>
                    <p className="text-base-black text-[20px] font-extrabold leading-[120%]">
                        Ekskluzivne ponude za nova vozila, fleksibilni uvjeti i
                        bolje cijene – ne propustite priliku!
                    </p>
                </div>
                <Button variant="secondary">Posebne ponude</Button>
            </div>
            <div className="flex justify-between w-full">
                <Card className="relative w-[600px] h-[396px] rounded-[8px] overflow-hidden">
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                        <img
                            src="/src/assets/road.jfif"
                            className="absolute w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                    </div>

                    <div className="absolute top-4 right-0 bg-primary rounded-s-[8px] p-[8px] text-base text-[12px] leading-[115%] font-light">
                        Ponuda dostupna do kraja 2024
                    </div>
                    <CardContent className="w-full h-full flex items-end justify-between">
                        <div className="flex flex-col gap-[8px] w-[276px] text-left z-0">
                            <p className="text-[40px] text-primary font-black">
                                15 %
                            </p>
                            <p className="text-[20px] text-primary font-extrabold">
                                Za prvu registraciju
                            </p>
                            <p className="text-[16px] text-base-black">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                            </p>
                        </div>
                        <div className="flex z-2 flex-col items-end gap-[6px]">
                            <div className="inline-flex items-center w-fit rounded-t-[6px] p-[6px] bg-[#E3F0E6] gap-[4px]">
                                <img src="/src/assets/checkStar.svg"></img>
                                <a className="z-3 flex text-[12px] text-secondary-1000 leading-[120%] text-left">
                                    Ova ponuda uključuje besplatnu ograničenu
                                    kilometražu
                                </a>
                            </div>
                            <Button variant="primary">Pogledaj više</Button>
                        </div>
                    </CardContent>
                </Card>
                <Card className="relative w-[280px] h-[396px] rounded-[8px] overflow-hidden">
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                        <img
                            src="/src/assets/sunsetCar.jfif"
                            className="absolute w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                    </div>

                    <div className="absolute top-4 right-0 bg-primary rounded-s-[8px] p-[8px] text-base text-[12px] leading-[115%] font-light">
                        Ponuda dostupna do kraja 2024
                    </div>
                    <CardContent className="w-full h-full z-1 flex items-end justify-start">
                        <div className="flex flex-col gap-[8px] w-[276px] text-left z-1">
                            <p className="text-[40px] text-primary font-black">
                                20 %
                            </p>
                            <p className="text-[20px] text-primary font-extrabold">
                                Za prvu registraciju
                            </p>
                            <p className="text-[16px] text-base-black">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                            </p>
                            <Button variant="primary">Pogledaj više</Button>
                        </div>
                    </CardContent>
                </Card>
                <Card className="relative w-[280px] h-[396px] rounded-[8px] overflow-hidden">
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                        <img
                            src="/src/assets/sunsetCar.jfif"
                            className="absolute w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                    </div>

                    <CardContent className="w-full h-full z-1 flex items-end justify-start">
                        <div className="flex flex-col gap-[8px] w-[276px] text-left z-1">
                            <p className="text-[40px] text-primary font-black">
                                1 €
                            </p>
                            <p className="text-[20px] text-primary font-extrabold">
                                Za prvu registraciju
                            </p>
                            <p className="text-[16px] text-base-black">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                            </p>
                            <Button variant="primary">Pogledaj više</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Deals;
