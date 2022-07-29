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
  title: "Portfolio",
  text: `Hey, I’m Jonathan Rojas a game developer from Guatemala, I am ${age} years old and have been developing (and playing) games since i was a kid.
  
  I graduated from [Centro Universitario de Oriente](https://cunori.edu.gt/)   in science and systems engineering and I’m currently looking to develop games and apps for
      great companies and expand my knowledge and experience.
  
  
  You can check my resume [here](resume/CV-Jonathan-Rojas-English.pdf).
      `,
  profilePictureSrc: "/images/avatars/me.png",
  email: "94.jrojas@gmail.com",
  skills: [gamedev, webdev, appdev, teamWork, cleanCode],
  projects: [wb, gote, ggj2021],
});
