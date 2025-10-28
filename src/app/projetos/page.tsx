import { fetchGitHubRepos, fetchRepoLanguages } from '@/services/github/github';
import ProjectsList from '@/components/projects/ProjectsList';
import HeroProjects from '@/components/heros/projects';
import { projectsConfig } from '@/config/projectConfig/project';

export default async function ProjetosPage() {
    const repos = await fetchGitHubRepos('taissonso');
    const excludedProjects = ['taissonso', 'portfolio'];

    const projectNames: Record<string, string> = {
        'calculator': 'Calculadora',
        'car-finder-filter': 'Filtro de carros',
        'clock': 'Tipos de relógios',
        'crudCsharp': 'Tradicional CRUD em C#',
        'desafio-frontend-jr-vnda': 'Desafio Frontend I',
        'dz-front-end': 'Desafio Frontend II',
        'hash-game': 'Jogo da velha',
        'html5references': 'Referências para HTML5',
        'logotipoHTML5': 'Logotipo HTML5',
        'market-list': 'Lista de compras',
        'multiple-filters': 'Múltiplos filtros',
        'productionRegistration': 'Cadastro de produção',
        'tabuada': 'Tabuada interativa',
    };

    const filteredRepos = repos.filter(repo => !excludedProjects.includes(repo.name));

    const reposWithLanguages = await Promise.all(
        filteredRepos.map(async (repo) => ({
            ...repo,
            displayName: projectsConfig[repo.name]?.displayName || repo.name,
            imageUrl: projectsConfig[repo.name]?.imageUrl || '/images/projects/default.jpg',
            languages: repo.languages_url ? await fetchRepoLanguages(repo.languages_url) : {}
        }))
    );

    return (
        <>
            <HeroProjects />
            <ProjectsList initialProjects={reposWithLanguages} />
        </>
    );
}