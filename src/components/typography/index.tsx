import React from "react";
import { defaultFontSize, Element, fontSizeMap, TypographyProps } from "./types";

const Typography = ({
    className = "",
    children,
    variant = "p",
    titleFontSize,
}: TypographyProps): JSX.Element => {
    const TagHTML: React.ElementType = variant;

    console.log(TagHTML);

    const elementClasses =  titleFontSize ? fontSizeMap[titleFontSize] : defaultFontSize[variant];
    return (
        <TagHTML className={`${elementClasses} ${className}`}>
            {children}
        </TagHTML>
    );
};

export default Typography;