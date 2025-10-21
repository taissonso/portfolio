import { GitHubRepo } from "./types";

export async function fetchGitHubRepos(
    username: string
): Promise<GitHubRepo[]> {
    const headers: Record<string, string> = {};

    if (process.env.GITHUB_TOKEN) {
        headers["Authorization"] = `token ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
        `https://api.github.com/users/${username}/repos`,
        { headers }
    );

    if (!response.ok) {
        throw new Error(`Failed to fetch repos: ${response.status}`);
    }

    const data = await response.json();
    return data;
}

export async function fetchRepoLanguages(languagesUrl: string) {
    const headers: Record<string, string> = {};

    if (process.env.GITHUB_TOKEN) {
        headers["Authorization"] = `token ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(languagesUrl, { headers });
    const data = await response.json();
    return data;
}
