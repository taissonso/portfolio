'use client';

import Link from "next/link";
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
        <header className={`fixed flex items-center justify-between w-full h-[80px] px-4 lg:px-16 border-b border-solid transition-theme
            ${theme === 'light'
                ? 'bg-light-primary border-light-gray shadow-header-light'
                : 'bg-dark-primary border-dark-gray shadow-header-dark'}`}
        >

            <Link href="/" className={`w-auto h-auto cursor-pointer `}>
                <Logo width={40} height={40} isMobile={true} theme={theme} />
            </Link>
            <DarkMode />
        </header>
    );
}

export default Header;