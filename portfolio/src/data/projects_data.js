import webesushi from "../assets/projects/webesushi.jpg";
import covid from "../assets/projects/covid.jpg";
import webe from "../assets/projects/webe.jpg";
import liri from "../assets/projects/liri.png";
import bamazon from "../assets/projects/bamazon.png";
import clicky from "../assets/projects/clicky.jpg";
import giphy from "../assets/projects/giphy.png";
import crystal from "../assets/projects/crystalcollector.png";

export const projects = [
  {
    title: "Webesushi.io",
    headline: "One stop for all sushi enthusiasts",
    desc: "A web app created to share my love and passion for sushi. This site provides recipes, in-depth sushi-how-to guides, and information about sustainable sushi ingredients.",
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Redux",
      "Express",
      "Firebase",
    ],
    images: webesushi,
    github: "https://github.com/wbenarto/WB_Landing/tree/master/landing",
    deployed_url: "https://www.webesushi.io",
  },
  {
    title: "Webe Sushi",
    headline: "E-commerce website for Pick Up and Drop Off sushi orders.",
    desc: "Webe sushi is a Full-stack web application for a Pickup/Togo sushi restaurant featuring sushi made by me.",
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Redux",
      "Node",
      "Express",
      "MongoDB",
    ],
    images: webe,
    github: "https://github.com/wbenarto/Webe_Sushi",
    deployed_url: "https://polar-cliffs-38995.herokuapp.com/",
  },
  {
    title: "Covid19 Tracker",
    headline: "Live tracking of Covid19 Data",
    desc: "Utilizing covid.mathdro.id/api to display daily data of covid infection around the world. This app was built using React and is going to fetch the live data from API using Async/Await syntax.",
    tech: ["HTML", "CSS", "Javascript", "React", "API", "Chartjs"],
    images: covid,
    github: "https://github.com/wbenarto/COVID19_Tracker",
    deployed_url: "https://wbenarto.github.io/COVID19_Tracker/",
  },
  {
    title: "LIRI-Node-App",
    headline: "Any song, movie or concerts",
    desc: "LIRI-node-app allows users to pull up information about a song, a movie, or a concert using Spotify, BandsInTown APIs and OMDb APIs via the appropriate NPM modules. LIRI uses API calls and returned JSON objects, outputting the information into log.txt using node file system.",
    tech: [
      "Node.js",
      "Axios",
      "Spotify API",
      "OMDb API",
      "Bandstown API",
      "Chartjs",
    ],
    images: liri,
    github: "https://github.com/wbenarto/LIRI-node-app",
    deployed_url: "https://youtu.be/jqz086k84K8",
  },
  {
    title: "Bamazon",
    headline: "Sales and inventory management system",
    desc: "Node.js app that allows allows management to add, update and delete inventory using CRUD methodology to update MySql database. Data from MySql then parsed into table-cli to improve clarity.",
    tech: ["Node.js", "MySql", "Inquirer NPM", "Table-cli"],
    images: bamazon,
    github: "https://github.com/wbenarto/bamazon",
    deployed_url: "https://youtu.be/vT5ERASIs3M",
  },
  {
    title: "Street Fighters Clicky Game",
    headline: "React Web-App Memory Game",
    desc: "Using React state management to keep track of images that has been selected, current high score, and top score. ",
    tech: ["Javascript", "React", "HTML", "CSS"],
    images: clicky,
    github: "https://github.com/wbenarto/Clicky_Game",
    deployed_url: "https://evening-hamlet-61362.herokuapp.com/",
  },
  {
    title: "Giphy - NBA Players Edition",
    headline: "Giphy Generator",
    desc: "Using Ajax function to perform asynchronous HTTP request to Giphy API and lookup players' gifs based on input from user.",
    tech: ["Javascript", "HTML", "CSS", "Giphy API", "jQuery"],
    images: giphy,
    github: "https://github.com/wbenarto/Giphy",
    deployed_url: "https://wbenarto.github.io/Giphy/",
  },
  {
    title: "Crystal Collector",
    headline: "Numbers Memorization Game",
    desc: "Simple number comparison game created using Javascript. Players have to try and match Thanos' crystal numbers.",
    tech: ["Javascript", "HTML", "CSS"],
    images: crystal,
    github: "https://github.com/wbenarto/unit-4-game",
    deployed_url: "https://wbenarto.github.io/unit-4-game/",
  },
];
