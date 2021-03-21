import { ChakraProvider } from "@chakra-ui/react";
import NextNprogress from "nextjs-progressbar";

import theme from "../theme";
import { AppProps } from "next/app";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import {
  faShoppingCart,
  faHandHoldingMedical,
  faHome,
  faCarSide,
  faCoins,
  faGlassCheers,
  faHandHoldingUsd,
  faTshirt,
  faGraduationCap,
  faGifts,
  faEllipsisH,
  faAngleDown,
  faBars,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

library.add(
  faShoppingCart,
  faHandHoldingMedical,
  faHome,
  faCarSide,
  faCoins,
  faGlassCheers,
  faHandHoldingUsd,
  faTshirt,
  faGraduationCap,
  faGifts,
  faEllipsisH,
  faAngleDown,
  faBars,
  faTrashAlt
);

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  const [pageLoading, setPageLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => setPageLoading(true));
    router.events.on("routeChangeComplete", () => setPageLoading(false));
    router.events.on("routeChangeError", () => setPageLoading(false));
  }, [router.events]);

  return pageLoading ? (
    <NextNprogress />
  ) : (
    <ChakraProvider resetCSS theme={theme}>
      <NextNprogress />
      <Component {...pageProps} />
      <DarkModeSwitch />
    </ChakraProvider>
  );
}

export default MyApp;
