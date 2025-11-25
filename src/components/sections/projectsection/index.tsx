import ButtonIcon from "@/components/buttons";
import BugIcon from "@/components/Icons/Bug";
import CSharpIcon from "@/components/Icons/CSharpIcon";
import CssIcon from "@/components/Icons/CssIcon";
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
        <section className="py-16 lg:py-28 relative overflow-hidden">
            <a href="https://github.com/taissonso" target="_blank" rel="noopener noreferrer" aria-label="GitHub (abre em nova aba)" className="w-36 h-36 bg-black -top-[80px] -left-[90px] absolute rotate-[134deg]">
                <GitHubIcon className="w-9 h-9 absolute text-white top-[0%] left-[34%] rotate-180" />
            </a>
            <div className="container w-full flex flex-col gap-6 md:gap-16 md:flex-row items-center justify-between">
                <div className="w-full h-max md:w-1/2 flex items-start justify-between p-6 gap-6 ">
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
                <div className="w-full md:w-1/2 h-auto flex flex-col gap-6">
                    <Typography variant="h2" className="!font-machine">./Projetos</Typography>
                    <Typography variant="p" titleFontSize="p-large" className="font-light">
                        Aqui vamos colocar um texto descritivo sobre
                        os projetos desenvolvidos e como eles acabam me ajudar em minha jogarnada me orgulhando de cada um deles.
                        Acredito que podemos aumentar ainda um pouco o texto futuramente.
                    </Typography>
                    <ButtonIcon href="/projetos" label="Projetos" theme={theme} variant="project" icon={BugIcon} />
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;