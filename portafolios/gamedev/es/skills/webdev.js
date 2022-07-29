import { createSkill, tag } from "utils/portafolioCreator";

const tags = [
  tag("PHP", "https://www.php.net/"),
  tag("JavaScript"),
  tag("TypeScript"),
  tag("NodeJS", "https://nodejs.org/en/"),
  tag("ReactJS", "https://reactjs.org/"),
  tag("NextJS", "https://nextjs.org/"),
  tag("MySQL", "https://www.mysql.com/"),
  tag("Firebase", "https://firebase.google.com/"),
  tag("MongoDB", "https://www.mongodb.com/"),
  tag("Redis", "https://redis.io/"),
  tag("Digital Ocean", "https://www.digitalocean.com/"),
  tag("AWS", "https://aws.amazon.com/"),
  tag("Docker", "https://www.docker.com/"),
  tag("Kubernetes", "https://kubernetes.io/"),
];

export default createSkill({
  title: "Desarrollo Web (Frontend y Backend)",
  text: `
  He hecho una gran variedad de proyectos web, donde he creado páginas web y APIs, utilizando tecnologías como ReactJS, NextJS y NodeJS.   
  Además de eso puedo trabajar con bases de datos (SQL y NoSQL). Como: MySQL, SQL Lite, SQL Server, Firebase, MongoDB y Redis.`,
  tags,
});
