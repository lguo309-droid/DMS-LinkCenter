// 1. Grab the toggle button element from your HTML
const themeToggleBtn = document.getElementById('theme-toggle');

// 2. Check if the user has a saved dark mode preference from a previous visit
const savedTheme = localStorage.getItem('theme');

// 3. Check if the user's computer/phone defaults to a system-wide dark mode
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// 4. If they prefer dark mode (saved or system default), apply it right away
if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
  document.body.classList.add('dark-mode');
}

// 5. Add a click event listener to the toggle button
themeToggleBtn.addEventListener('click', () => {
  // Toggle the "dark-mode" class on the <body> tag
  document.body.classList.toggle('dark-mode');
  
  // Figure out what state the site is in now
  let currentTheme = 'light';
  if (document.body.classList.contains('dark-mode')) {
    currentTheme = 'dark';
  }
  
  // Save that setting so the browser remembers it on refresh!
  localStorage.setItem('theme', currentTheme);
});
