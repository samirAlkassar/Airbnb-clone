import type { AppProps } from "next/app";
import "./globals.css"; // Ensure correct import path
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 4,
  color: "#fe595e",
  className: "z-50",
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
