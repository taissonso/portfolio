import CssIcon from "@/components/Icons/CssIcon";
import HtmlIcon from "@/components/Icons/HTML5Icon";
import JavaScriptIcon from "@/components/Icons/JavascriptIcon";
import LaptopIcon from "@/components/Icons/Laptop";
import SASSIcon from "@/components/Icons/SASSIcon";
import SunIcon from "@/components/Icons/Sun";
import TSQLIcon from "@/components/Icons/TSQLIcon";




const languageIconMap = {
    JavaScript: JavaScriptIcon,
    CSS: CssIcon,
    HTML: HtmlIcon,
    SCSS: SASSIcon,
    TSQL: TSQLIcon,
};

export const getLanguageIcons = (languages: Record<string, number>) => {
    return Object.keys(languages).map(lang => {
        const IconComponent = languageIconMap[lang as keyof typeof languageIconMap];
        return IconComponent ? (
            <div className="flex flex-col gap-2 items-center justify-center" key={lang}>
                <IconComponent key={lang} className="h-10 w-10 object-contain" />
                <p className="text-xs px-2 py-1 bg-gray-200 rounded text-center">{lang}</p>
            </div>
        ) : (
            <span key={lang} className="text-xs px-2 py-2 bg-gray-200 rounded">{lang}</span>
        );
    });
};