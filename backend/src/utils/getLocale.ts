export const getLocale = (locale?: string): string => {
  if (!locale) {
    return "en";
  }

  return locale;
};
