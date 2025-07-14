
'use client';

import { FC } from 'react';
import { Logo } from '@/components/logo';

const Home: FC = () => {

    return (
        <main className="h-[100vh] flex flex-col gap-6 items-center justify-center w-full ">

            <div className='flex flex-col items-center justify-center gap-8 p-6 '>
                <Logo width={300} height={300} className='teste' />

                <h1 className="font-machine text-[36px] leading-[48px] lg:text-[72px] lg:leading-[54px] flex items-end">Em construção
                    <div className="box-to-circles flex gap-2 ">
                        <span className='w-3 h-3 rounded-[100%] bg-purplelogo up-and-down delay-1'></span>
                        <span className='w-3 h-3 rounded-[100%] bg-orangelogo up-and-down delay-2'></span>
                        <span className='w-3 h-3 rounded-[100%] bg-gray-dark up-and-down delay-3'></span>
                    </div>
                </h1>
            </div>
        </main>);
};

export default Home;