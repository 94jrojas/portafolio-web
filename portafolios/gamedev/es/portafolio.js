import { createPortafolio } from "utils/portafolioCreator";
import gamedev from "./skills/gamedev";
import cleanCode from "./skills/cleanCode";
import teamWork from "./skills/teamWork";
import webdev from "./skills/webdev";
import appdev from "./skills/appdev";
import languages from "./skills/languages";
import gote from "./projects/gote";
import wb from "./projects/wb";
import ggj2021 from "./projects/ggj2021";
import age from "portafolios/age";

export default createPortafolio({
  title: "Portafolio",
  text: `Soy Jonathan Rojas un desarrollador de videojuegos de Guatemala, tengo ${age} años y he desarrollado (y jugado) juegos desde que era un niño.
  
  Me gradué en el [Centro Universitario de Oriente](https://cunori.edu.gt/)   en  Ingeniería en Ciencias y Sistemas. Actualmente estoy buscando desarrollar juegos y/o aplicaciones para grandes empresas expandiendo mi conocimiento y experiencia.


  Puedes ver mi CV [aquí](resume/CV-Jonathan-Rojas-Espanol.pdf).
  `,
  profilePictureSrc: "/images/avatars/me.png",
  email: "94.jrojas@gmail.com",
  skills: [gamedev, webdev, appdev, teamWork, cleanCode],
  projects: [wb, gote, ggj2021],
});
