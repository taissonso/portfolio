import footerLinks from "../../footer-items";
import LinkedinIcon from "@/components/Icons/Linkedin";
import GitHubIcon from "@/components/Icons/GitHub";
import InstagramIcon from "@/components/Icons/Instagram";
import XIcon from "@/components/Icons/X";
import { IconProps } from "@/components/Icons/types";

const iconMap: Record<string, React.ComponentType<IconProps>> = {
    LinkedinIcon: LinkedinIcon,
    GitHubIcon: GitHubIcon,
    InstagramIcon: InstagramIcon,
    XIcon: XIcon,
};

const LinksSocial = () => {
    return (
        <ul className="list-none flex flex-row gap-4">
            {footerLinks.socialLinks.map((item) => {
                const IconComponent = iconMap[item.iconName];
                
                return (
                    <li key={item.href} className="relative group">
                        <a 
                            href={item.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            data-social={item.label} 
                            aria-label={`${item.label} (abre em nova aba)`} 
                            className={`text-footer-title hover:text-white relative group overflow-hidden w-[42px] h-[42px] flex items-center justify-center rounded-full bg-white border-none hover:border-solid hover:border-footer-title hover:border-1 group`}
                        >

                            <div className={`filled-bg absolute top-auto bottom-0 left-0 w-full h-0 ${item.iconClass} transition-all duration-300 ease-in-out group-hover:h-full`}></div>
                            {IconComponent && <IconComponent className="w-[24px] h-[24px] z-10 relative" />}
                        </a>
                        <span className={`absolute -bottom-[30px] left-[50%] translate-x-[-50%] text-white rounded-[5px] ${item.iconClass} px-3 py-2 invisible group-hover:visible transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-bottom-[50px]`}>{item.label}</span>
                    </li>
                )
            })}
        </ul>
    );
}

export default LinksSocial;