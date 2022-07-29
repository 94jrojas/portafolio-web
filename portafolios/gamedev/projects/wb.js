import { createProject, media, tag } from "utils/portafolioCreator";

const tags = [
  tag("Unity", "https://unity.com/"),
  tag("Unity Collaborate", "https://unity.com/unity/features/collaborate"),
  tag("AdMob", "https://developers.google.com/admob/"),
  tag("Play Games SDK", "https://github.com/playgameservices/play-games-plugin-for-unity"),
  tag("One Signal", "https://onesignal.com/"),
  tag("Unity IAP", "https://unity.com/features/iap"),
];

const medias = [
  media("Gameplay", "https://www.youtube.com/watch?v=wzbksFz9990"),
];

export default createProject({
  title: "Wildboys 🎮",
  text: `
 Wildboys is a mobile game published on the Play Store, It was developed in Unity. The development of this game was smoother and easier as I had a lot of reusable code from previous games I made before.
            
One of the challenges of this game can be summed up into the next question: "How to make a casual game with simple controls fun?”, solving this challenge has taken a lot of iterations, implementing and discarding ideas, until the gameplay loop was fun, minimalistic and making people wanting to play more.

As of right now I've been using the following technologies and services while working on Wildboys:`,
  pictureURL: "/images/games/wb/wildboys.png",
  downloadURL:
    "https://play.google.com/store/apps/details?id=com.radioactivegames.wildboys" /*If this variable is present it will show a section for downloading your project */,
  testText: `You can play the game on Android right here!` /*It will change the title on the test section (only if the section is already showing) */,
  testTitle: `Play the game`,
  tags,
  media: medias,
});
