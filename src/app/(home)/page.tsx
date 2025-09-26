'use client';

import { FC, useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Typography from '../../components/typography';
import Logo from '@/components/logo';

const Home: FC = () => {
    const { theme, mounted } = useTheme();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient || !mounted) {
        return (
            <section className="h-[100vh] flex flex-col gap-6 items-center justify-center w-full">
                <div className="flex flex-col items-center justify-center gap-8 p-6">
                    <div className="w-[300px] h-[300px]" /> {/* Placeholder para o Logo */}
                    <div className="h-8 w-40" /> {/* Placeholder para o Typography */}
                </div>
            </section>
        );
    }

    return (
        <section className="h-[100vh] flex flex-col gap-6 items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center gap-8 p-6">
                <Logo width={300} height={300} theme={theme} isMobile={false} />
                <Typography tag="h1">Em construção</Typography>
            </div>
        </section>
    );
};

export default Home;