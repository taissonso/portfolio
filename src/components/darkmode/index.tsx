import MoonIcon from "../Icons/Moon";
import SunIcon from "../Icons/Sun";
import { DarkModeProps } from "./types";

const DarkMode: React.FC<DarkModeProps> = ({ theme, toggleDarkMode }) => {

    return (
        <div className={`relative flex items-center justify-between h-[32px] w-16 cursor-pointer py-1 px-[6px] rounded-[64px]
            ${theme === 'light' ? 'bg-gray-light' : 'bg-gray-dark'}`}
            onClick={toggleDarkMode}>

            <div className={`absolute w-6 h-6 rounded-[100%] transition-transform duration-300 ease-in-out z-30
                ${theme === 'light' ? 'translate-x-[30px] bg-offwhite' : 'translate-x-[-2px] bg-dark'}`}>
            </div>
            <MoonIcon width={20} height={20}
                className={`relative transition-all ease-out duration-300 ${theme === 'dark' ? 'text-offwhite' : 'text-gray-500'}`}
            />
            <SunIcon width={20} height={20} className="relative text-offwhite object-contain hover:text-gradient-sun transition-all ease-out duration-300" />

        </div>
    );
};

export default DarkMode;
