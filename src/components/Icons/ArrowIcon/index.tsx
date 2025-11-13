import { IconProps } from '../types';

const ArrowIcon = ({ width = 30, height = 30, className, ...props }: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} className={`${className || ''}`} {...props} >
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9l6 6l6-6"></path>
        </svg>
    );
};

export default ArrowIcon;