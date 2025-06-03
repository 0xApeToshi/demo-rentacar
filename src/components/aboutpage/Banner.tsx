import Button from "../common/Button";

function Banner() {
    return (
        <div className="w-full bg-base flex justify-center">
            <section className="w-[1440px] px-[120px] py-[80px]">
                <div className="bg-primary rounded-[32px] w-[1279px] px-[120px] py-[88px] flex flex-col gap-[32px] justify-center items-center">
                    <div className="flex max-w-[779px] flex-col gap-[16px] text-left">
                        <h3 className="font-gilroy text-base text-[64px] leading-[110%]">
                            Jeste li spremni za svoje putovanje s Optima Rent?
                        </h3>
                        <p className="font-gilroy text-base text-[20px] leading-[120%]">
                            Uzbuđeni smo što smo dio vašeg putovanja.
                        </p>
                        <p className="text-base font-semibold text-[16px] leading-[120%]">
                            {" "}
                            Bez obzira trebate li automobil na jedan dan ili
                            dugoročni najam, pokrili smo vas fleksibilnim
                            opcijama i pristupom koji je na prvom mjestu
                            klijentu.
                        </p>
                    </div>
                    <div className="flex w-[779px] gap-[16px] justify-start">
                        <Button
                            variant="primary"
                            className="border border-base"
                        >
                            Kontaktirajte nas
                        </Button>
                        <Button variant="secondary">Kontaktirajte nas</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Banner;
