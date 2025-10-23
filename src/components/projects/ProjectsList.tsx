import { ProjectsListProps } from "./types";
import { getLanguageIcons } from "../../../utils/languageIcons";
import Link from "next/link";

export default function ProjectsList({ initialProjects = [] }: ProjectsListProps) {
    return (
        <section className="h-auto w-full py-14 lg:py-28">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {initialProjects.map(repo => (
                    <div key={repo.id} className="flex flex-col  gap-4 bg-blue-300">
                        <h2>{repo.name}</h2>
                        <p className="text-orange-500">{repo.description}</p>
                        <div className="flex gap-2 items-end justify-start  h-auto min-h-20">
                            {repo.languages ? getLanguageIcons(repo.languages) : <span>Sem linguagens</span>}
                        </div>
                        <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">Código GitHub</Link>
                        <p className="">{repo.homepage ? <Link href={repo.homepage} target="_blank" rel="noopener noreferrer">{repo.homepage}</Link> : 'Sem homepage'}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}