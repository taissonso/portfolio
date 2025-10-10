
'use client';

import { FC } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Logo from '@/components/logo';
import Typography from '@/components/typography';
const Privacidade: FC = () => {

    const { theme } = useTheme();

    return (
        <section className="h-[100vh] flex flex-col gap-6 items-center justify-center w-full ">
            <div className='flex flex-col items-center justify-center gap-8 p-6 '>
                <Logo width={300} height={300} theme={theme} isMobile={false} />
                <Typography variant="h1" titleFontSize='h1-mobile'>Em breve</Typography>
            </div>
        </section>
    );
};

export default Privacidade;