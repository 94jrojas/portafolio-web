import { createSkill, tag } from "utils/portafolioCreator";

const tags = [
  tag("A Tag With A Link", "https://nextjs.org/"),
  tag("Dont Click This", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"),
  tag("Another Tag Without Any Link"),
];

export default createSkill({
  title: "Skill #2",
  text: "Adipiscing elit duis tristique sollicitudin nibh sit amet. Porttitor rhoncus dolor purus non enim. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Id donec ultrices tincidunt arcu non sodales neque. Metus aliquam eleifend mi in. ",
  tags,
});
