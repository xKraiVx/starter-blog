import { AppBar } from "@/providers/blog-theme-provider/override-components/AppBar";
import { Button } from "@/providers/blog-theme-provider/override-components/Button";
import { FormLabel } from "@/providers/blog-theme-provider/override-components/FormLabel";
import { BaseLine } from "@/providers/blog-theme-provider/override-components/BaseLine";
import { Paper } from "@/providers/blog-theme-provider/override-components/Paper";
import { Select } from "@/providers/blog-theme-provider/override-components/Select";
import { TextField } from "@/providers/blog-theme-provider/override-components/TextField";

export const overrideComponents = {
  ...AppBar,
  ...Button,
  ...FormLabel,
  ...BaseLine,
  ...Paper,
  ...Select,
  ...TextField,
};
