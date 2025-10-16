import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { NavLinkProps } from "../../types";
import { HoverContext } from "@/contexts/NavHoverContext";
import { useTheme } from "@/contexts/ThemeContext";

const NavLink = ({
    href,
    label,
    onClick,
    innerRef,
}: NavLinkProps) => {
    const pathname = usePathname();
    const { theme } = useTheme();
    const { hovered, setHovered } = useContext(HoverContext);

    const basePath = pathname.includes("/portfolio") ? "/portfolio" : "";

    const isActive =
        pathname === href ||
        pathname === `${basePath}${href}` ||
        pathname === `${basePath}${href}/` ||
        (href !== "/" && pathname.startsWith(`${basePath}${href}/`));

    const isHovered = hovered === href;
    const isDimmed = hovered && hovered !== href;

    return (
        <li className="h-full" ref={innerRef}>
            <Link
                href={href}
                data-text={label}
                className={`relative flex items-center justify-center h-full px-6 py-3 rounded-[4px] 
                    font-lato text-[18px] leading-[24px] font-medium 
                    transition-all duration-300 
                    group ${isDimmed ? "opacity-30" : "opacity-100"}
                    ${!hovered && isActive
                        ? `${theme === 'light' ? 'text-blue-primary' : 'text-footer-title'}`
                        : "text-dark-gray dark:text-light-primary"
                    }
                `}
                onClick={onClick}
                onMouseEnter={() => setHovered(href)}
                onMouseLeave={() => setHovered(null)}
            >
                <span
                    className={`transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"
                        }`}
                >
                    {label}
                </span>

                <span
                    className={`absolute inset-0 flex items-center justify-center 
                        font-machine text-blue-primary 
                        transition-opacity duration-300 
                        ${isHovered ? "opacity-100 " : "opacity-0 "}
                        ${theme === 'light' ? 'text-blue-primary' : 'text-footer-title'}
                    `
                    }
                >
                    {label}
                </span>

                <span
                    className={`absolute h-[2px] left-1/2 bottom-1 bg-current 
                        transition-all duration-500 transform -translate-x-1/2 
                        ${isActive && !hovered ? "w-full" : "w-0"}`
                    }
                ></span>
            </Link>
        </li>
    );
};

export default NavLink;
