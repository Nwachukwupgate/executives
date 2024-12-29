import { ApolloProvider } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { Toaster } from "sonner";
import WelcomeLoader from "./common/loaders/WelcomeLoader";
import { client } from "./lib/apollo-config";
import AppRouter from "./navigation";
import AppThemeProvider from "./theme/AppThemeProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 180_000, //number in milliseconds equals to 3 minutes,
    },
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
        <QueryClientProvider client={queryClient}>
        <AppThemeProvider>
          <Suspense fallback={<WelcomeLoader />}>
            <AppRouter />
          </Suspense>
        </AppThemeProvider>
        <Toaster richColors position="top-right" theme="light" />
        {/* <AppModals /> */}
      </QueryClientProvider>
    </ApolloProvider>
  );
}

export default App;
