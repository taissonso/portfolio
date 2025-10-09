import footerLinks from "../../footer-items";
import LinkedinIcon from "@/components/Icons/Linkedin";
import GitHubIcon from "@/components/Icons/GitHub";
import InstagramIcon from "@/components/Icons/Instagram";
import XIcon from "@/components/Icons/X";

const iconMap: Record<string, React.ComponentType<any>> = {
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
                    <li key={item.href}>
                        <a 
                            href={item.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            data-social={item.label} 
                            aria-label={`${item.label} (abre em nova aba)`} 
                            className={`text-footer-title hover:text-white relative group overflow-hidden w-[42px] h-[42px] flex items-center justify-center rounded-full bg-white border-none hover:border-solid hover:border-footer-title hover:border-1`}
                        >
                            <div className={`filled-bg absolute top-auto bottom-0 left-0 w-full h-0 ${item.iconClass} transition-all duration-300 ease-in-out group-hover:h-full`}></div>
                            {IconComponent && <IconComponent className="w-[24px] h-[24px] z-10 " />}
                        </a>
                    </li>
                )
            })}
        </ul>
    );
}

export default LinksSocial;