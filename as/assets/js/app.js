// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-btn');
const html = document.documentElement;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply saved theme
html.setAttribute('data-theme', currentTheme);
themeToggle.innerHTML = currentTheme === 'dark' ? 
  '<i class="fas fa-sun"></i>' : 
  '<i class="fas fa-moon"></i>';

// Toggle function
themeToggle.addEventListener('click', () => {
  const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  themeToggle.innerHTML = newTheme === 'dark' ? 
    '<i class="fas fa-sun"></i>' : 
    '<i class="fas fa-moon"></i>';
});