import { createProject, media, tag } from "utils/portafolioCreator";

const tags = [tag("Tag 1"), tag("Tag 2"), tag("Tag 3")];

const medias = [
  media("Video #1", "https://www.youtube.com/watch?v=FGgtwEQ-BTk"),
  media("Video #2", "https://www.youtube.com/watch?v=UqJhj88Szb8"),
];

export default createProject({
  title: "Project #2",
  text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, viverra montes faucibus a nam molestie penatibus, venenatis suscipit sem elementum imperdiet hendrerit interdum, class dignissim fringilla blandit litora dapibus. Nostra et arcu id felis vehicula leo aptent, posuere feugiat in morbi habitasse tristique vestibulum senectus, bibendum quisque ad per diam conubia.",
  pictureURL: "/images/placeholder.png",
  downloadURL:
    "url-to-your-project.rar" /*If this variable is present it will show a section for downloading your project */,
  testContactEmail:
    "jondoe@example.com" /*If you dont want to show your email in this section , you have to set this variable to null */,
  testTitle:
    "Download Project #2" /*It will change the title on the test section (only if the section is already showing) */,
  testText:
    "You can download this project with the following button, for more information contact me at: " /*Same as the testTitle but with the paragraph before the download button */,
  tags,
  media: medias,
});
