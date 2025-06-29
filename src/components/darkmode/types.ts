type Theme = "light" | "dark";
export interface DarkModeProps {
    theme: Theme;
    toggleDarkMode: () => void;
}
