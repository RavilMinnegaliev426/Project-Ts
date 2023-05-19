import { createContext } from "react";

interface Props {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export const ThemeContext = createContext<Props>({
  theme: Theme.DARK,
  changeTheme: () => {},
});
