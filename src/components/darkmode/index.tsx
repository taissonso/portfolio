import MoonIcon from "../Icons/Moon";
import SunIcon from "../Icons/Sun";
import { useTheme } from "../ThemeProvider";

const DarkMode = () => {
    const { theme, toggleTheme, mounted } = useTheme();

    if (!mounted) return null;

    return (
        <div
            className={`relative flex items-center justify-center h-10 w-10 cursor-pointer rounded-full overflow-hidden
                ${theme === 'light' ? 'bg-gray-light' : 'bg-gray-dark'}`}
            onClick={toggleTheme}
            title={theme === 'light' ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
        >
            {/* Ícone da Lua - visível apenas no tema claro (para mudar para escuro) */}
            <div
                className={`absolute transition-all duration-700 ease-in-out
                    ${theme === 'light'
                        ? 'opacity-100 scale-100 translate-x-0 translate-y-0'
                        : 'opacity-0 scale-50 translate-x-5 -translate-y-5'}`}
            >
                <MoonIcon width={20} height={20} className="text-dark" />
            </div>

            {/* Ícone do Sol - visível apenas no tema escuro (para mudar para claro) */}
            <div
                className={`absolute transition-all duration-700 ease-in-out
                    ${theme === 'dark'
                        ? 'opacity-100 scale-100 translate-x-0 translate-y-0'
                        : 'opacity-0 scale-50 translate-x-5 -translate-y-5'}`}
            >
                <SunIcon width={20} height={20} className="text-offwhite" />
            </div>
        </div>
    );
};

export default DarkMode;
