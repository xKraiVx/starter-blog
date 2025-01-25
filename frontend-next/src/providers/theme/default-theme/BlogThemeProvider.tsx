import { ThemeProvider } from "@mui/material/styles";
import { PropsWithChildren } from "react";
import { theme } from "@/providers/theme/default-theme/useDefaultTheme";
import { overrideComponents } from "@/providers/theme/default-theme/override-components";
interface Props extends PropsWithChildren {
  options: {
    key: string;
    prepend: boolean;
  };
}

export default function BlogThemeProvider({ children }: Props) {
  theme.components = overrideComponents();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
