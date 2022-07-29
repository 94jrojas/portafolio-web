import { createProject, tag } from "utils/portafolioCreator";

const tags = [tag("Tag 1"), tag("Tag 2"), tag("Tag 3")];

export default createProject({
  title: "Project #1",
  text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, viverra montes faucibus a nam molestie penatibus, venenatis suscipit sem elementum imperdiet hendrerit interdum, class dignissim fringilla blandit litora dapibus. Nostra et arcu id felis vehicula leo aptent, posuere feugiat in morbi habitasse tristique vestibulum senectus, bibendum quisque ad per diam conubia.",
  tags,
});
