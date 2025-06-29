'use client';

import { useEffect, useState } from 'react';
import DarkMode from '../darkmode';

const Header = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [mounted, setMounted] = useState(false);

    // Apenas execute no lado do cliente
    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('themePort') as 'light' | 'dark' | null;

        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDark ? 'dark' : 'light');
            localStorage.setItem('themePort', prefersDark ? 'dark' : 'light');
        }
    }, []);

    useEffect(() => {
        if (mounted) {
            document.body.className = '';
            document.body.classList.add(theme);
            localStorage.setItem('themePort', theme);
        }
    }, [theme, mounted]);

    const toggleDarkMode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    // Não renderize nada até o componente estar montado
    if (!mounted) return null;

    return (
        <header className={`fixed flex items-center justify-end w-full h-[80px] px-4 lg:px-16 border-b border-solid
            ${theme === 'light' ? 'bg-primary-light border-gray-light shadow-header-light' : 'bg-primary-dark border-gray-dark shadow-header-dark'}`}
        >
            <DarkMode theme={theme} toggleDarkMode={toggleDarkMode} />
        </header>
    );
}

export default Header;