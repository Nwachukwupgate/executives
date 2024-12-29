import { useAppStore } from "@/store";
import { parseJwt, tokenIsValid } from "@/utilities/helpers";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { toast } from "sonner";

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_APP_BACKEND_SCHEMA_URL,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists

  let token = useAppStore.getState().authToken;
  const parsedToken = token ? parseJwt(token) : null;
  const exempted = /(login|signup)/.test(location.pathname);

  if (!exempted && !tokenIsValid(parsedToken)) {
    toast.error("session expired login to continue");
    token = null;
  }

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      ...(token && {
        authorization: `Bearer ${token}`,
      }),
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});