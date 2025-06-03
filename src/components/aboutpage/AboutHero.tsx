function AboutHero() {
    return (
        <div className="w-full bg-base flex justify-center">
            <section className="w-[1440px] h-[498px] px-[120px] py-[80px] relative overflow-hidden flex items-center justify-start">
                <div className="flex flex-col gap-[16px] text-left max-w-[624px]">
                    <h2 className="w-[624px] font-gilroy text-[64px] leading-[110%] text-base-black">
                        Više od najma automobila – We Care More
                    </h2>
                    <p className="font-gilroy leading-[120%] font-[20px] text-base-black">
                        S nama ste uvijek na prvom mjestu. Otkrijte zašto smo
                        <br />
                        <span className="w-fill px-[12px] pb-[2px] rounded-[999px] bg-primary text-base">
                            najbrže rastuća
                        </span>
                        rent-a-car tvrtka u regiji.
                    </p>
                </div>
                <img
                    className="absolute w-[709px] h-[504px] object-cover -bottom-[62px] right-0 rounded-tl-[80px]"
                    src="/src/assets/aboutHero.png"
                ></img>
            </section>
        </div>
    );
}

export default AboutHero;
