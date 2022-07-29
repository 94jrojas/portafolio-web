import { createProject, media, tag } from "utils/portafolioCreator";
const tags = [
  tag("Unity", "https://unity.com/"),
  tag("Mirror Networking", "https://mirror-networking.com/"),
  tag("Playfab", "https://playfab.com/"),
  tag("NodeJS", "https://nodejs.org/en/"),
  tag("ReactJS", "https://reactjs.org/"),
  tag("MongoDB", "https://www.mongodb.com/"),
  tag("Redis", "https://redis.io/"),
  tag("SocketIO", "https://socket.io/"),
  tag("Stripe", "https://stripe.com/es-us"),
  tag("Git", "https://git-scm.com/"),
  tag("Unity Collaborate", "https://unity.com/unity/features/collaborate"),
  tag("Trello", "https://trello.com/"),
];

const medias = [
  media("Gameplay", "https://www.youtube.com/watch?v=2NBcbtSQBTE"),
  media("Menu/UI", "https://www.youtube.com/watch?v=2NBcbtSQBTE"),
];

export default createProject({
  title: "Gods of the Eternal 🎮",
  text: `
Gods of the Eternal is a multiplayer game that I decided to develop with some friends (we were 3 people on the team). I was the programmer for this game. I did a lot of things with the experience I had gained in my previous years of making smaller projects in Unity. I coded the gameplay, networking, UI, audio, tools, and even a API server for purchasing In-game currency from a website using Stripe. I also was the UI designer.

In addition to using all my previous knowledge in the creation of the game I also learned a ton of new things. One of the main challenges was that Gods of the Eternal is a multiplayer game, with a dedicated server, so I had to learn how to make that work.

Implementing the real-time online status was also a challenge because I had to use other technologies alongside Unity, like NodeJS and SocketIO.

Gods of the Eternal was developed in a year and a half.

You can request a demo of this project at: [94.jrojas@gmail.com](94.jrojas@gmail.com)  and find more info about it at: [Radioactive Games](https://radioactivegames.net/games/gote)
            
I made use of the following technologies and services for creating Gods of the Eternal:`,
  pictureURL: "/images/games/gote/gote_gameplay.gif",
  testContactEmail:
    "94.jrojas@gmail.com" /*If you dont want to show your email in this section , you have to set this variable to null */,
  testText: `` /*It will change the title on the test section (only if the section is already showing) */,
  testTitle: `Request a demo` /*It will change the title on the test section (only if the section is already showing) */,
  tags,
  media: medias,
});
