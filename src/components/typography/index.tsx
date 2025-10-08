import React from "react";
import { Element, TypographyProps } from "./types";

const elementClasses: Record<Element, Record<string, string>> = {
    h1: {
        default: "text-h1 text-h1-sm text-h1-lg text-h1-xl",
    },
    h2: {
        default: "text-h2 text-h2-sm text-h2-lg text-h2-xl",
    },
    h3: {
        default: "text-h3 text-h3-sm text-h3-lg text-h3-xl",
    },
    h4: {
        default: "text-h4 text-h4-sm text-h4-lg text-h4-xl",
    },
    h5: {
        default: "text-h5 text-h5-sm text-h5-lg text-h5-xl",
    },
    h6: {
        default: "text-h6",
    },
    p: {
        default: "text-p",
        medium: "text-p-medium",
        large: "text-p-large",
    },
    label: {
        default: "text-label",
    },
};

const Typography = ({
    tag,
    className = "",
    children,
    variant = "default",
}: TypographyProps): JSX.Element => {
    const TagHTML = tag;

   const elementStyle = elementClasses[variant as Element]?.default || elementClasses[tag]?.[variant] || elementClasses[tag]?.default || "";
    return (
        <TagHTML className={`${elementStyle} ${className}`}>
            {children}
        </TagHTML>
    );
};

export default Typography;