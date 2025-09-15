'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { NavHoverProvider } from '@/contexts/NavHoverContext';
import LoadingScreen from '@/components/LoadingScreen';
import Header from '../components/Header';

export function Providers({ children }: { children: React.ReactNode }) {
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