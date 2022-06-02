import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { TempModeContextProvider } from "../components/TempMode";
import "weather-icons/css/weather-icons.css";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <TempModeContextProvider>
          <Component {...pageProps} />
        </TempModeContextProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
