export interface ProjectConfig {
    displayName: string;
    imageUrl: string;
    featured?: boolean;
}

export const projectsConfig: Record<string, ProjectConfig> = {
    calculator: {
        displayName: "Calculadora",
        imageUrl: "/portfolio/images/projects/test-img.png",
    },
    "car-finder-filter": {
        displayName: "Filtro de carros",
        imageUrl: "/portfolio/images/projects/filter-car.png",
    },
};
