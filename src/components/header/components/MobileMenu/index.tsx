import DarkMode from "@/components/darkmode";
import { useState } from "react";

const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex lg:hidden">
            <div className="flex gap-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-10 h-10 grid grid-cols-3 grid-rows-3 gap-[2px] place-items-center bg-green-600" aria-label="Botão Menu Mobile">

                    <div className="w-[6px] h-[6px] rounded-full bg-blue-600" aria-hidden="true"></div>
                    <div className="w-[6px] h-[6px] rounded-full bg-blue-600" aria-hidden="true"></div>
                    <div className="w-[6px] h-[6px] rounded-full bg-blue-600" aria-hidden="true"></div>
                    <div className="w-[6px] h-[6px] rounded-full bg-blue-600" aria-hidden="true"></div>
                    <div className="w-[6px] h-[6px] rounded-full bg-blue-600" aria-hidden="true"></div>
                    <div className="w-[6px] h-[6px] rounded-full bg-blue-600" aria-hidden="true"></div>
                    <div className="w-[6px] h-[6px] rounded-full bg-blue-600" aria-hidden="true"></div>
                    <div className="w-[6px] h-[6px] rounded-full bg-blue-600" aria-hidden="true"></div>
                    <div className="w-[6px] h-[6px] rounded-full bg-blue-600" aria-hidden="true"></div>
                </button>
                <DarkMode />
            </div>
            <nav className={`flex flex-col absolute top-[80px] left-0 right-0 bottom-0 w-full h-screen z-[100] bg-red-500 opacity-0 ${isOpen ? 'opacity-100' : ''}`} aria-label="Items Menu Mobile">
                <ul className="flex flex-col">
                    <li className="h-full">Home</li>
                    <li className="h-full">Projetos</li>
                    <li className="h-full">Contato</li>
                </ul>
            </nav>
        </div>
    );
}

export default MobileMenu;