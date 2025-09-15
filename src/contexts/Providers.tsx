'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { NavHoverProvider } from '@/contexts/NavHoverContext';
import LoadingScreen from '@/components/loadingscreen';
import Header from '@/components/header';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <LoadingScreen />
            <NavHoverProvider>
                <Header />
                {children}
            </NavHoverProvider>
        </ThemeProvider>
    );
}

export default Providers;