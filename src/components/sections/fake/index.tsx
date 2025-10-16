'use client'

import Typography from "@/components/typography";
import { useEffect, useState, useRef } from 'react';

const FakeSection = () => {

  return (
    <section 
        className="w-full h-screen bg-footer-text sticky top-0 z-30 ">
        <div className="container h-full flex items-center justify-center">
            <Typography variant="h2" className="!font-machine text-white">Seção Fake</Typography>
        </div>
    </section>
  );
};

export default FakeSection;