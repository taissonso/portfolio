import { ButtonVariant } from "../../../utils/buttonVariants";

export interface ButtonsProps {
    href: string;
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    icon?: React.ComponentType<any>;
    label?: string;
    theme: "light" | "dark";
    variant?: ButtonVariant;
    showDefaultIcon?: boolean;
    external?: boolean;
}

export interface ButtonActionProps {
    onClick: () => void;
    className?: string;
    label: string;
    theme: "light" | "dark";
    icon?: React.ComponentType<any>;
    variant?: ButtonVariant;
    state?: boolean;
}
