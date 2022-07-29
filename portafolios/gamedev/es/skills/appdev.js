import { createSkill, tag } from "utils/portafolioCreator";

const tags = [
  tag("Java", "https://www.java.com/"),
  tag(".NET", "https://dotnet.microsoft.com/"),
];

export default createSkill({
  title: "Desarrollo de aplicaciones",
  text: `En el transcurso de mi formación hasta la actualidad en trabajado en el dasarrollo de diversas aplicaciones, utilizando lenguajes de alto nivel como de bajo nivel. Como por ejemplo: Java, .NET C#, C++ y C.`,
  tags,
});
