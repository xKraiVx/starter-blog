import { PRIVAT_PATHS } from "@/common/constants/privatPaths";
import { TMaybe } from "@/common/types/general-types.type";

export const getPrivatPathnamesWithLocale = (
  locale: TMaybe<string>
): string[] => {
  return PRIVAT_PATHS.map((pathname) =>
    locale ? `/${locale}/${pathname}` : `/${pathname}`
  );
};
