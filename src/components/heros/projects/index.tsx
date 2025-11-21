import Typography from "@/components/typography";


const HeroProjects = () => {
    return (
        <section className="w-full h-auto lg-auto lg:h-[70vh] flex flex-col items-center justify-center pt-36">
            <div className="container flex-col items-center justify-center">
                <Typography variant="h1" titleFontSize="h1-mobile" className="!font-machine text-center small-device-text mx-auto">Evoluindo como <br />Desenvolvedor Front-end</Typography>
                <Typography variant="p" titleFontSize="p-large" className="mt-4 w-full lg:w-[60vw] text-center px-0 lg:px-10 mx-auto">Confira a minha jornada e evolução como desenvolvedor. <br />Cada projeto, cada linha de código representam um passo importante na minha trajetória de aprendizado e crescimento.</Typography>
            </div>
        </section>
    );
}

export default HeroProjects;