
import { IconProps } from '../types';

const InstagramIcon = ({ width = 30, height = 30, className, ...props }: IconProps) => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} className={`${className || ''}`} {...props}>
        <path fill="currentColor" fillRule="evenodd" d="M7.5.75A6.75 6.75 0 0 0 .75 7.5v9a6.75 6.75 0 0 0 6.75 6.75h9a6.75 6.75 0 0 0 6.75-6.75v-9A6.75 6.75 0 0 0 16.5.75zM2.25 7.5c0-2.9 2.35-5.25 5.25-5.25h9c2.9 0 5.25 2.35 5.25 5.25v9c0 2.9-2.35 5.25-5.25 5.25h-9a5.25 5.25 0 0 1-5.25-5.25zM19.5 6.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12 7.75a4.25 4.25 0 1 0 0 8.5a4.25 4.25 0 0 0 0-8.5M6.25 12a5.75 5.75 0 1 1 11.5 0a5.75 5.75 0 0 1-11.5 0" clipRule="evenodd">
        </path>
   </svg>
  );
};

export default InstagramIcon;