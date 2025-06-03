const comparisonData = [
    {
        feature: "Početno financijsko učešće",
        longTerm: "Free from leasing contracting",
        leasing: "Tied to 20% -30%",
        type: "text",
    },
    {
        feature: "Financiranje vozila",
        longTerm: true,
        leasing: true,
        type: "boolean",
    },
    {
        feature: "Obvezno osnovno osiguranje",
        longTerm: true,
        leasing: false,
        type: "boolean",
    },
    {
        feature: "Kasko osiguranje",
        longTerm: true,
        leasing: false,
        type: "boolean",
    },
    {
        feature: "Troškovi registracije i tehničkog pregleda",
        longTerm: true,
        leasing: false,
        type: "boolean",
    },
    {
        feature: "Porez na cestovna motorna vozila",
        longTerm: true,
        leasing: false,
        type: "boolean",
    },
    {
        feature: "Redovno i izvanredno održavanje vozila",
        longTerm: true,
        leasing: false,
        type: "boolean",
    },
    {
        feature: "Asistencija i pomoć na cesti",
        longTerm: true,
        leasing: false,
        type: "boolean",
        isNew: true,
    },
    {
        feature: "Zamjensko vozilo u slučaju kvara ili štete",
        longTerm: true,
        leasing: false,
        type: "boolean",
        isNew: true,
    },
    {
        feature: "Sezonska zamjena i skladištenje guma",
        longTerm: true,
        leasing: false,
        type: "boolean",
        isNew: true,
    },
    {
        feature: "Starost vozila",
        longTerm: "Uvijek do 2 godine starosti",
        leasing: "Vozilo stari tijekom ugovora",
        type: "text",
    },
    {
        feature: "Fleksibilnost ugovora",
        longTerm: "Fleksibilno, iz mjeseca u mjesec",
        leasing: "Fiksni, dugoročni ugovori",
        type: "text",
    },
    {
        feature: "Početni troškovi",
        longTerm: "Nema",
        leasing: "Visoki",
        type: "text",
    },
    {
        feature: "Mogućnost zamjene vozila tijekom najma",
        longTerm: true,
        leasing: false,
        type: "boolean",
    },
    {
        feature: "Svi troškovi uključeni u jednu mjesečnu cijenu",
        longTerm: true,
        leasing: false,
        type: "boolean",
    },
    {
        feature: "Dostupno privatnim i poslovnim korisnicima",
        longTerm: "Da, i za fizičke i za pravne osobe",
        leasing: "Uglavnom za pravne osobe",
        type: "text",
    },
];

function ComparisonTable() {
    return (
        <div className="w-full flex justify-center bg-secondary">
            <section className="w-[1440px] flex flex-col items-center gap-[40px] px-[120px] pt-[80px] pb-[100px]">
                <div className="flex flex-col gap-[16px] w-[754px]">
                    <h3 className="text-white font-gilroy text-[46px] leading-[110%]">
                        Zašto odabrati dugoročni najam vozila umjesto leasinga?
                    </h3>
                    <p className="text-white font-gilroy text-[20px] leading-[120%]">
                        Više fleksibilnosti, manje briga.
                    </p>
                </div>
                <div className="relative bg-white overflow-hidden flex flex-col gap-[12px] rounded-[16px] w-[1202px] px-[100px] pt-[96px] pb-[80px]">
                    <div className="absolute w-[211px] h-full top-[15px] left-[662px] rounded-lg bg-secondary-300/40 z-1"></div>
                    <div className="absolute w-[211px] h-[38px] top-[15px] left-[662px] rounded-t-lg bg-secondary-200 z-0"></div>

                    <div className="flex w-full justify-end z-10">
                        <span className="w-[211px]  font-gilroy text-[28px] leading-[120%] text-primary">
                            Dugoročni <br />
                            Najam
                        </span>
                        <span className="w-[229px] flex justify-center items-end font-gilroy text-[28px] leading-[120%] text-primary">
                            Leasing
                        </span>
                    </div>
                    <div className="w-full">
                        <span className="w-full flex text-left text-secondary-400 font-gilroy text-[14px] leading-[120%] border-b border-b-secondary-200">
                            KARAKTERISTIKE
                        </span>
                        {comparisonData.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center border-b border-b-secondary-200 pl-[12px] justify-between ${index % 2 === 0 ? "" : "bg-base"}`}
                            >
                                <div className=" leading-[120%] text-[18px]">
                                    {item.feature}
                                </div>
                                <div className="flex">
                                    <div
                                        className={`${index % 2 === 0 ? "" : "bg-secondary-200"} w-[211px]  leading-[150%] text-[16px] flex justify-center items-center pt-[16px] pb-[16px]`}
                                    >
                                        {item.type === "boolean" ? (
                                            item.longTerm ? (
                                                <img
                                                    className="z-10"
                                                    src="/src/assets/checkCircle.svg"
                                                ></img>
                                            ) : (
                                                <img
                                                    className="z-10"
                                                    src="/src/assets/closeCircle.svg"
                                                ></img>
                                            )
                                        ) : (
                                            <p className="z-10">
                                                {item.longTerm}
                                            </p>
                                        )}
                                    </div>
                                    <div className="w-[229px]  leading-[150%] text-[16px] flex justify-center items-center pt-[16px] pb-[16px]">
                                        {item.type === "boolean" ? (
                                            item.leasing ? (
                                                <img
                                                    className="z-10"
                                                    src="/src/assets/checkCircle.svg"
                                                ></img>
                                            ) : (
                                                <img
                                                    className="z-10"
                                                    src="/src/assets/closeCircle.svg"
                                                ></img>
                                            )
                                        ) : (
                                            <p>{item.leasing}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
export default ComparisonTable;
