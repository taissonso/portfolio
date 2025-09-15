'use client';

import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import DarkMode from "../DarkMode";
import { Logo } from "../Logo";
import { menuItems } from "./menu-items";
import { useContext, useEffect, useRef, useState } from "react";
import { HoverContext } from "@/contexts/NavHoverContext";
import NavLink from "./components/NavLinks";
import MobileMenu from "./components/MobileMenu";

const Header = () => {
    const { theme, mounted } = useTheme();
    const { hovered } = useContext(HoverContext);
    const [hoverBarStyle, setHoverBarStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const navItemsRef = useRef<Map<string, HTMLLIElement>>(new Map());
    const navRef = useRef<HTMLUListElement>(null);
    const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false);

    useEffect(() => {
        if (hovered && navItemsRef.current.has(hovered)) {
            const navItem = navItemsRef.current.get(hovered);
            if (navItem && navRef.current) {
                const navRect = navRef.current.getBoundingClientRect();
                const itemRect = navItem.getBoundingClientRect();

                setHoverBarStyle({
                    left: itemRect.left - navRect.left,
                    width: itemRect.width,
                    opacity: 1
                });
            }
        } else {
            setHoverBarStyle(prev => ({ ...prev, opacity: 0 }));
        }
    }, [hovered]);

    const registerNavItem = (href: string, element: HTMLLIElement | null) => {
        if (element) {
            navItemsRef.current.set(href, element);
        }
    };

    const closeMenuMobile = () => {
        setIsOpenMenuMobile(false);
    }

    if (!mounted) {
        return (
            <></>
        );
    }


    return (
        <header className={`fixed flex items-center justify-between w-full h-[80px] border-b border-solid transition-theme z-10
            ${theme === 'light'
                ? 'bg-light-primary border-light-gray shadow-header-light'
                : 'bg-dark-primary border-dark-gray shadow-header-dark'}`}
        >
            <div className="container flex items-center justify-between w-full h-full mx-auto">
                <Link href="/" className={`w-[40px] h-[40px] cursor-pointer`} aria-label="Página inicial" onClick={closeMenuMobile}>
                    <Logo width={40} height={40} isMobile={true} theme={theme} />
                </Link>

                <nav className="hidden lg:flex items-center justify-between w-full ml-12" aria-label="Menu principal">
                    <div className="relative">
                        <ul ref={navRef} className="flex items-center gap-4">
                            {menuItems.mainMenu.map((item) => (
                                <NavLink
                                    href={item.href}
                                    label={item.label}
                                    key={item.href}
                                    innerRef={(el) => registerNavItem(item.href, el)}
                                />
                            ))}
                        </ul>

                        <div
                            className="absolute bottom-0 h-[2px] bg-blue-primary rounded-full transition-all duration-300 ease-out"
                            style={{
                                left: `${hoverBarStyle.left}px`,
                                width: `${hoverBarStyle.width}px`,
                                opacity: hoverBarStyle.opacity,
                                transform: 'translateY(-4px)'
                            }}
                        />
                    </div>
                    <DarkMode />
                </nav>

                <MobileMenu theme={theme} setIsOpen={setIsOpenMenuMobile} isOpen={isOpenMenuMobile} />
            </div>
        </header>
    );
}

export default Header;