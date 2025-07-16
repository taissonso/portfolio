
import Link from 'next/link';
import { ButtonsProps } from './types';

export const Buttons = ({ href, className, label, theme }: ButtonsProps) => {
    return (
        <Link
            href={href}
            className={`group ${theme === 'dark' ? 'text-primary-dark bg-gray-light' : 'text-primary-dark bg-gray-dark'} font-lato text-[16px] leading-[24px] p-2 px-4 rounded-[3px] relative inline-block ${className}`}
        >
            <span className="relative inline-block">
                {label}
                <span className="absolute h-[1px] left-1/2 bottom-0 w-0 group-hover:w-full bg-current transition-all duration-300 transform -translate-x-1/2"></span>
            </span>
        </Link>
    );
}

