
import { IconProps } from '../types';

const LinkedinIcon = ({ width = 30, height = 30, className, ...props }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} className={`${className || ''}`} {...props}>
        <path fill="currentColor" fillRule="evenodd" d="M3.5 6a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M6 23V8H1v15zM8 8h4.5v1.946C13.216 9.005 14.746 8 17.5 8c4.33 0 5.5 4.32 5.5 7v8h-5v-8c0-1-.5-3-2.5-3c-1.42 0-2.42 1.008-3 1.951V23H8z" clipRule="evenodd">
        </path>
    </svg>
  );
};

export default LinkedinIcon;