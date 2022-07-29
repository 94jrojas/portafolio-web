import { createSkill, tag } from "utils/portafolioCreator";

const tags = [
  tag("Java", "https://www.java.com/"),
  tag(".NET", "https://dotnet.microsoft.com/"),
];

export default createSkill({
  title: "App Development",
  text: `In the course of my training until now, I have worked in the development of applications, using high-level and low-level languages. Like for example: Java, .NET C#, C++ and C.`,
  tags,
});
