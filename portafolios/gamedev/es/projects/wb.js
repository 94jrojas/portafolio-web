import { createProject, media, tag } from "utils/portafolioCreator";

const tags = [
  tag("Unity", "https://unity.com/"),
  tag("Unity Collaborate", "https://unity.com/unity/features/collaborate"),
  tag("AdMob", "https://developers.google.com/admob/"),
  tag("Play Games SDK", "https://github.com/playgameservices/play-games-plugin-for-unity"),
  tag("One Signal", "https://onesignal.com/"),
  tag("Unity IAP", "https://unity.com/features/iap"),
  tag("Game Analitics", "https://gameanalytics.com/"),
];

const medias = [
  media("Gameplay", "https://www.youtube.com/watch?v=wzbksFz9990"),
];

export default createProject({
  title: "Wildboys 🎮",
  text: `
  Wildbouys es un juego móvil publicado en Google Play Store. Fue desarrollado en Unity. El desarrollo de este juego fue mucho más fácil ya que tenía muchos recursos de juegos que había desarrollado anteriormente.

  Uno de los desafíos de este juego se puede resumir en la siguiente pregunta: "¿Cómo hacer que un juego simple sea divertido?", resolver este desafío tomó muchas iteraciones, implementando y descartando ideas, hasta que el gameplay fuera divertido, minimalista y que hiciera que las personas quisieran jugar más.

  
  Hasta el momento Wildboys utiliza las siguientes tecnologías:`,
  pictureURL: "/images/games/wb/wildboys.png",
  downloadURL:
    "https://play.google.com/store/apps/details?id=com.radioactivegames.wildboys" /*If this variable is present it will show a section for downloading your project */,
  testText: `¡Puedes jugar el juego en Android dando click acá!` /*It will change the title on the test section (only if the section is already showing) */,
  testTitle: `Juega`,
  tags,
  media: medias,
});
