import tools from './assets/data.json';
import './styles/main.scss';

interface Tool {
  name: string;
  description: string;
  image: string;
}

const main = document.querySelector('main') as HTMLElement;

export const toggleTheme = ()=>{
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

tools.forEach((tool: Tool) => {
  const card = document.createElement('div');
  card.className = 'tool-card';

  card.innerHTML = `
    <img src="assets/images/${tool.image}" alt="${tool.name} logo" />
    <h2>${tool.name}</h2>
    <p>${tool.description}</p>
  `;

  main.appendChild(card);
});

const toggleBtn = document.getElementById('theme-toggle');

toggleBtn?.addEventListener('click', toggleTheme);

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
