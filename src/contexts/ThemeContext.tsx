'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';
import SkeletonHeroHome from '@/components/skeleton/SkeletonHeroHome';

type ThemeContextType = {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    
    const getInitialTheme = (): 'light' | 'dark' => {
        if (typeof window === 'undefined') return 'dark';
        const savedTheme = localStorage.getItem('themePort');
        if (savedTheme === 'light' || savedTheme === 'dark') {
            return savedTheme;
        }
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    };

    const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(isLoading) {
            document.body.classList.remove(theme === 'light' ? 'dark' : 'light');
            document.body.classList.add(theme);
            localStorage.setItem('themePort', theme);
            setIsLoading(false);
       }
    }, [theme, isLoading]);

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';

            document.body.classList.remove(newTheme === 'light' ? 'dark' : 'light');
            document.body.classList.add(newTheme);
            localStorage.setItem('themePort', newTheme);

            return newTheme;
        });
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); 
        }, 30000);

        return () => clearTimeout(timer); 
    }, []);

    if (isLoading) {
        return <SkeletonHeroHome />;
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
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