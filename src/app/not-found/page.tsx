'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/components/ThemeProvider';
import { Buttons } from '@/components/buttons';


export default function NotFoundPage() {
    const { theme, mounted } = useTheme();

    if (!mounted) return <div className="h-screen"></div>;

    return (
        <main className="h-[100vh] flex flex-col gap-6 items-center justify-center w-full overflow-hidden">
            <div className='flex flex-col items-center justify-center gap-4 p-6 '>
                <h1 className="font-machine text-[36px] leading-[48px] lg:text-[48px] lg:leading-[54px] text-center">Página não encontrada</h1>
                <div className='w-full max-w-[360px] h-auto md:max-w-[360px] lg:max-w-[556px] lg:h-[400px]'>
                    <Image
                        src="/images/lupa.png"
                        alt="Descrição da imagem"
                        width={600}
                        height={400}
                        priority
                        className={`slow-circle ${theme === 'dark' ? 'invert brightness-100' : ''} w-full h-full object-contain`}
                    />
                </div>
                {/* <Link
                    href="/"
                    className={`font-machine text-underline transition-theme ${theme === 'dark' ? 'text-primary-light ' : 'text-primary-dark '}`}
                >
                    Voltar para a página inicial
                </Link> */}
                <Buttons href="/" label="Página inicial" theme={theme} className='bg-purplelogo' />
            </div>
        </main>);
}