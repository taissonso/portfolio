'use client';

import { useEffect, useState } from 'react';

const SkeletonHeroHome = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light'); // Estado para armazenar o tema atual

    useEffect(() => {
        // Verifica a classe do tema no elemento <html>
        const htmlElement = document.documentElement;
        if (htmlElement.classList.contains('dark')) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    return (
        <div
            className={`w-full h-screen flex items-center justify-center ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
            }`}
        >
            <div className="animate-pulse">
                <div className="skeleton-logo mb-4"></div>
                <div className="skeleton-title mb-2"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
            </div>
        </div>
    );
};

export default SkeletonHeroHome;