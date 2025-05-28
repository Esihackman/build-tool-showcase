import './styles/main.scss';

const toggleTheme = () => {
  document.body.classList.toggle('dark-theme');
};

const btn = document.createElement('button');
btn.textContent = 'Toggle Theme';
btn.onclick = toggleTheme;
document.body.appendChild(btn);
