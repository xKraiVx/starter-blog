import { ScrollTriggerContext } from "@/providers/scroll-trigger-provider/ScrollTriggerProvider";
import { useContext } from "react";

export const useScrollTrigger = () => {
  return useContext(ScrollTriggerContext);
};
