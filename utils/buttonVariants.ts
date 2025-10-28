export type ButtonVariant = "default" | "github" | "project";

export const getButtonVariants = (
    variant: ButtonVariant = "default",
    theme: "light" | "dark"
) => {
    const variants = {
        default: {
            light: "bg-gray-200 hover:bg-gray-300 text-dark-primary",
            dark: "bg-gray-800 hover:bg-gray-700 text-offwhite",
        },
        github: {
            light: "bg-btn-git-light hover:bg-btn-git-light-hover text-white",
            dark: "bg-btn-git-dark hover:bg-btn-git-dark-hover text-dark-primary",
        },
        project: {
            light: "bg-btn-project-light hover:bg-btn-project-light-hover text-white",
            dark: "bg-btn-project-dark hover:bg-btn-project-dark-hover text-dark-primary",
        },
    };

    return variants[variant][theme];
};
