import { generateDynamicTheme } from "./generate";
import { modifyTheme } from "./utils";

export const applyDynamicTheme = async (imgSource) => {
    const theme = await generateDynamicTheme(imgSource);

    const modifiedTheme = modifyTheme(theme);

    const root = document.documentElement;
    root.style.setProperty("--mdc-theme-primary", theme.primary);
    root.style.setProperty("--mdc-theme-secondary", theme.secondary);
    root.style.setProperty("--mdc-theme-background", theme.background);
    root.style.setProperty("--mdc-theme-surface", theme.surface);
    root.style.setProperty("--mdc-theme-error", theme.error);
    root.style.setProperty("--mdc-theme-on-primary", theme.onPrimary);
    root.style.setProperty("--mdc-theme-on-secondary", theme.onSecondary);
    root.style.setProperty("--mdc-theme-on-surface", theme.onSurface);
    root.style.setProperty("--mdc-theme-on-error", theme.onError);
    return theme;
};