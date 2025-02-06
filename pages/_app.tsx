import type { AppProps } from "next/app";
import "./globals.css"; // Ensure correct import

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
