'use client'

import Image from 'next/image';
import Typography from '@/components/typography';
import { useTheme } from '@/contexts/ThemeContext';


const AboutMe = () => {
    const { theme } = useTheme();
    return (
        <section
            className={`w-full h-auto py-16 ${theme === 'light' ? 'bg-footer-text' : 'bg-blue-gray-dark'}`}>
            <div className="container h-full flex flex-col gap-6 md:gap-16  md:flex-row justify-between relative">
                <div className="w-full md:w-1/2 h-auto flex flex-col justify-center">
                    <Typography variant="h2" className="!font-machine pb-4">Sobre.</Typography>
                    <Typography variant="p" titleFontSize="p-large" className="pb-4 font-light">Pode me chamar de <span className="italic font-normal">Oliveira</span>, sou <span className="italic font-normal">Desenvolvedor Front-end</span> com mais de 5 anos de experiência,
                        <span className="italic font-normal"> fascinado por transformar desafios e ideias em soluções criativas e inovadoras através de</span> <span className="!font-machine bold">&lt;códigos/&gt;</span>.</Typography>
                    <Typography variant="p" titleFontSize="p-large" className="pb-4 font-light">Nem só de desenvolvimento se vive. Nas horas vagas, sou um apaixonado por jogos de sobrevivência, nada mais prazeroso que construir e organizar uma base. 😄</Typography>
                    <Typography variant="p" titleFontSize="p-large" className="pb-4 font-light">Também sou um jogador iniciante de Padel; nunca imaginei que seria tão desafiador.</Typography>

                </div>
                <div className="w-full md:w-1/2 h-auto flex items-center justify-center">
                    <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] overflow-hidden rounded-full group relative">
                        <Image
                            src="/portfolio/images/mydrawing.png"
                            alt="Versão desenhada de mim"
                            width={192}
                            height={192}
                            className={`w-full h-full object-cover absolute inset-0 ${theme === 'light' ? 'bg-blue-gray-dark' : 'bg-footer-text'} transition-theme`}
                        />
                        <Image
                            src="/portfolio/images/missclick.jpg"
                            alt="Versão real"
                            width={192}
                            height={192}
                            className="w-full h-full object-cover absolute inset-0 transition-[clip-path] duration-700 ease-in-out
                        [clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(75%_at_50%_50%)]"
                        />
                    </div>
                </div>


            </div>
        </section>
    )
}

export default AboutMe;