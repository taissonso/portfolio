'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
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
        }, 8000);

        return () => {
            window.removeEventListener('load', handleLoad);
            clearTimeout(maxTimeout);
        };
    }, []);

    if (!loading) return null;

    return (
        <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center transition-all duration-500"
            style={{ opacity }}
        >
            <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-purplelogo rounded-full animation-timing delay-1"></div>
                <div className="w-3 h-3 bg-offwhite rounded-full animation-timing delay-2"></div>
                <div className="w-3 h-3 bg-orangelogo rounded-full animation-timing delay-3"></div>
            </div>
        </div>
    );
}