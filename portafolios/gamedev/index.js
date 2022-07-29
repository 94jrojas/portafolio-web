import Head from "next/head";
import React from "react";
import Portafolio from "components/renderers/Portafolio";
import portafolio from "./portafolio";
import portafolioEs from "./es/portafolio";
import { useRouter } from "next/router";

export default function GamedevPortafolio() {

  const router = useRouter();
  const { locale } = router;

  function getPortafolio() {
    if (locale == "es")
      return portafolioEs;

    return portafolio;
  }

  return (
    <React.Fragment>
      <Head>
        <title>Jonathan Rojas | Portafolio</title>
      </Head>
      <Portafolio portafolio={getPortafolio()} />;
    </React.Fragment>
  );
}
