import React from "react";
import { Element, TypographyProps } from "./types";

const elementClasses: Record<Element, string> = {
    h1: "text-h1 sm:text-h1-sm lg:text-h1-lg xl:text-h1-xl",
    h2: "text-h2 sm:text-h2-sm lg:text-h2-lg xl:text-h2-xl",
    h3: "text-h3 sm:text-h3-sm lg:text-h3-lg xl:text-h3-xl",
    h4: "text-h4 sm:text-h4-sm lg:text-h4-lg xl:text-h4-xl",
    h5: "text-h5 sm:text-h5-sm lg:text-h5-lg xl:text-h5-xl",
    h6: "text-h6",
    p: "text-p ",
    label: "text-label",
};


const Typography = ({
    tag,
    className,
    children
}: TypographyProps): JSX.Element => {
    const TagHTML = tag;
    const elementStyle = elementClasses[tag];

    return (
        <TagHTML className={`${elementStyle} ${className}`}>
            {children}
        </TagHTML>
    );
}

export default Typography;