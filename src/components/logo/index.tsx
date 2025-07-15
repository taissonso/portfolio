import { LogoProps } from "./types"

export const Logo = ({ width = 300, height = 300, className, isMobile, theme = 'light' }: LogoProps & { theme?: 'light' | 'dark' }) => {
    const baseWidth = 300;
    const baseHeight = 300;

    const strokeColor = theme === 'light' ? "#212121" : "#ffffff";
    const currentColor = `grad-${theme}`;

    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${baseWidth} ${baseHeight}`}
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-full" ${className}`}
            preserveAspectRatio="xMidYMid meet"
        >
            <defs>
                <linearGradient id={currentColor} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={strokeColor} stopOpacity="1" />
                    <stop offset="100%" stopColor={strokeColor} stopOpacity="1" />
                </linearGradient>

                <filter id="roughEffect">
                    <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="4" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                </filter>
            </defs>

            <rect
                filter="url(#roughEffect)"
                x="4" y="4"
                width="calc(100% - 8px)" height="calc(100% - 8px)"
                rx={`${isMobile ? "26" : "24"}`} ry={`${isMobile ? "26" : "24"}`}
                fill="none"
                stroke={`url(#${currentColor})`}
                strokeWidth={isMobile ? "2" : "10"}
                vectorEffect="non-scaling-stroke"
            />

            <g transform="translate(150, 200)" >
                <g transform={`${isMobile ? "translate(0, -50)" : "translate(0, -80)"}`} filter="url(#roughEffect)">
                    <polyline
                        points={`
                            ${isMobile ? "-50" : "-30"},
                            ${isMobile ? "-50" : "-30"} ${isMobile ? "-100" : "-60"},
                            0 ${isMobile ? "-50" : "-30"},
                            ${isMobile ? "50" : "30"}`}
                        fill="none"
                        stroke={`url(#${currentColor})`}
                        strokeWidth={isMobile ? "3" : "12"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                    />


                    <line
                        x1={`${isMobile ? "10" : "15"}`} y1={`${isMobile ? "-80" : "-50"}`} x2="-15" y2={`${isMobile ? "80" : "50"}`}
                        stroke={`url(#${currentColor})`}
                        strokeWidth={isMobile ? "3" : "12"}
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                    />
                    <polyline
                        points={`
                            ${isMobile ? "50" : "30"},
                            ${isMobile ? "-50" : "-30"} ${isMobile ? "100" : "60"},
                            0 ${isMobile ? "50" : "30"},
                            ${isMobile ? "50" : "30"}`}
                        fill="none"
                        stroke={`url(#${currentColor})`}
                        strokeWidth={isMobile ? "3" : "12"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                    />
                </g>

                <g>
                    <text className={isMobile ? 'hidden' : 'font-machine'} x="0" y="10" fontSize="48" fontFamily="font-machine" textAnchor="middle"
                        fill={strokeColor}
                        dominantBaseline="middle">
                        OLIVEIRA
                    </text>
                    <text
                        className={isMobile ? 'hidden' : 'font-machine'} x="0" y="40" fontSize="22" fontFamily="font-machine" textAnchor="middle"
                        fill={strokeColor}
                        dominantBaseline="middle">
                        Dev. Front-end
                    </text>
                </g>
            </g>
        </svg>
    )
}