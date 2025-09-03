export interface NavLinkProps {
    href: string;
    label: string;
    className?: string;
    onClick?: () => void;
    innerRef?: React.RefCallback<HTMLLIElement>;
}
