import DarkMode from "@/components/DarkMode";
import { useRef, useState } from "react";
import menuItems from "../../menu-items";
import NavLink from "../NavLinks";


interface MobileMenuProps {
    theme: 'light' | 'dark';
}

const MobileMenu = ({ theme }: MobileMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLUListElement>(null);
    const navItemsRef = useRef<Map<string, HTMLLIElement>>(new Map());
    const registerNavItem = (href: string, element: HTMLLIElement | null) => {
        if (element) {
            navItemsRef.current.set(href, element);
        }
    };


    return (
        <div className="flex lg:hidden">
            <div className="flex gap-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative w-10 h-10 grid grid-cols-3 grid-rows-3 gap-[2px] place-items-center cursor-pointer"
                    aria-label="Botão Menu Mobile">

                    <div className={`absolute w-[6px] h-[6px] rounded-full transition-all duration-300 ease-in-out
                        ${theme === 'dark' ? 'bg-light-primary' : 'bg-dark-primary'} 
                        ${isOpen
                            ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36px] !h-[4px] rotate-45'
                            : 'top-[3px] left-[3px] rotate-0'}`}
                        aria-hidden="true">
                    </div>

                    <div className={`absolute w-[6px] h-[6px] rounded-full transition-all duration-300 ease-in-out
                        ${theme === 'dark' ? 'bg-light-primary' : 'bg-dark-primary'}
                        ${isOpen
                            ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36px] !h-[4px] -rotate-45'
                            : 'top-[3px] left-1/2 -translate-x-1/2 rotate-0'} `}
                        aria-hidden="true">
                    </div>

                    <div
                        className={`absolute w-[6px] h-[6px] rounded-full transition-all duration-300 ease-in-out 
                        ${theme === 'dark' ? 'bg-light-primary' : 'bg-dark-primary'}
                        ${isOpen
                                ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0'
                                : 'top-[3px] right-[3px] opacity-100 scale-100'} `}
                        aria-hidden="true">
                    </div>

                    <div className={`absolute w-[6px] h-[6px] rounded-full transition-all duration-300 ease-in-out delay-[50ms]
                        ${theme === 'dark' ? 'bg-light-primary' : 'bg-dark-primary'}
                        ${isOpen
                            ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0'
                            : 'top-1/2 -translate-y-1/2 left-[3px] opacity-100 scale-100'}`}
                        aria-hidden="true">
                    </div>

                    <div className={`absolute w-[6px] h-[6px] rounded-full transition-all duration-300 ease-in-out delay-[100ms]
                        ${theme === 'dark' ? 'bg-light-primary' : 'bg-dark-primary'}
                        ${isOpen ? 'opacity-0 scale-0' : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 scale-100'}`}
                        aria-hidden="true">
                    </div>

                    <div className={`absolute w-[6px] h-[6px] rounded-full transition-all duration-300 ease-in-out delay-[50ms]
                        ${theme === 'dark' ? 'bg-light-primary' : 'bg-dark-primary'}
                        ${isOpen
                            ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0'
                            : 'right-[3px] top-1/2 -translate-y-1/2 opacity-100 scale-100'}`}
                        aria-hidden="true">
                    </div>

                    <div className={`absolute w-[6px] h-[6px] rounded-full transition-all duration-300 ease-in-out delay-[100ms]
                        ${theme === 'dark' ? 'bg-light-primary' : 'bg-dark-primary'}
                        ${isOpen
                            ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0'
                            : 'left-[3px] bottom-[3px] opacity-100 scale-100'}`}
                        aria-hidden="true">
                    </div>

                    <div className={`absolute w-[6px] h-[6px] rounded-full transition-all duration-300 ease-in-out delay-[150ms]
                        ${theme === 'dark' ? 'bg-light-primary' : 'bg-dark-primary'}
                        ${isOpen
                            ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0'
                            : 'bottom-[3px] left-1/2 -translate-x-1/2 opacity-100 scale-100'}`}
                        aria-hidden="true">
                    </div>

                    <div className={`absolute w-[6px] h-[6px] rounded-full transition-all duration-300 ease-in-out delay-[200ms]
                        ${theme === 'dark' ? 'bg-light-primary' : 'bg-dark-primary'}
                        ${isOpen
                            ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0'
                            : 'bottom-[3px] right-[3px] opacity-100 scale-100'}`}
                        aria-hidden="true">
                    </div>
                </button>
                <DarkMode />
            </div>

            <nav
                className={`
                fixed top-[80px] left-0 right-0 bottom-0 w-full h-[calc(100vh-80px)] 
                ${theme === 'dark' ? 'bg-dark-primary' : 'bg-light-primary'} 
                transition-all duration-300
                ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
                `}
                aria-label="Items Menu Mobile"
            >
                <ul ref={navRef} className="flex flex-col gap-4">
                    {menuItems.mainMenu.map((item) => (
                        <NavLink
                            href={item.href}
                            label={item.label}
                            key={item.href}
                            innerRef={(el) => registerNavItem(item.href, el)}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default MobileMenu;