import './styles/globals.css';
import Image from 'next/image';
import logo from '../app/public/images/logo-one.png';
import { FC } from 'react';
import RootLayout from './layout';



const Home: FC = () => {

  return (
    <RootLayout >
      <main className="flex flex-col gap-6 items-center justify-center w-full h-lvh px-6">
        <Image className='rounded-[120px]'
          src={logo}
          alt="Descrição da imagem"
          width={600}
          height={500}
          priority />


        <h1 className=" text-[36px] leading-[48px] lg:text-[72px] lg:leading-[50px] flex items-end gap-2">Em construção
          <div className="box-to-circles flex gap-2 ">
            <span className='w-3 h-3 rounded-[100%] bg-[#00592D] up-and-down delay-1'></span>
            <span className='w-3 h-3 rounded-[100%] bg-[#CD3742] up-and-down delay-2'></span>
            <span className='w-3 h-3 rounded-[100%] bg-[#E9C727] up-and-down delay-3'></span>
          </div>
        </h1>
      </main>
    </RootLayout>
  );
};

export default Home;
