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

Gods of the Eternal es un juego multijugador que decidí desarrollar junto con unos amigos (teníamos 3 personas en el equipo). 
Fui el programador de este juego. Hice muchas cosas con la experiencia que obtuve a lo largo de los años haciendo pequeños proyectos en Unity.

rogramé el juego y trabajé en networking, UI, audio, herramientas,  un API server para comprar monedas en el juego usando Stripe. 


Además de usar todo mi conocimiento anterior en la creación del juego también aprendí cosas nuevas. Uno de los desafíos principales fue que Gods of the Eternal es un juego multijugador, con servidores dedicados, así que tuve que aprender como realizar eso.

Implementar el estado en línea de los jugadores en tiempo real fue un desafío porque tuve que usar otras tecnologías junto a Unity, como NodeJS y SocketIO.

Gods of the Eternal fue desarrollado en un año y medio.


Puedes solicitar un demo de este proyecto enviando un correo a: [94.jrojas@gmail.com](94.jrojas@gmail.com)  Y puedes encontrar más información en: [Radioactive Games](https://radioactivegames.net/games/gote)

Utilice los siguientes servicios y tecnologías para crear Gods of the Eternal:`,
  pictureURL: "/images/games/gote/gote_gameplay.gif",
  testContactEmail:
    "94.jrojas@gmail.com" /*If you dont want to show your email in this section , you have to set this variable to null */,
  testText: `` /*It will change the title on the test section (only if the section is already showing) */,
  testTitle: `Solicitar un demo` /*It will change the title on the test section (only if the section is already showing) */,
  tags,
  media: medias,
});
