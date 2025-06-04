function PartnerLogos() {
    const logoData = [
        {
            id: "1",
            src: "/assets/croatiaLogo.png",
        },
        {
            id: "2",
            src: "/assets/gasparicLogo.png",
        },
        {
            id: "3",
            src: "/assets/eurohercLogo.png",
        },
        {
            id: "4",
            src: "/assets/stasniLogo.png",
        },
    ];

    return (
        <div className="bg-white w-full flex justify-center">
            <div className="flex flex-col gap-[16px] items-start w-[1440px] px-[120px] py-[40px]">
                <h3 className="text-primary font-extrabold text-[46px] leading-[110%]">
                    Naši partneri
                </h3>
                <div className="w-full flex justify-between">
                    {logoData.map((logo) => (
                        <img
                            key={logo.id}
                            className="h-[115px] w-[245px] object-contain"
                            src={logo.src}
                            id={logo.id}
                            alt=""
                        ></img>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PartnerLogos;
