import { useSession } from "@/providers/session-provider/hooks/useSession";

export const useFetcher = <TData, TVariables>(
  query: string,
  options?: RequestInit["headers"]
): ((variables?: TVariables) => Promise<TData>) => {
  const { token } = useSession();

  return async (variables?: TVariables) => {
    const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
        ...options,
      },
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0] || {};
      throw new Error(message || "Error…");
    }

    return json.data;
  };
};
