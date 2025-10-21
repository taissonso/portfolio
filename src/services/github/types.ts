export interface GitHubRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    languages_url: string;
    typeLanguages?: GitHubLanguage[];
    languages?: Record<string, number>;
}

export interface GitHubLanguage {
    name: string;
    size: number;
}
