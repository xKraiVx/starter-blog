import { AppBar } from "@/providers/blog-theme-provider/override-components/AppBar";
import { Button } from "@/providers/blog-theme-provider/override-components/Button";
import { FormLabel } from "@/providers/blog-theme-provider/override-components/FormLabel";
import { BaseLine } from "@/providers/blog-theme-provider/override-components/BaseLine";

export const overrideComponents = () => {
  return Object.assign(AppBar(), Button(), FormLabel(), BaseLine());
};
