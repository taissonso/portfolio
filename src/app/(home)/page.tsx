'use client';

import { FC } from 'react';
import HeroHome from '@/components/heros/home';
import AboutMe from '@/components/sections/aboutMe';
import FakeSection from '@/components/sections/fake';

const Home: FC = () => {

    return (
        <>
            <HeroHome />
            <AboutMe />
        </>
    );
};

export default Home;