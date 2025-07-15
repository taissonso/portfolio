
'use client';

import { FC } from 'react';
import { Logo } from '@/components/logo';
import { useTheme } from '@/components/ThemeProvider';
const Home: FC = () => {

    const { theme, mounted } = useTheme();

    if (!mounted) return <div className="h-screen"></div>;

    return (
        <main className="h-[100vh] flex flex-col gap-6 items-center justify-center w-full ">

            <div className='flex flex-col items-center justify-center gap-8 p-6 '>
                <Logo width={300} height={300} theme={theme} isMobile={false} />

                <h1 className="font-manrope text-[36px] leading-[48px] lg:text-[48px] lg:leading-[54px] flex items-end">Em construção
                </h1>
            </div>
        </main>);
};

export default Home;