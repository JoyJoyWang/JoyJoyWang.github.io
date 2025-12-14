// Theme toggle functionality
(function() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  const html = document.documentElement;

  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
  } else if (systemPrefersDark) {
    html.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  });
})();
