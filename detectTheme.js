// Detect user preferred color scheme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.getElementById('theme2').checked = true; // Light theme
    document.getElementById('theme2').dispatchEvent(new Event('change'));
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.getElementById('theme1').checked = true; // Dark theme
    document.getElementById('theme1').dispatchEvent(new Event('change'));
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: high-contrast)').matches) {
    document.getElementById('theme3').checked = true; // High contrast theme
    document.getElementById('theme3').dispatchEvent(new Event('change'));
  }
  