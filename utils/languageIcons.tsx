import CSharpIcon from "@/components/Icons/CSharpIcon";
import CssIcon from "@/components/Icons/CssIcon";
import HtmlIcon from "@/components/Icons/HTML5Icon";
import JavaScriptIcon from "@/components/Icons/JavascriptIcon";
import SASSIcon from "@/components/Icons/SASSIcon";
import TSQLIcon from "@/components/Icons/TSQLIcon";
import TypescriptIcon from "@/components/Icons/TypescriptIcon";


const languagePriority = [
    'HTML',
    'CSS',
    'SCSS',
    'JavaScript',
    'TypeScript',
    'C#',
    'TSQL'
];

const languageIconMap = {
    JavaScript: JavaScriptIcon,
    CSS: CssIcon,
    HTML: HtmlIcon,
    SCSS: SASSIcon,
    TSQL: TSQLIcon,
    TypeScript: TypescriptIcon,
    'C#': CSharpIcon,
};

export const getLanguageIcons = (languages: Record<string, number>) => {

    const sortedLanguages = Object.keys(languages).sort((a, b) => {
        const priorityA = languagePriority.indexOf(a);
        const priorityB = languagePriority.indexOf(b);

        if (priorityA === -1 && priorityB === -1) return 0;
        if (priorityA === -1) return 1;
        if (priorityB === -1) return -1;

        return priorityA - priorityB;
    });

    return sortedLanguages.map(lang => {
        const IconComponent = languageIconMap[lang as keyof typeof languageIconMap];
        return IconComponent ? (
            <div className="flex flex-col gap-2 items-center justify-center" key={lang}>
                <IconComponent key={lang} className="h-10 w-10 object-contain" />
            </div>
        ) : (
            <span key={lang} className="text-xs px-2 py-2 bg-gray-200 rounded">{lang}</span>
        );
    });
};