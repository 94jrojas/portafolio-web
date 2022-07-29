import { createPortafolio } from "utils/portafolioCreator";
import skill1 from "./skills/skill1";
import skill2 from "./skills/skill2";
import project1 from "./projects/project1";
import project2 from "./projects/project2";

export default createPortafolio({
  title: "Portafolio",
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec diam condimentum elit cursus facilisis. Praesent nec mattis velit. Interdum et **malesuada** fames ac ante ipsum primis in faucibus. Pellentesque ullamcorper nunc posuere dignissim placerat.
  
  Fusce non **faucibus** enim. Pellentesque rhoncus sapien et lorem dictum aliquam. Sed vel diam in augue fermentum eleifend. Curabitur in mauris dolor. Quisque mollis condimentum posuere. Aenean vulputate malesuada ligula, eu malesuada sem.`,
  profilePictureSrc: "/images/avatars/me.png",
  email: "jondoe@example.com",
  skills: [skill1, skill2],
  projects: [project1, project2],
});
