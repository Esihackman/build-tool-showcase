import { toggleTheme } from "./index";

describe("toggleTheme", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <main></main>
      <button><img src="" alt="Toggle Theme" /></button>
    `;
  });

  it("should toggle the dark-mode class on body", () => {
    document.body.className = "";
    toggleTheme();
    expect(document.body.classList.contains("dark-mode")).toBe(true);
    toggleTheme();
    expect(document.body.classList.contains("dark-mode")).toBe(false);
  });

  it("should set the light-mode icon when dark mode is active", () => {
    const buttonImage = document.querySelector("button img") as HTMLImageElement;

    document.body.classList.add("dark-mode");
    toggleTheme(); 

    expect(buttonImage.src).toContain("icons8.com/sf-ultralight-filled");
  });

  it("should set the dark-mode icon when dark mode is inactive", () => {
    const buttonImage = document.querySelector("button img") as HTMLImageElement;

    document.body.classList.remove("dark-mode");
    toggleTheme(); 

    expect(buttonImage.src).toContain("icons8.com/external-linear-outline-icons-papa-vector");
  });

  it("should set button image width and height to 30", () => {
    const buttonImage = document.querySelector("button img") as HTMLImageElement;

    toggleTheme();

    expect(buttonImage.width).toBe(30);
    expect(buttonImage.height).toBe(30);
  });

  it("should not throw if button image is missing", () => {
    document.body.innerHTML = `<main></main>`; 

    expect(() => toggleTheme()).not.toThrow();
  });
});
