import { createContext, useState } from 'react';

interface HoverContextType {
    hovered: string | null;
    setHovered: (href: string | null) => void;
}

export const HoverContext = createContext<HoverContextType>({
    hovered: null,
    setHovered: () => { },
});

export const NavHoverProvider = ({ children }: { children: React.ReactNode }) => {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <HoverContext.Provider value={{ hovered, setHovered }}>
            {children}
        </HoverContext.Provider>
    );
};
