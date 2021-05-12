import webesushi from "../assets/projects/webesushi.jpg";
import covid from "../assets/projects/covid.jpg";
import webe from "../assets/projects/webe.jpg";

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
];
