// Function to set the theme by adding a class to the <html> element
function setTheme(theme) {
    const rootElement = document.documentElement;
  
    // Remove existing theme classes
    rootElement.classList.remove("dark-mode", "light-mode", "high-contrast-mode");
  
    // Add the selected theme class
    rootElement.classList.add(theme);
  }
  
  // Event listener for the theme radio buttons
  //const colorThemes = document.querySelectorAll('[name="theme"]');
  colorThemes.forEach(themeOption => {
    themeOption.addEventListener('change', () => {
      if (themeOption.checked) {
        setTheme(themeOption.value);
      }
    });
  });
  