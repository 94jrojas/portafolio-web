import { createSkill, tag } from "utils/portafolioCreator";

const tags = [
  tag("Unity", "https://unity.com/"),
  tag("Playfab", "https://playfab.com/"),
  tag("Mirror Networking", "https://mirror-networking.com/"),
  tag("One Signal", "https://https://onesignal.com/"),
  tag("Firebase", "https://firebase.google.com/"),
];

export default createSkill({
  title: "Game Development",
  text: `
  I have 5+ years of experience learning and working on Unity, in those years I have created a lot of personal projects that allowed me to gain extensive knowledge of this software.
Since 2018 I have completed two large games, a **multiplayer** competitive game for PC (with dedicated servers), and a casual **mobile** game.
  `,
  tags,
});
