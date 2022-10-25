import "../styles/globals.css";
import "../styles/horoscope.css";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter/";
import theme from "../src/theme";
import "../styles/fonts.css";
import Layout from "../src/components/Layout";
import Router from "next/router";
import { AppContextProvider } from "../src/context/context";
import BigBanner from "../src/commons/BigBanner";
import { useEffect, useState } from "react";
import axios from "axios";
import BannerAdhesion from "../src/commons/BannerAdhesion";
import NextNProgress from "../src/components/ProgressBar";

function MyApp({ Component, pageProps }) {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    axios
      .get("https://strapi-production-b364.up.railway.app/banners")
      .then((res) => setBanners(res.data));
  }, []);

  return (
    <AppContextProvider>
      <ChakraProvider theme={theme}>
        <BigBanner data={banners} />
        <Layout banners={banners}>
          <NextNProgress />
          <Component {...pageProps} />
          <BannerAdhesion data={banners} />
        </Layout>
      </ChakraProvider>
    </AppContextProvider>
  );
}

export default MyApp;
