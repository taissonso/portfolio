'use client';

import { useTheme } from "../ThemeProvider";
import DarkMode from "../darkmode";
import { Logo } from "../logo";

const Header = () => {
    const { theme, mounted } = useTheme();

    if (!mounted) {
        return (
            <></>
        );
    }

    return (
        <header className={`fixed flex items-center justify-between w-full h-[80px] px-4 lg:px-16 border-b border-solid
            ${theme === 'light' ? 'bg-primary-light border-gray-light shadow-header-light' : 'bg-primary-dark border-gray-dark shadow-header-dark'}`}
        >
            <a className="w-auto h-auto cursor-pointer">
                <Logo width={50} height={50} isMobile={true} theme={theme} />
            </a>
            <DarkMode />
        </header>
    );
}

export default Header;