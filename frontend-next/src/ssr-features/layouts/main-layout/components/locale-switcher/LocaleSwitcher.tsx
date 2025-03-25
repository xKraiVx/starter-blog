"use client";

import { JSX } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ELocale } from "@/common/enums/locale.enum";
import { IconButton } from "@mui/material";

export default function LocaleSwitcher(): JSX.Element {
  const currentLocale = useLocale();
  const pathname = usePathname();

  const router = useRouter();

  const toggleLocale = () => {
    const newLocale = currentLocale === ELocale.EN ? ELocale.UA : ELocale.EN;

    const removedLocale =
      currentLocale !== ELocale.EN
        ? pathname.split(`/${currentLocale}`)[1]
        : pathname;

    const loc = `/${newLocale}`;

    router.push(loc + removedLocale);
  };

  return (
    <IconButton color="inherit" onClick={toggleLocale}>
      {currentLocale.toUpperCase()}
    </IconButton>
  );
}
