import { createProject, media, tag } from "utils/portafolioCreator";

const tags = [
  tag("Unity", "https://unity.com/"),
  tag("Git", "https://git-scm.com/"),
];

const medias = [
  media("Highreel", "https://www.youtube.com/watch?v=JmsvzqqhNTE"),
];

export default createProject({
  title: "Global Game Jam 2021  🎮",
  text: `Unos amigos y yo participamos en la GGJ 2021, con el objetivo de trabajar con nuevas personas, por lo que creamos **Potion of God**
  junto a personas que conocimos en el evento (discord).
  
  Fue un buen ejercicio, porque aprendí como trabajar en equipo y adaptarme con nuevas personas que había conocido recientemente. También llevo mis habilidades creativas
  a un nuevo limite, porque tuve que pensar en una mécanica de juego, mejorarla e implementarla en un plazo de solo 3 días.
  

  Puedes verlo [acá](https://globalgamejam.org/2021/games/potion-god-8).
  `,

  downloadURL: "https://ggj.s3.amazonaws.com/games/2021/01/330841/exec/LGTSw/Potion%20of%20God.zip",
  testText: "Pruébalo tu mismo",
  testText:
    "Descarga el build del juego, vendrá con instrucciones de como jugarlo. O tambien puedes jugarlo desde el navegador [acá](https://www.newgrounds.com/portal/view/779556?updated=1612147432).",
  repositoryURL: "https://github.com/Jobegiar99/Global-Game-Jam-2021",
  tags,
  //   media: medias,
});
