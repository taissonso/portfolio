export type Element = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "label";

export interface TypographyProps {
    className?: string;
    children?: React.ReactNode;
    variant: Element;
    titleFontSize?: extraFontSize;
}

export const defaultFontSize: Record<Element, string> = {
    h1: "text-h1 text-h1-sm text-h1-lg text-h1-xl",
    h2: "text-h2 text-h2-sm text-h2-lg text-h2-xl",
    h3: "text-h3 text-h3-sm text-h3-lg text-h3-xl",
    h4: "text-h4 text-h4-sm text-h4-lg text-h4-xl",
    h5: "text-h5 text-h5-sm text-h5-lg text-h5-xl",
    h6: "text-h6",
    p: "text-p",
    label: "text-label",
}

export type extraFontSize = 
    | "p-medium"
    | "p-large" 
    | 'h1-mobile'


export const fontSizeMap: Record<extraFontSize, string> = {
    'p-medium': 'text-p-medium',
    'p-large': 'text-p-large',
    'h1-mobile': 'text-h1-mobile md:text-h1-mobile-md lg:text-h1-mobile-lg xl:text-h1-mobile-xl',
}