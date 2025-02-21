const backendAdress = process.env.NEXT_PUBLIC_BACKEND;

export const getImageUrl = (url?: string): string | undefined => {
  if (!url) {
    return;
  }

  return `${backendAdress}${url}`;
};
