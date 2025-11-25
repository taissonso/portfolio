'use client';

import { FC } from 'react';
import HeroHome from '@/components/heros/home';
import AboutMe from '@/components/sections/aboutMe';
import ProjectSection from '@/components/sections/projectsection';

const Home: FC = () => {

    return (
        <>
            <HeroHome />
            <AboutMe />
            <ProjectSection />
        </>
    );
};

export default Home;