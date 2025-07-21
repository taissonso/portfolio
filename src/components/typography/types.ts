export type Element = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "label";

export interface TypographyProps {
    tag: Element;
    className?: string;
    children?: React.ReactNode;
}
