import { AppBar } from "@/providers/blog-theme-provider/override-components/AppBar";
import { Button } from "@/providers/blog-theme-provider/override-components/Button";
import { FormLabel } from "@/providers/blog-theme-provider/override-components/FormLabel";
import { BaseLine } from "@/providers/blog-theme-provider/override-components/BaseLine";
import { Paper } from "@/providers/blog-theme-provider/override-components/Paper";

export const overrideComponents = {
  ...AppBar,
  ...Button,
  ...FormLabel,
  ...BaseLine,
  ...Paper,
};
