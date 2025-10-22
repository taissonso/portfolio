import Typography from "@/components/typography";


const HeroProjects = () => {
    return (
        <section className="w-full h-[50vh] flex flex-col justify-center items-center">
            <Typography variant="h1" className="!font-machine">Evoluindo como Desenvolvedor Front-end</Typography>
            <Typography variant="p" titleFontSize="p-large" className="mt-4">Confira a minha jornada e evolução como desenvolvedor,
                cada projeto, cada linha de código, por menor que seja, representa um passo importante na minha trajetória de aprendizado e crescimento.</Typography>
        </section>
    );
}

export default HeroProjects;