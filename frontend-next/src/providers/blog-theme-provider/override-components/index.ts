import { AppBar } from "./AppBar";
import { Button } from "./Button";
import { BaseLine } from "./BaseLine";
import { FormLabel } from "./FormLabel";

export const overrideComponents = () => {
  return Object.assign(AppBar(), Button(), FormLabel(), BaseLine());
};
