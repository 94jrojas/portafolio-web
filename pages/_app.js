import "../styles/globals.css";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "styles/theme";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast, Flip } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import "styles/Toast.css";
import * as gtag from "../lib/gtag";

//Fonts

import "@fontsource/hind/300.css";
import "@fontsource/hind/400.css";
import "@fontsource/hind/700.css";

import "@fontsource/mukta/400.css";
import "@fontsource/mukta/600.css";
import "@fontsource/mukta/700.css";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";

import "@fontsource/kulim-park/400.css";
import "@fontsource/kulim-park/600.css";

import "@fontsource/staatliches";
import { useRouter } from "next/router";

const toastClasses = {
  error: "red",
};

export default function MyApp(props) {
  const { Component, pageProps, router } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <React.Fragment>
      <Head>
        <title>Radioactive Games</title>

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <React.Fragment>
          {/* <NavBar selectedIndex={1} /> */}

          <AnimatePresence>
            <motion.div
              key={router.route}
              // initial="pageInitial"
              // animate="pageAnimate"
              // exit="pageExit"
              variants={{
                pageInitial: {
                  opacity: 0,
                },
                pageAnimate: {
                  opacity: 1,
                },
                pageExit: {
                  background: "black",
                  opacity: 0,
                },
              }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </React.Fragment>
      </ThemeProvider>

      <ToastContainer
        newestOnTop={false}
        pauseOnFocusLoss
        position="bottom-right"
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        autoClose={4000}
        transition={Flip}
        draggable={true}
        // style={{ borderRadius: "20px", width: "600px", maxWidth: "90vw" }}
        // bodyStyle={{ fontFamily: "Hind", fontSize: "1.2rem", padding: "20px" }}
      />
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
