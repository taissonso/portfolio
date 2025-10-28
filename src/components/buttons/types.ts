import { SVGProps } from "react";
import { ButtonVariant } from "../../../utils/buttonVariants";

export interface ButtonsProps {
    href: string;
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    icon?: React.FC<SVGProps<SVGSVGElement>>;
    label?: string;
    theme: "light" | "dark";
    variant?: ButtonVariant;
}
