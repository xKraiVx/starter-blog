export const castToArray = <T>(value: T | T[]): T[] => {
  if (Array.isArray(value)) {
    return value;
  }

  return [];
};
