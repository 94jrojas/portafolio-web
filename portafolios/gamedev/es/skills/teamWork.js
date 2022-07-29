import { createSkill, tag } from "utils/portafolioCreator";

const tags = [
  tag("Git", "https://git-scm.com/"),
  tag("Unity Collaborate", "https://unity.com/unity/features/collaborate"),
  tag("Trello", "https://trello.com/"),
];

export default createSkill({
  title: "Trabajo en equipo",
  text: `Durante el desarrollo de los distintos proyectos que he realizado, he aprendido como crear, interactuar y completar tareas junto a un equipo multidisciplinario.`,
  tags,
});
