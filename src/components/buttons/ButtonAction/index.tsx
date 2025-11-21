import { getButtonVariants } from '../../../../utils/buttonVariants';
import { ButtonActionProps } from '../types';


const ButtonAction = ({ onClick, className = '', label, theme, icon, state, variant = 'default' }: ButtonActionProps) => {
    const IconComponent = icon;

    return (
        <button
            onClick={onClick}
            className={`relative group flex gap-3 font-lato text-[16px]/[24px] py-3 px-6 rounded-[12px] font-semibold z-1 cursor-pointer ${getButtonVariants(variant, theme)} ${className}`}
        >
            <div className={`absolute h-[0px] w-[calc(100%-6px)] rounded-[10px] overflow-hidden group-hover:h-[calc(100%-6px)] transition-all duration-300 ease-in-out
                ${state ? "bottom-[3px] left-[3px]" : "top-[3px] left-[3px]"}
                ${theme === 'dark' ? 'bg-card-project-dark' : 'bg-light-primary'}`}>
            </div>

            {IconComponent && (
                <div className="w-6 h-6 relative transition-all duration-700">
                    <IconComponent width={24} height={24} className={state ? 'rotate-180' : ''} />
                </div>
            )}
            <span className="relative inline-block">
                {label}
                <span className="absolute h-[1px] left-0 bottom-0 w-full lg:w-0 group-hover:w-full bg-current transition-all duration-300 transform"></span>
            </span>

        </button>
    );
};

export default ButtonAction;