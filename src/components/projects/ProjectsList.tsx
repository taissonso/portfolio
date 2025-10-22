import { useState } from "react";
import { ProjectsListProps } from "./types";
import { GitHubRepo } from "@/services/github/types";

export default function ProjectsList({ initialProjects = [] }: ProjectsListProps) {
    return (
        <section className="h-auto w-full py-[112px]">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {initialProjects.map(repo => (
                    <div key={repo.id}>
                        <h2>{repo.name}</h2>
                        <p>{repo.languages ? Object.keys(repo.languages).join(', ') : 'Sem linguagens'}</p>
                        <p className="text-orange-500">{repo.description}</p>
                        <p>Código {repo.html_url}</p>
                        <p className="text-amber-950">{repo.homepage ? <a href={repo.homepage} target="_blank" rel="noopener noreferrer">{repo.homepage}</a> : 'Sem homepage'}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}