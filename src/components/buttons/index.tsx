
import Link from 'next/link';
import { getButtonVariants } from '../../../utils/buttonVariants';
import { ButtonsProps } from './types';

const ButtonIcon = ({ href, className, label, theme, icon, variant = 'default' }: ButtonsProps) => {

    return (
        <Link
            href={href}
            className={`group font-lato text-[16px]/[24px] py-3 px-6 rounded-[16px] relative inline-block font-semibold z-1 ${getButtonVariants(variant, theme)} ${className}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} (abre em nova aba)`}
        >
            <span className="relative inline-block">
                {label}
                <span className="absolute h-[1px] left-0 bottom-0 w-0 group-hover:w-full bg-current transition-all duration-300 transform "></span>
            </span>
        </Link>
    );
};

export default ButtonIcon;
