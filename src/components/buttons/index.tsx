
import Link from 'next/link';
import { ButtonsProps } from './types';

export const Buttons = ({ href, icon, className, label, theme, ...props }: ButtonsProps) => {
    return (
        <Link
            href="/"
            className={`font-machine p-2 px-4 rounded-[3px] relative inline-block group transition-theme ${className}`}

        >
            <div className={`relative inline-block tracking-[1px] text-[16px] leading-[24px] ${theme === 'dark' ? 'text-primary-light ' : 'text-primary-dark '}`} >
                {label}
                <span className="absolute h-[1px] w-0 bg-current left-1/2 bottom-[4px] group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></span>
            </div>
        </Link >
    );
}

