import bamazon from "../assets/projects/bamazon.png";
import calculator from "../assets/projects/calc.png";
import covid from "../assets/projects/covid19.png";
import crystalcollector from "../assets/projects/crystalcollector.png";
import friendFinder from "../assets/projects/FriendFinder1.png";
import giphy from "../assets/projects/giphy.png";
import sushi from "../assets/projects/sushi.JPG";
import liri from "../assets/projects/liri.png";
import trivia from "../assets/projects/trivia.png";
import clicky from "../assets/projects/clicky.png";

const data_projects = [
  {
    name: "Covid 19 Tracker",
    image: covid,
    deployed_url: "https://wbenarto.github.io/COVID19_Tracker/",
    github: "https://github.com/wbenarto/Covid19_Tracker",
    desc:
      "Real time Covid-19 tracking web-app utilizing React, Material-UI, and Mathdro API based on John Hopkins hospital data. User are able to pick a country for result.",
    category: ["react.js", "api"],
  },
  {
    name: "Sushi",
    image: sushi,
    deployed_url: "https://polar-cliffs-38995.herokuapp.com/",
    github: "https://github.com/wbenarto/Webe_Sushi",
    desc: "E-commerce mock website for Pick Up and Drop Off sushi orders",
    category: ["full-stack", "mongoDB", "react.js", "node.js"],
  },
  {
    name: "Calculator",
    image: calculator,
    deployed_url: "https://wbenarto.github.io/calculator/",
    github: "https://github.com/wbenarto/calculator",
    desc: "",
    category: ["react.js"],
  },
  {
    name: "Bamazon",
    image: bamazon,
    deployed_url: "https://youtu.be/ICqFhFLAfKg",
    github: "https://github.com/wbenarto/bamazon",
    desc:
      "CLI app with 3 different roles (Customer, Manager, and Supervisor) for Webe Sushi Restaurant.",
    category: ["node.js"],
  },
  {
    name: "Liri Webe Sushi",
    image: liri,
    deployed_url: "https://www.youtube.com/watch?v=jqz086k84K8",
    github: "https://github.com/wbenarto/LIRI-node-app",
    desc:
      "Personal assistant LIRI looks up information about movies, songs, or concerts using OMDB, Spotify, and Bands-In-Town API.",
    category: ["node.js", "api"],
  },
  {
    name: "Clicky Game",
    image: clicky,
    deployed_url: "https://evening-hamlet-61362.herokuapp.com/",
    github: "https://github.com/wbenarto/Clicky_Game",
    desc:
      "This app is a memory game with React. This project required me to break up my application's UI into components, manage component state, and respond to user events.",
    category: ["react.js"],
  },
  {
    name: "Python",
    image: giphy,
    deployed_url: "",
    github: "",
    desc: "",
    category: ["python", "react.js"],
  },
  {
    name: "API",
    image: trivia,
    deployed_url: "",
    github: "",
    desc: "",
    category: ["api"],
  },
  {
    name: "Crystal Collector",
    image: crystalcollector,
    deployed_url: "https://wbenarto.github.io/unit-4-game/",
    github: "https://github.com/wbenarto/unit-4-game",
    desc:
      "Random-number guessing game. The user try to match Thor's power by clicking on the 4 different crystals.",
    category: ["mySQL", "react.js"],
  },
];

export default data_projects;
