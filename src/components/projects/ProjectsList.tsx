'use client'

import { ProjectsListProps } from "./types";
import { getLanguageIcons } from "../../../utils/languageIcons";
import ButtonIcon from "../buttons";
import { useTheme } from "@/contexts/ThemeContext";
import Typography from "../typography";
import Image from "next/image";

export default function ProjectsList({ initialProjects = [] }: ProjectsListProps) {
    const { theme } = useTheme();
    return (
        <section className="h-auto w-full py-14 lg:py-28">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">

                {initialProjects.map(repo => (
                    <div key={repo.id} className={`p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${theme === 'dark' ? 'bg-card-project-dark' : 'bg-card-project-light'}`}>
                        <div className={`h-full flex flex-col rounded-2xl shadow-lg`}>
                            <div className="img-container w-full h-[250px] bg-red-500 rounded-t-2xl overflow-hidden">
                                <Image
                                    src={repo.imageUrl || ''}
                                    alt={repo.displayName || ''}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover object-center "
                                />
                            </div>

                            <div className={`flex-1 gap-0 border border-solid border-t-0 rounded-b-2xl flex flex-col justify-between ${theme === 'dark' ? 'border-card-project-light' : 'border-gray-400'}`}>
                                <div className="flex flex-col gap-2 p-6">
                                    <Typography variant="h5" className={`${theme === 'dark' ? 'text-card-text-dark' : 'text-card-text-light'} font-semibold`}>{repo.displayName}</Typography>
                                    <Typography variant="p" titleFontSize="p-medium" className={`${theme === 'dark' ? 'text-card-text-dark' : 'text-card-text-light'}`}>{repo.description}</Typography>
                                    <div className="flex gap-3 items-end justify-start mb-4 mt-2">
                                        {repo.languages ? getLanguageIcons(repo.languages) : <span>Sem linguagens</span>}
                                    </div>
                                </div>
                                <div className={`px-6 py-3 flex gap-8 border-0 border-solid rounded-b-2xl ${theme === 'dark' ? 'border-card-project-light' : 'border-gray-400'}`}>
                                    <ButtonIcon href={repo.html_url} label="GitHub" theme={theme} variant="github" />
                                    {repo.homepage && <ButtonIcon href={repo.homepage} label="Ver projeto" theme={theme} variant="project" />}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}