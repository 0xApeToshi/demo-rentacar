const flowRentData = [
    {
        src: "/src/assets/firstStep.svg",
        title: "1. Odaberite svoj automobil",
        text: "Browse our selection of vehicles online. Find the car that suits your long-term rental needs, whether it’s a compact, SUV, or luxury model.",
        arrow: "/src/assets/arrowVector.svg",
    },
    {
        src: "/src/assets/secondStep.svg",
        title: "2. Pošaljite obrazac za kontakt",
        text: "Fill out our quick online contact form with your details and rental preferences. We’ll review your request and reach out to you shortly.",
        arrow: "/src/assets/arrowVector.svg",
    },
    {
        src: "/src/assets/thirdStep.svg",
        title: "3. Nazovite nas da dovršite detalje",
        text: "Our team will call you to discuss the rental duration, insurance options, and any add-ons like GPS or roadside assistance.",
        arrow: "/src/assets/arrowVector.svg",
        offer: "In a day or two!",
    },
    {
        src: "/src/assets/finalStep.svg",
        title: "4. Potvrdite i odvezite se",
        text: "Once everything is arranged, pick up your car at a convenient time. Drive with confidence, and if you need an extension or have any questions, just give us a call.",
    },
];

function RentFlow() {
    return (
        <div className="w-full bg-base flex justify-center">
            <section className="w-[1440px] flex flex-col gap-[80px] p-[120px]">
                <h3 className="text-primary font-gilroy text-[46px] leading-[110%]">
                    Kako funkcionira dugoročni najam vozila
                </h3>
                <div className="flex gap-[44px] text-left">
                    {flowRentData.map((item, index) => (
                        <div key={index} className="flex flex-col gap-[36px]">
                            <div className="flex gap-[10px]">
                                <img
                                    className="w-[64px] h-[64px]"
                                    src={item.src}
                                ></img>
                                {item.arrow ? <img src={item.arrow}></img> : ""}
                            </div>
                            <div className="flex flex-col gap-[16px]">
                                <div className="flex flex-col gap-[4px]">
                                    <p className="font-gilroy text-[20px] leading-[120%]">
                                        {item.title}
                                    </p>
                                    {item.offer ? (
                                        <p className=" text-[16px] leading-[120%] font-semibold text-primary">
                                            {item.offer}
                                        </p>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <p className=" text-[14px] leading-[120%]">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default RentFlow;
