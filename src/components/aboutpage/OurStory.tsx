function OurStory() {
    return (
        <div className="w-full flex justify-center bg-neutral-100">
            <section className="w-[1440px] px-[120px] py-[80px] flex gap-[80px] items-end">
                <div className="max-w-[600px] text-left flex flex-col gap-[16px]">
                    <div className="flex flex-col gap-[8px]">
                        <h3 className="font-gilroy text-[46px] leading-[110%] text-primary">
                            Naša priča: Tko smo i kako smo počeli
                        </h3>
                        <p className="text-[20px] leading-[120%] font-gilroy">
                            Izgrađeni na brizi, vođeni izvrsnošću
                        </p>
                    </div>
                    <p className="leading-[150%] text-[16px]">
                        {" "}
                        Optima Rent nastao je iz jednostavne ideje – stvoriti
                        rent-a-car iskustvo koje stavlja korisnika na prvo
                        mjesto. Počeli smo kao mali, strastveni tim s vizijom
                        pružanja usluge gdje smo stavili korisnika na prvo
                        mjesto. Od prvog dana fokusirali smo se na moderna,
                        pouzdana vozila i vrhunsku korisničku podršku. Upravo
                        nas je ta predanost učinila jednom od najbrže rastućih
                        rent-a-car tvrtki u regiji.
                    </p>
                    <div className="flex flex-col gap-[10px]">
                        <p className="text-[20px] leading-[120%] font-gilroy">
                            U Optima Rentu ne iznajmljujete samo automobil
                            –{" "}
                        </p>
                        <p className="leading-[150%] text-[16px]">
                            dobivate sigurnost, fleksibilnost i bezbrižnu
                            vožnju. Bilo da istražujete nove gradove ili trebate
                            dugoročno rješenje, mi smo uz vas na svakom koraku.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-[13px] w-full leading-[120%] text-[16px] font-semibold">
                    <div className="flex">
                        <div className="bg-secondary-200 flex items-center rounded-s-[8px] px-[16px] py-[12px]">
                            <img
                                className="w-[24px] h-[24px]"
                                src="/src/assets/userLogo.svg"
                            />
                        </div>

                        <p className="bg-secondary-100 w-full text-base-black w-[408px] h-[62px] px-[28px] py-[20px] flex items-center">
                            <span className="h-fit bg-primary rounded-[999px] text-base px-[8px] pt-[1px] pb-[2px]">
                                Posvećenost korisnicima
                            </span>
                            od prvog dana
                        </p>
                    </div>
                    <div className="flex">
                        <div className="bg-secondary-200 flex items-center rounded-s-[8px] px-[16px] py-[12px]">
                            <img
                                className="w-[24px] h-[24px]"
                                src="/src/assets/chartLogo.svg"
                            />
                        </div>

                        <p className="bg-secondary-100 w-full text-base-black w-[408px] h-[62px] px-[28px] py-[20px] flex items-center">
                            <span className="h-fit bg-primary rounded-[999px] text-base px-[8px] pt-[1px] pb-[2px]">
                                Brz rast
                            </span>
                            zahvaljujući izvrsnoj usluzi i inovacijama
                        </p>
                    </div>
                    <div className="flex">
                        <div className="bg-secondary-200 flex items-center rounded-s-[8px] px-[16px] py-[12px]">
                            <img
                                className="w-[24px] h-[24px]"
                                src="/src/assets/handHeartLogo.svg"
                            />
                        </div>

                        <p className="bg-secondary-100 w-full text-base-black w-[408px] h-[62px] px-[28px] py-[20px] flex items-center">
                            Naše obećanje:
                            <span className="h-fit bg-primary rounded-[999px] text-base px-[8px] pt-[1px] pb-[2px]">
                                Uvijek brinemo više
                            </span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OurStory;
