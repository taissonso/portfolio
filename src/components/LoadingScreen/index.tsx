'use client';

import { useEffect, useState } from 'react';

const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleLoad = () => {
            setOpacity(0);
            setTimeout(() => setLoading(false), 500);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        const maxTimeout = setTimeout(() => {
            setOpacity(0);
            setTimeout(() => setLoading(false), 500);
        }, 5000);

        return () => {
            window.removeEventListener('load', handleLoad);
            clearTimeout(maxTimeout);
        };
    }, []);

    if (!loading) return null;


    return (
        <div
            className="fixed inset-0 bg-dark-primary/80 z-50 flex items-center justify-center transition-theme"
            style={{ opacity }}
        >
            <div className="overflow-hidden pacman-container flex items-center w-full max-w-[312px] h-14 relative">
                <div className={`pacman w-14 h-14 relative rounded-full z-10 `}></div>

                <div className="w-max h-14 dots flex items-center space-x-5 ml-2">
                    <div className="w-2 h-2 bg-light-primary rounded-full dotpacman"></div>
                    <div className="w-2 h-2 bg-light-primary rounded-full dotpacman"></div>
                    <div className="w-2 h-2 bg-light-primary rounded-full dotpacman"></div>
                    <div className="w-2 h-2 bg-light-primary rounded-full dotpacman"></div>
                    <div className="w-2 h-2 bg-light-primary rounded-full dotpacman"></div>
                </div>
            </div>
        </div>
    );
}

export default LoadingScreen;