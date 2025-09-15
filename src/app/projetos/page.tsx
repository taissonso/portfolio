
'use client';

import { FC } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Logo from '@/components/Logo';
import Typography from '@/components/typography';
const Home: FC = () => {

    const { theme, mounted } = useTheme();

    if (!mounted) return <div className="h-screen"></div>;

    return (
        <section className="h-[100vh] flex flex-col gap-6 items-center justify-center w-full ">
            <div className='flex flex-col items-center justify-center gap-8 p-6 '>
                <Logo width={300} height={300} theme={theme} isMobile={false} />
                <Typography tag="h1">Em construção</Typography>
            </div>
        </section>);
};

export default Home;