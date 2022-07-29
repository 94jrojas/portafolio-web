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
  tag("Kubernetes", "https://kubernetes.io/"), ,
];

export default createSkill({
  title: "Web and Backend Development",
  text: `I've done frontend and backend development for webpages and APIs, using technologies like ReactJS, NextJS and NodeJS.
        
In addition to that I can use a lot of databases (SQL and NonSQL) like: MySQL, SQL Lite, SQL Server, Firebase, MongoDB and Redis.`,
  tags,
});
