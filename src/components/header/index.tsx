'use client';

import DarkMode from '../darkmode';
import { useEffect, useState } from 'react';
import '../../styles/colors.css';
const Header = () => {

    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const saveTheme = localStorage.getItem('themePort') as 'light' | 'dark' | null;

        if (saveTheme) {
            setTheme(saveTheme);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDark ? 'dark' : 'light');
        }
    }, []);

    useEffect(() => {
        document.body.className = '';
        document.body.classList.add(theme);
        localStorage.setItem('themePort', theme);
    }, [theme]);

    const toggleDarkMode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <header className={`fixed flex items-center justify-end w-full h-[80px] px-4 lg:px-16 border-b border-solid
            ${theme === 'light' ? 'bg-primary-light border-gray-light shadow-header-light' : 'bg-primary-dark border-gray-dark shadow-header-dark'}`}
        >
            <DarkMode theme={theme} toggleDarkMode={toggleDarkMode}></DarkMode>
        </header>
    );
}

export default Header;