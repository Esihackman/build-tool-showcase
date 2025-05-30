import { toggleTheme } from "./index";

describe("handleToggleTheme", () => {
  it("should toggle the dark-theme class on body", () => {
    document.body.className = "";
    toggleTheme();
    expect(document.body.classList.contains("dark-mode")).toBe(true);
    toggleTheme();
    expect(document.body.classList.contains("dark-mode")).toBe(false);
  });
});
