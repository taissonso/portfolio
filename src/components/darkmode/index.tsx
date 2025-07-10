import MoonIcon from "../Icons/Moon";
import SunIcon from "../Icons/Sun";
import { useTheme } from "../ThemeProvider";

const DarkMode = () => {
    const { theme, toggleTheme, mounted } = useTheme();

    if (!mounted) return null;

    return (
        <div className={`relative flex items-center justify-between h-[32px] w-16 cursor-pointer py-1 px-[6px] rounded-[64px]
      ${theme === 'light' ? 'bg-gray-light' : 'bg-gray-dark'}`}
            onClick={toggleTheme}>

            <div className={`absolute w-6 h-6 rounded-[100%] transition-transform duration-300 ease-in-out z-30
          ${theme === 'light' ? 'translate-x-[30px] bg-offwhite' : 'translate-x-[-2px] bg-dark'}`}>
            </div>
            <MoonIcon width={20} height={20}
                className={`relative transition-all ease-out duration-300 ${theme === 'dark' ? 'text-offwhite' : 'text-gray-500'}`}
            />
            <SunIcon width={20} height={20} className="relative text-offwhite object-contain transition-all ease-out duration-300" />

        </div>
    );
};

export default DarkMode;
