export type ButtonVariant = "default" | "github" | "project" | "moreless";

export const getButtonVariants = (
    variant: ButtonVariant = "default",
    theme: "light" | "dark"
) => {
    const variants = {
        default: {
            light: "bg-card-project-dark text-light-primary hover:bg-gray-300 hover:text-card-text-light",
            dark: "bg-light-primary hover:bg-gray-300 text-card-text-light",
        },
        github: {
            light: "bg-btn-git-light hover:bg-btn-git-light-hover text-white",
            dark: "bg-btn-git-dark hover:bg-btn-git-dark-hover text-dark-primary",
        },
        project: {
            light: "bg-btn-project-light hover:bg-btn-project-light-hover text-white",
            dark: "bg-btn-project-dark hover:bg-btn-project-dark-hover text-dark-primary",
        },
        moreless: {
            light: "bg-card-project-dark text-light-primary hover:text-card-text-light",
            dark: "bg-light-primary text-card-text-light hover:text-light-primary",
        },
    };

    return variants[variant][theme];
};
