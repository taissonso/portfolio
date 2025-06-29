
'use client';
import Image from 'next/image';
import logo from '../../../public/images/logo.png';
import { FC } from 'react';

const Home: FC = () => {

    return (
        <main className="h-[100vh] flex flex-col gap-6 items-center justify-center w-full ">
            <Image className='px-6'
                src={logo}
                alt="Descrição da imagem"
                width={400}
                height={400}
                priority />


            <h1 className="font-manrope text-[36px] leading-[48px] lg:text-[72px] lg:leading-[50px] flex items-end gap-2">Em construção
                <div className="box-to-circles flex gap-2 ">
                    <span className='w-3 h-3 rounded-[100%] bg-purplelogo up-and-down delay-1'></span>
                    <span className='w-3 h-3 rounded-[100%] bg-orangelogo up-and-down delay-2'></span>
                    <span className='w-3 h-3 rounded-[100%] bg-gray-dark up-and-down delay-3'></span>
                </div>
            </h1>

        </main>);
};

export default Home;


// import React, { useEffect, useState } from 'react';

// const HomePage = () => {

//     return (
//         <div>
//             <h1>Página Inicial</h1>
//             <p>Bem-vindo ao meu portfólio!</p>
//         </div>
//     );
// };

// export default HomePage;
