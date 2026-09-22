import { create } from "zustand";

const getInitialTheme = () => {
    if (typeof window !== "undefined") {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) return storedTheme;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
};

const applyTheme = (theme) => {
    if (typeof document !== "undefined") {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }
};

const initialTheme = getInitialTheme();
applyTheme(initialTheme);

const useThemeStore = create((set) => ({
    theme: initialTheme,
    toggleTheme: () =>
        set((state) => {
            const nextTheme = state.theme === "dark" ? "light" : "dark";
            applyTheme(nextTheme);
            return { theme: nextTheme };
        }),
    setTheme: (newTheme) => {
        applyTheme(newTheme);
        set({ theme: newTheme });
    },
}));

export default useThemeStore;
