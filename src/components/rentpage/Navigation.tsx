"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { rentProps } from "../pages/RentACarZagreb";
import { getWordVariation } from "@/utils/cityDeclinations";
import { useState, useRef, useEffect } from "react";

const LOCATIONS = [
    {
        id: "airport",
        title: "Aerodrom Zagreb",
        description: "Besplatan transfer i dostava vozila",
        icon: "/assets/airplaneIcon.svg",
    },
    {
        id: "center",
        title: "Centar Zagreba",
        description: "Udoban najam u srcu grada.",
        icon: "/assets/centerIcon.svg",
    },
    {
        id: "address",
        title: "Vaša adresa",
        description:
            "Dostavljamo vozilo direktno na vašu lokaciju – kući, hotelu ili uredu.",
        icon: "/assets/adressIcon.svg",
    },
];

function Navigation({ city }: rentProps) {
    const [activeTab, setActiveTab] = useState(0);
    const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
    const position = { lat: 54, lng: 10 };
    const handleKeyDown = (event: React.KeyboardEvent) => {
        let newIndex = activeTab;

        switch (event.key) {
            case "ArrowRight":
            case "ArrowDown":
                newIndex = (activeTab + 1) % LOCATIONS.length;
                event.preventDefault();
                break;
            case "ArrowLeft":
            case "ArrowUp":
                newIndex =
                    (activeTab - 1 + LOCATIONS.length) % LOCATIONS.length;
                event.preventDefault();
                break;
            case "Home":
                newIndex = 0;
                event.preventDefault();
                break;
            case "End":
                newIndex = LOCATIONS.length - 1;
                event.preventDefault();
                break;
        }

        if (newIndex !== activeTab) {
            setActiveTab(newIndex);
            tabsRef.current[newIndex]?.focus();
        }
    };

    useEffect(() => {
        tabsRef.current[activeTab]?.focus();
    }, [activeTab]);

    return (
        <APIProvider apiKey="AIzaSyAcfyzUmTLIYEb-qfCuaEPBgU2N-FUnthI">
            <div className="w-full bg-neutral-100 flex justify-center">
                <section className="w-[1440px] px-[210px] py-[80px] flex flex-col gap-[50px] items-center">
                    <div className="flex flex-col gap-[8px] w-[989px]">
                        <h3 className="font-gilroy text-[46px] leading-[110%] text-primary">
                            Gdje nas možete pronaći u{" "}
                            {getWordVariation(city, "dative")}?
                        </h3>
                        <p className="font-gilroy text-[20px] leading-[120%] text-base-black">
                            Optima Rent je uvijek u blizini – preuzmite ili
                            vratite vozilo na ovim lokacijama.
                        </p>
                    </div>
                    <div className="flex w-[989px]">
                        <div
                            role="tablist"
                            aria-label="Location options"
                            className="flex flex-col gap-[16px] items-end"
                        >
                            {LOCATIONS.map((location, index) => (
                                <button
                                    key={location.id}
                                    role="tab"
                                    id={`tab-${location.id}`}
                                    aria-selected={activeTab === index}
                                    aria-controls={`panel-${location.id}`}
                                    tabIndex={activeTab === index ? 0 : -1}
                                    ref={(el: HTMLButtonElement | null) => {
                                        tabsRef.current[index] = el;
                                    }}
                                    onClick={() => setActiveTab(index)}
                                    onKeyDown={(e) => handleKeyDown(e)}
                                    className={`flex gap-[20px] rounded-s-[16px] p-[20px] transition-all duration-200 ${activeTab === index
                                            ? "h-full w-full bg-white text-base-black"
                                            : "bg-secondary-100 text-secondary-800 w-[90%]"
                                        }`}
                                >
                                    <img
                                        className="w-[40px] h-[40px]"
                                        style={{
                                            filter:
                                                activeTab === index
                                                    ? ""
                                                    : "invert(29%) sepia(16%) saturate(1935%) hue-rotate(182deg) brightness(92%) contrast(88%)",
                                        }}
                                        src={location.icon}
                                        alt=""
                                        aria-hidden="true"
                                    />
                                    <div className="flex flex-col gap-[16px] text-left">
                                        <div className="flex flex-col gap-[8px]">
                                            <h4 className="font-gilroy text-[32px] leading-[120%]">
                                                {location.title}
                                            </h4>
                                            <p className="text-[16px] font-semibold leading-[120%]">
                                                {location.description}
                                            </p>
                                        </div>
                                        {activeTab === index && (
                                            <p>asdahsndkj nasdjasnd kdasnj</p>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                        <div className="p-[20px] bg-white w-1/2 h-[671px]">
                            <Map
                                zoom={9}
                                center={position}
                                disableDefaultUI
                            ></Map>
                        </div>
                    </div>
                </section>
            </div>
        </APIProvider>
    );
}

export default Navigation;
