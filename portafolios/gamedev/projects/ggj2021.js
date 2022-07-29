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
  text: `Some friends and I participated on the GGJ 2021, with the objective of working with new people, so we created **Potion of God** 
  alongside some people with met at the event (discord).
  
  It was a really good exercise, because I learned how to work and adapt with people I've just met. It also pushed my creative skills to 
  a new limit, because I had to think about a game mechanic, improve it and implemented  in span of 3 days.
  
  You can check the submission  [here](https://globalgamejam.org/2021/games/potion-god-8).`,

  downloadURL: "https://ggj.s3.amazonaws.com/games/2021/01/330841/exec/LGTSw/Potion%20of%20God.zip",
  testText: "Test it yourself",
  testText:
    "Download the build of the game, it'll come with instructions of how to play it. Or play it from your browser [here](https://www.newgrounds.com/portal/view/779556?updated=1612147432).",
  repositoryURL: "https://github.com/Jobegiar99/Global-Game-Jam-2021",
  tags,
  //   media: medias,
});
