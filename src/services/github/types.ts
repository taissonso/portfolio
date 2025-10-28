export interface GitHubRepo {
    id: number;
    name: string;
    displayName?: string;
    description: string;
    homepage?: string;
    html_url: string;
    languages_url: string;
    typeLanguages?: GitHubLanguage[];
    languages?: Record<string, number>;
    imageUrl?: string;
}

export interface GitHubLanguage {
    name: string;
    size: number;
}
