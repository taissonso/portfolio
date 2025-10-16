'use client';

import { FC } from 'react';
import HeroHome from '@/components/heros/home';
import AboutMe from '@/components/sections/aboutMe';

const Home: FC = () => {

    return (
        <>
            <HeroHome />
            <AboutMe />
        </>
    );
};

export default Home;