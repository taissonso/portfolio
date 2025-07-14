import { LogoProps } from "./types"

export const Logo = ({ width = 300, height = 300, className, isMobile }: LogoProps) => {
    // Calcular um fator de escala baseado no tamanho padrão vs. tamanho atual
    const baseWidth = 300;
    const baseHeight = 300;

    // Converter para número se for string
    const numWidth = typeof width === 'number' ? width : parseInt(width) || baseWidth;
    const numHeight = typeof height === 'number' ? height : parseInt(height) || baseHeight;

    // Escala proporcional
    const scale = Math.min(numWidth / baseWidth, numHeight / baseHeight);

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
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#212121" stopOpacity="1" />
                    <stop offset="100%" stopColor="#212121" stopOpacity="1" />
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
                rx="24" ry="24"
                fill="none"
                stroke="url(#grad)"
                strokeWidth={isMobile ? "4" : "10"}
                vectorEffect="non-scaling-stroke"
            />

            <g transform="translate(150, 200)" >
                <g transform={`${isMobile ? "translate(0, -40)" : "translate(0, -80)"}`} filter="url(#roughEffect)">
                    <polyline
                        // points="-30,-30 -60,0 -30,30"
                        points={`${isMobile ? "-30" : "-30"},${isMobile ? "-50" : "-30"} ${isMobile ? "-80" : "-60"},0 ${isMobile ? "-30" : "-30"},${isMobile ? "50" : "30"}`}
                        fill="none"
                        stroke="url(#grad)"
                        strokeWidth={isMobile ? "4" : "12"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                    />
                    <line
                        x1="15" y1="-50" x2="-15" y2="50"
                        stroke="url(#grad)"
                        strokeWidth={isMobile ? "4" : "12"}
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                    />
                    <polyline
                        points="30,-30 60,0 30,30"
                        fill="none"
                        stroke="url(#grad)"
                        strokeWidth={isMobile ? "4" : "12"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                    />
                </g>

                <g>
                    <text className={isMobile ? 'hidden' : 'font-machine'} x="0" y="10" fontSize="48" fontFamily="font-machine" textAnchor="middle"
                        fill="#212121"
                        dominantBaseline="middle">
                        OLIVEIRA
                    </text>
                    <text
                        className={isMobile ? 'hidden' : 'font-machine'} x="0" y="40" fontSize="22" fontFamily="font-machine" textAnchor="middle"
                        fill="#212121"
                        dominantBaseline="middle">
                        Dev. Front-end
                    </text>
                </g>
            </g>
        </svg>
    )
}