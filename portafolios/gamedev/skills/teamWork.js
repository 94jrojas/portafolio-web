import { createSkill, tag } from "utils/portafolioCreator";

const tags = [
  tag("Git", "https://git-scm.com/"),
  tag("Unity Collaborate", "https://unity.com/unity/features/collaborate"),
  tag("Trello", "https://trello.com/"),
];

export default createSkill({
  title: "Team work",
  text: `Throughout the different games and projects that I've worked on, I
        learned how to create, interact and complete tasks alongside a multidisciplinary team.`,
  tags,
});
