import Logo from "@/components/logo";
import Typography from "@/components/typography";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect, useRef } from "react";

const HeroHome = () => {
    const { theme } = useTheme();

    const [displayedText, setDisplayedText] = useState(""); 
    const fullText = `"Transformando códigos em interfaces de impacto"`;
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        let index = 0;
        intervalRef.current = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayedText(fullText.slice(0, index)); 
                index++;
            } else {
                if (intervalRef.current) clearInterval(intervalRef.current);
            }
        }, 100);

    }, [fullText]);

    return (
        <section className="w-full h-auto min-h-[80vh] md:h-[100vh] pt-[112px] pb-10 overflow-hidden flex items-center justify-center">
            <div className="container h-full flex flex-col lg:flex-row gap-16 lg:gap-[4.375vw] xl:gap-[5.833vw] items-center justify-center">
                <div className="w-full max-w-[260px] lg:min-w-[260px] lg:max-w-[260px] xl:max-w-[360px]">
                    <Logo width={350} height={350} theme={theme} isMobile={false} className="object-contain" />
                </div>
                <Typography
                    variant="h1" titleFontSize="h1-mobile"
                    className="relative h-auto text-balance word-break w-full 2xl:w-[60vw] text-center lg:text-left"
                >
                    <span className="title-home relative small-device-text w-full">
                        {displayedText}
                        <span className="blinking-cursor">|</span> 
                    </span>
                </Typography>
            </div>
        </section>
    );
};

export default HeroHome;