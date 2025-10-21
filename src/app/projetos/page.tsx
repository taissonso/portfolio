import { fetchGitHubRepos, fetchRepoLanguages } from '@/services/github/github';
import ProjectsList from '@/components/projects/ProjectsList';

export default async function ProjetosPage() {
    const repos = await fetchGitHubRepos('taissonso');

    const reposWithLanguages = await Promise.all(
        repos.map(async (repo) => ({
            ...repo,
            languages: repo.languages_url ? await fetchRepoLanguages(repo.languages_url) : {}
        }))
    );

    return <ProjectsList initialProjects={reposWithLanguages} />;
}