import { overrideComponents } from "@/providers/blog-theme-provider/override-components";
import { theme } from "@/providers/blog-theme-provider/useDefaultTheme";
import { ThemeProvider } from "@mui/material/styles";
import { PropsWithChildren } from "react";
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
