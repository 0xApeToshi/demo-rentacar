// src/components/rentpage/Navigation.tsx
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { getWordVariation } from "@/utils/cityDeclinations";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CityLocation } from "@/utils/cityRepository";

interface NavigationProps {
    city: string;
    locations: {
        airport?: CityLocation;
        center: CityLocation;
        custom?: CityLocation;
        [key: string]: CityLocation | undefined;
    };
}

function Navigation({ city, locations }: NavigationProps) {
    const { t } = useTranslation();
    const [activeTabId, setActiveTabId] = useState<string>('center');
    const [activeLocation, setActiveLocation] = useState<CityLocation>(locations.center);
    const tabsRef = useRef<Record<string, HTMLButtonElement | null>>({});
    const cityInDative = getWordVariation(city, "dative");

    // Convert locations object to array for easier rendering
    const locationArray = Object.entries(locations)
        .map(([key, value]) => value ? { id: key, ...value } : null)
        .filter((item): item is (CityLocation & { id: string }) => item !== null);

    useEffect(() => {
        // Set active location when tab changes
        const location = locations[activeTabId];
        if (location) {
            setActiveLocation(location);
        }
    }, [activeTabId, locations]);

    const handleTabClick = (tabId: string) => {
        setActiveTabId(tabId);
    };

    const handleKeyDown = (event: React.KeyboardEvent, tabId: string) => {
        let newTabId = activeTabId;

        switch (event.key) {
            case "ArrowDown":
                event.preventDefault();
                // Find next tab in the array
                const currentIndex = locationArray.findIndex(item => item.id === activeTabId);
                if (currentIndex < locationArray.length - 1) {
                    newTabId = locationArray[currentIndex + 1].id;
                }
                break;
            case "ArrowUp":
                event.preventDefault();
                // Find previous tab in the array
                const idx = locationArray.findIndex(item => item.id === activeTabId);
                if (idx > 0) {
                    newTabId = locationArray[idx - 1].id;
                }
                break;
            case "Enter":
            case " ":
                event.preventDefault();
                newTabId = tabId;
                break;
        }

        if (newTabId !== activeTabId) {
            setActiveTabId(newTabId);
            tabsRef.current[newTabId]?.focus();
        }
    };

    // Get icon based on location type
    const getLocationIcon = (locationType: string) => {
        switch (locationType) {
            case 'airport':
                return "/assets/airplaneIcon.svg";
            case 'center':
                return "/assets/centerIcon.svg";
            case 'custom':
                return "/assets/adressIcon.svg";
            default:
                return "/assets/centerIcon.svg";
        }
    };

    return (
        <APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY || "YOUR_API_KEY"}>
            <div className="w-full bg-neutral-100 flex justify-center">
                <section className="w-[1440px] px-[210px] py-[80px] flex flex-col gap-[50px] items-center">
                    <div className="flex flex-col gap-[8px] w-[989px]">
                        <h3 className="font-gilroy text-[46px] leading-[110%] text-primary">
                            {t('rent.locations.title', { city: cityInDative })}
                        </h3>
                        <p className="font-gilroy text-[20px] leading-[120%] text-base-black">
                            {t('rent.locations.subtitle')}
                        </p>
                    </div>
                    <div className="flex w-[989px]">
                        <div
                            role="tablist"
                            aria-label="Location options"
                            className="flex flex-col gap-[16px] items-end"
                        >
                            {locationArray.map((location) => (
                                <button
                                    key={location.id}
                                    role="tab"
                                    id={`tab-${location.id}`}
                                    aria-selected={activeTabId === location.id}
                                    aria-controls={`panel-${location.id}`}
                                    tabIndex={activeTabId === location.id ? 0 : -1}
                                    ref={(el: HTMLButtonElement | null) => {
                                        tabsRef.current[location.id] = el;
                                    }}
                                    onClick={() => handleTabClick(location.id)}
                                    onKeyDown={(e) => handleKeyDown(e, location.id)}
                                    className={`flex gap-[20px] rounded-s-[16px] p-[20px] transition-all duration-200 ${activeTabId === location.id
                                            ? "h-full w-full bg-white text-base-black"
                                            : "bg-secondary-100 text-secondary-800 w-[90%]"
                                        }`}
                                >
                                    <img
                                        className="w-[40px] h-[40px]"
                                        style={{
                                            filter:
                                                activeTabId === location.id
                                                    ? ""
                                                    : "invert(29%) sepia(16%) saturate(1935%) hue-rotate(182deg) brightness(92%) contrast(88%)",
                                        }}
                                        src={getLocationIcon(location.id)}
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
                                        {activeTabId === location.id && (
                                            <p className="text-[16px] leading-[150%]">
                                                {t(`rent.locations.${location.id}.additional_info`, { city: city, defaultValue: "" })}
                                            </p>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                        <div className="p-[20px] bg-white w-1/2 h-[671px] rounded-r-[16px]">
                            <Map
                                zoom={13}
                                center={{ lat: activeLocation.coordinates[0], lng: activeLocation.coordinates[1] }}
                                disableDefaultUI={true}
                                mapId="city-locations-map"
                            >
                                <Marker
                                    position={{ lat: activeLocation.coordinates[0], lng: activeLocation.coordinates[1] }}
                                />
                            </Map>
                        </div>
                    </div>
                </section>
            </div>
        </APIProvider>
    );
}

export default Navigation;