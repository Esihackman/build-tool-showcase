interface Tool {
  name: string;
  description: string;
  image: string;
}

export const renderList = (tools: Tool[]): void => {
  const main = document.querySelector('main');
  if (!main) {
    //console.error('No <main> element found in the document.');
    return;
  }

  tools.forEach((tool) => {
    const card = document.createElement('div');
    card.className = 'tool-card';

    card.innerHTML = `
      <img src="assets/images/${tool.image}" alt="${tool.name} logo" />
      <h2>${tool.name}</h2>
      <p>${tool.description}</p>
    `;

    main.appendChild(card);
  });
};
