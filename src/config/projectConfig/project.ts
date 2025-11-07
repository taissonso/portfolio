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
    clock: {
        displayName: "Tipos de relógios",
        imageUrl: "/portfolio/images/projects/img-clock-project.png",
    },
    tabuada: {
        displayName: "Tabuada",
        imageUrl: "/portfolio/images/projects/img-tabuada.png",
    },
    crudCsharp: {
        displayName: "CRUD em C#",
        imageUrl: "/portfolio/images/projects/img-crud-csharp.png",
    },
    "desafio-frontend-jr-vnda": {
        displayName: "Desafio Frontend I",
        imageUrl: "/portfolio/images/projects/img-test-front-i.png",
    },
    "dz-front-end": {
        displayName: "Desafio Frontend II",
        imageUrl: "/portfolio/images/projects/img-test-front-ii.png",
    },
    "hash-game": {
        displayName: "Jogo da velha",
        imageUrl: "/portfolio/images/projects/img-jogo-da-velha.png",
    },
    html5references: {
        displayName: "Referências para HTML5",
        imageUrl: "/portfolio/images/projects/img-html-references.png",
    },
    logotipoHTML5: {
        displayName: "Logotipo HTML5",
        imageUrl: "/portfolio/images/projects/img-html-logo.png",
    },
    "market-list": {
        displayName: "Lista de compras",
        imageUrl: "/portfolio/images/projects/img-marketlist.png",
    },
};
