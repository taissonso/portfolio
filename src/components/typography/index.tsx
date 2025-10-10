import React from "react";
import { defaultFontSize, fontSizeMap, TypographyProps } from "./types";

const Typography = ({
    className = "",
    children,
    variant = "p",
    titleFontSize,
}: TypographyProps): JSX.Element => {

    const TagHTML: React.ElementType = variant;
    const elementClasses =  titleFontSize ? fontSizeMap[titleFontSize] : defaultFontSize[variant];
    
    return (
        <TagHTML className={`${elementClasses} ${className}`}>
            {children}
        </TagHTML>
    );
};

export default Typography;