import { Theme } from "../context/ThemeContext";

export function ChangeCssRootVariabels(theme: Theme) {
  const root = document.querySelector(":root") as HTMLElement;
  const components = [
    "--body-backgroud",
    "--components-backgroud",
    "--card-backgroud",
    "--card-box-shadow",
    "--text-color",
  ];
  components.forEach((item) => {
    root.style.setProperty(`${item}-default`, `var(${item}-${theme})`);
  });
}
