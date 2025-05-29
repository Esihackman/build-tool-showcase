import tools from './assets/data.json';
import './styles/main.scss';

interface Tool {
  name: string;
  description: string;
  image: string;
}

const main = document.querySelector('main') as HTMLElement;

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
