
import Link from 'next/link';
import { ButtonsProps } from './types';

export const Buttons = ({ href, className, label, theme }: ButtonsProps) => {
    return (
        <Link
            href={href}
            className={`group ${theme === 'dark' ? 'text-dark-primary bg-light-primary' : 'text-light-primary bg-[#1E88E5]'} font-lato text-[18px]/[26px] p-3 px-6 rounded-[6px] relative inline-block font-semibold ${className}`}
        >
            <span className="relative inline-block">
                {label}
                <span className="absolute h-[1px] left-1/2 bottom-0 w-0 group-hover:w-full bg-current transition-all duration-300 transform -translate-x-1/2"></span>
            </span>
        </Link>
    );
}

