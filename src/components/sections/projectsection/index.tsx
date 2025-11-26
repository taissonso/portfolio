import ButtonIcon from "@/components/buttons";
import BugIcon from "@/components/Icons/Bug";
import CSharpIcon from "@/components/Icons/CSharpIcon";
import CssIcon from "@/components/Icons/CssIcon";
import EyesIcon from "@/components/Icons/EyesIcon";
import GitHubIcon from "@/components/Icons/GitHub";
import HtmlIcon from "@/components/Icons/HTML5Icon";
import JavaScriptIcon from "@/components/Icons/JavascriptIcon";
import SASSIcon from "@/components/Icons/SASSIcon";
import TypescriptIcon from "@/components/Icons/TypescriptIcon";
import Typography from "@/components/typography";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useRef, useState } from "react";

type IconItem = { id: string; Icon: (props: { className?: string }) => JSX.Element };

const ICONS: IconItem[] = [
    { id: "html", Icon: HtmlIcon },
    { id: "css", Icon: CssIcon },
    { id: "js", Icon: JavaScriptIcon },
    { id: "sass", Icon: SASSIcon },
    { id: "ts", Icon: TypescriptIcon },
    { id: "csharp", Icon: CSharpIcon },
];

const ProjectSection = () => {
    const { theme } = useTheme();
    const [iconOrder, setIconOrder] = useState(ICONS);
    const [activeIndices, setActiveIndices] = useState<number[]>([]);
    const [phase, setPhase] = useState<"idle" | "fall" | "rise">("idle");
    const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const phaseRef = useRef<"idle" | "fall" | "rise">("idle");
    const iconOrderRef = useRef(iconOrder);
    const indexQueueRef = useRef<number[]>([]);

    useEffect(() => {
        iconOrderRef.current = iconOrder;
        indexQueueRef.current = [];
    }, [iconOrder]);

    useEffect(() => {
        if (iconOrderRef.current.length < 2) {
            return;
        }

        const shuffleArray = (array: number[]) => {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        };

        const refillQueue = (excludeIndex?: number) => {
            const total = iconOrderRef.current.length;
            const indices = Array.from({ length: total }, (_, idx) => idx).filter((idx) => idx !== excludeIndex);
            indexQueueRef.current = shuffleArray(indices);
        };

        const swapIcons = () => {
            if (phaseRef.current !== "idle") {
                return;
            }

            if (indexQueueRef.current.length === 0) {
                refillQueue();
            }

            const firstIndex = indexQueueRef.current.shift() ?? 0;

            if (indexQueueRef.current.length === 0) {
                refillQueue(firstIndex);
            }

            let secondIndex = indexQueueRef.current.shift();

            if (secondIndex === undefined) {
                const total = iconOrderRef.current.length;
                secondIndex = (firstIndex + 1) % total;
            }

            setActiveIndices([firstIndex, secondIndex]);
            setPhase("fall");
            phaseRef.current = "fall";

            const fallTimeout = setTimeout(() => {
                setIconOrder((prev) => {
                    const updated = [...prev];
                    [updated[firstIndex], updated[secondIndex]] = [updated[secondIndex], updated[firstIndex]];
                    return updated;
                });
                setPhase("rise");
                phaseRef.current = "rise";
            }, 550);

            const resetTimeout = setTimeout(() => {
                setActiveIndices([]);
                setPhase("idle");
                phaseRef.current = "idle";
            }, 1250);

            timeoutsRef.current.push(fallTimeout, resetTimeout);
        };

        const kickoffTimeout = setTimeout(swapIcons, 3000);
        timeoutsRef.current.push(kickoffTimeout);

        intervalRef.current = setInterval(swapIcons, 3000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            timeoutsRef.current.forEach(clearTimeout);
            timeoutsRef.current = [];
        };
    }, []);

    return (
        <section className="py-24 lg:py-28 relative overflow-hidden">
            <a href="https://github.com/taissonso" target="_blank" rel="noopener noreferrer" aria-label="GitHub (abre em nova aba)" className="w-36 h-36 bg-github -top-[80px] -right-[90px] lg:-left-[90px] absolute rotate-[134deg] group">
                <GitHubIcon className="w-9 h-9 absolute text-white top-[60px] -right-[2px] lg:-top-[3px] lg:left-[34%] -rotate-90 lg:rotate-180" />
                <span className="absolute h-max -rotate-[134deg] top-[0px] left-[55px] translate-x-[-50%] text-white rounded-[5px] github px-3 py-2 invisible group-hover:visible transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-top-[70px]">GitHub</span>
            </a>
            <div className="container w-full flex flex-col-reverse gap-16 lg:flex-row items-center justify-between">
                <div className="w-full h-max lg:w-[40%] xl:w-[50%] flex flex-wrap items-start justify-center gap-6 ">
                    {iconOrder.map(({ id, Icon }, index) => {
                        const isActive = activeIndices.includes(index);
                        const animationClass = !isActive
                            ? "opacity-100"
                            : phase === "fall"
                                ? "animate-fall-out"
                                : "animate-rise-in";

                        return (
                            <Icon
                                key={id}
                                className={`w-16 h-16 lg:w-20 lg:h-20 shadow-bottom transition-transform duration-300 ${animationClass}`}
                            />
                        );
                    })}
                </div>
                <div className="w-full lg:w-[60%] xl:w-[50%] h-auto flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <Typography variant="h2" className="!font-machine text-balance word-break small-device-text">./Projetos</Typography>
                        <Typography variant="p" titleFontSize="p-large">
                            Em uma conversa um dia com amigos da área de desenvolvimento entramos no assunto sobre o que mostrar ou não no portifólio ou no GitHub.
                            Alguns defendiam que apenas os projetos mais complexos e visualmente atraentes deveriam aparecer. Outros acreditavam que todo projeto
                            independentemente de beleza ou complexidade, merece ser mostrado.
                        </Typography>

                        <Typography variant="p" titleFontSize="p-large">
                            Eu, pessoalmente, penso que cada projeto faz parte da trajetória como desenvolvedores. Eles registram nossa evolução, nossas dificuldades,
                            nossos pontos fortes e fracos e acima de tudo, contam nossa história da qual devemos se orgulhar.  E isso, para mim, já é motivo suficiente para mantelos e compartilha-los aqui.
                        </Typography>
                    </div>


                    <ButtonIcon href="/projetos" label="Meus projetos" theme={theme} variant="project" icon={EyesIcon} />
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;