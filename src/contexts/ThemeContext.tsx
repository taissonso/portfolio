'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';

type ThemeContextType = {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    mounted: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const savedTheme = localStorage.getItem('themePort');
        if (savedTheme === 'light' || savedTheme === 'dark') {
            setTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const systemTheme = prefersDark ? 'dark' : 'light';

            setTheme(systemTheme);
            localStorage.setItem('themePort', systemTheme);
        }
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e: MediaQueryListEvent) => {
            const savedTheme = localStorage.getItem('themePort');
            const isAutoTheme = !savedTheme || savedTheme === 'auto';

            if (isAutoTheme) {
                const newTheme = e.matches ? 'dark' : 'light';
                setTheme(newTheme);
                localStorage.setItem('themePort', 'auto');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [mounted]);

    useEffect(() => {
        if (mounted) {
            document.body.classList.remove('light', 'dark');
            document.documentElement.classList.remove('light', 'dark');

            document.body.classList.add(theme);
            document.documentElement.classList.add(theme);

            if (localStorage.getItem('themePort') !== 'auto') {
                localStorage.setItem('themePort', theme);
            }
        }
    }, [theme, mounted]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('themePort', newTheme);
    };

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme,
            mounted
        }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
}