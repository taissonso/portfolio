'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { NavHoverProvider } from '@/contexts/NavHoverContext';
import Header from '@/components/header';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <NavHoverProvider>
                <Header />
                {children}
            </NavHoverProvider>
        </ThemeProvider>
    );
}

export default Providers;