const colorThemes = document.querySelectorAll('[name="theme"]');

//store the theme in cache so it remembers which one was chosen
const storeTheme = (themeId) => {
    localStorage.setItem("theme", themeId);
}

const retrieveTheme = () => {
    const activeTheme = localStorage.getItem("theme");
    colorThemes.forEach((themeOption) => {
        if (themeOption.id === activeTheme) {
            themeOption.checked = true;
        }
    });
    setTheme(activeTheme);
}

colorThemes.forEach(themeOption => {
    themeOption.addEventListener('click', () => {
        storeTheme(themeOption.id);
    });
});

//apply the theme
document.addEventListener('DOMContentLoaded', () => {
    retrieveTheme();
});