import Typography from "@/components/typography";


const HeroHome = () => {

    return (
        <section className="h-auto min-h-[70vh] md:h-[70vh] w-full pt-[112px] pb-10 overflow-hidden flex items-center justify-center">
            <div className="container h-full flex flex-col gap-8 lg:gap-16 items-start justify-center">
                <Typography tag="h1" className="relative h-auto text-balance word-break pl-5 xl:max-w-[60vw]
                        text-[40px]/[42px] md:text-[3.5rem]/[4rem] lg:text-[4rem]/[4.5rem] xl:text-[4.5rem]/[5rem]">
                    <span className="title-hero small-device-text gradient-raised ">
                        Transformando código em interfaces de impacto
                        <span className="absolute h-[50%] w-full bg-blue-500 bottom-0"></span>
                    </span>
                </Typography>
            </div>
        </section>
    )
}

export default HeroHome;