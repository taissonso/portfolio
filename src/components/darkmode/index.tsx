import MoonIcon from "../Icons/Moon";
import SunIcon from "../Icons/Sun";
import { useTheme } from "@/contexts/ThemeContext";

const DarkMode = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`darkmode relative flex items-center justify-center h-10 w-10 cursor-pointer rounded-full overflow-hidden group transition-colors duration-300 `}
            onClick={toggleTheme}
            title={theme === 'light' ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
        >
            <div className={`absolute transition-all duration-700 ease-in-out 
                ${theme === 'light'
                    ? 'opacity-100 scale-100 translate-x-0 translate-y-0'
                    : 'opacity-100 scale-50 translate-x-5 -translate-y-5'}`}
            >
                <MoonIcon width={20} height={20} className="text-dark-primary group-hover:text-offwhite transition-colors duration-300" />
            </div>

            <div className={`absolute transition-all duration-700 ease-in-out 
                ${theme === 'dark'
                    ? 'opacity-100 scale-100 translate-x-0 translate-y-0'
                    : 'opacity-100 scale-50 translate-x-5 -translate-y-5'}`}>
                <SunIcon width={20} height={20} className="text-offwhite group-hover:text-dark-primary transition-colors duration-300" />
            </div>
        </div>
    );
};

export default DarkMode;
