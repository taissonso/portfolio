import { useState } from "react";
import { ProjectsListProps } from "./types";
import { GitHubRepo } from "@/services/github/types";

export default function ProjectsList({ initialProjects = [] }: ProjectsListProps) {
    return (
        <section className="h-screen w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {initialProjects.map(repo => (
                <div key={repo.id}>
                    <h2>{repo.name}</h2>
                    <p>{repo.languages ? Object.keys(repo.languages).join(', ') : 'Sem linguagens'}</p>
                </div>
            ))}
        </section>
    );
}