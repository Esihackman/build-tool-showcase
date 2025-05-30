import tools from './assets/data.json';
import "./styles/main.scss";
import { renderList } from './utils';



renderList(tools);
const buttonImage: HTMLImageElement = document.querySelector("button img")!;

export function toggleTheme() {
document.body.classList.toggle("dark-mode");

  buttonImage.src =
    document.body.classList.contains("dark-mode") ?
      "https://img.icons8.com/external-linear-outline-icons-papa-vector/78/external-Light-Mode-interface-linear-outline-icons-papa-vector.png"
    : "https://img.icons8.com/sf-ultralight-filled/25/moon-symbol.png";

  buttonImage.width = 30;
  buttonImage.height = 30;
}
buttonImage.addEventListener("click", toggleTheme);







