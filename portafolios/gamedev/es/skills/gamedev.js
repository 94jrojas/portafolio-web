import { createSkill, tag } from "utils/portafolioCreator";

const tags = [
  tag("Unity", "https://unity.com/"),
  tag("Playfab", "https://playfab.com/"),
  tag("Mirror Networking", "https://mirror-networking.com/"),
  tag("One Signal", "https://https://onesignal.com/"),
  tag("Firebase", "https://firebase.google.com/"),
];

export default createSkill({
  title: "Desarrollo de videojuegos",
  text: `
  Tengo más de 5 años de experiencia en el desarrollo de videojuegos en Unity, en esos años he creado muchos proyectos personales que me han permitido ganar conocimientos en distintas áreas.

  Desde 2018 he completado dos juegos grandes, un **multijugador** competitivo para PC (con servidor dedicado) y un juego **móvil**.
  `,
  tags,
});
