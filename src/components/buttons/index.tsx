
import Link from 'next/link';
import { getButtonVariants } from '../../../utils/buttonVariants';
import { ButtonsProps } from './types';
import GitHubIcon from '../Icons/GitHub';
import EyesIcon from '../Icons/EyesIcon';

const ButtonIcon = ({ href, className = '', label, theme, icon, external, variant = 'default' }: ButtonsProps) => {

    const getDefaultIcon = () => {
        if (variant === 'github') return GitHubIcon;
        if (variant === 'project') return EyesIcon;
        return null;
    };

    const IconComponent = icon || getDefaultIcon();
    const isExternal = external ?? href.startsWith('http');

    const content = (
        <span className={`group flex gap-0 font-lato text-[16px]/[24px] py-3 px-6 rounded-[16px] relative font-semibold z-1 ${getButtonVariants(variant, theme)} ${className}`}>
            {IconComponent && (
                <div className="w-5 lg:w-0 h-6 relative left-0 mr-3 lg:mr-0 lg:-left-6 lg:group-hover:w-6 lg:group-hover:mr-3 group-hover:left-0 transition-all duration-700 ease-in-out">
                    {IconComponent && <IconComponent width={24} height={24} className='opacity-100 lg:opacity-0 group-hover:opacity-100' />}
                </div>
            )}
            <span className="relative inline-block">
                {label}
                <span className="absolute h-[1px] left-0 bottom-0 w-full lg:w-0 group-hover:w-full bg-current transition-all duration-300 transform "></span>
            </span>
        </span>
    );

    if (isExternal) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (abre em nova aba)`}
                className="inline-flex"
            >
                {content}
            </a>
        );
    }

    return (
        <Link
            href={href}
            prefetch={false}
            aria-label={label}
            className="inline-flex"
        >
            {content}
        </Link>
    );
};

export default ButtonIcon;
