import { JSX } from "react";
import Profile from "@/ssr-features/pages/profile/Profile";

export default async function Page(): Promise<JSX.Element> {
  return <Profile />;
}
