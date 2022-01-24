import webesushi from "../assets/projects/webesushi.png";
import covid from "../assets/projects/covid.jpg";
import jin from "../assets/projects/jin.png";
import liri from "../assets/projects/liri.png";
import bamazon from "../assets/projects/bamazon.png";
import spotify from "../assets/projects/spotify.png";
import clicky from "../assets/projects/clicky.jpg";
import giphy from "../assets/projects/giphy.png";
import crystal from "../assets/projects/crystalcollector.png";

export const projects = [
  {
    id: 'projects/webesushi',
    title: "Webesushi.io",
    headline: "One stop for all sushi enthusiasts",
    desc: "A web-app created using React with the mobile-first design approach and Redux for state management through the app. Firebase is being utilized to store information about users, products liked, and user authentication.",
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Redux",
      "Express",
      "Firebase",
      "Styled-Components",
    ],
    images: webesushi,
    github: "https://github.com/wbenarto/WB_Landing/tree/master/landing",
    deployed_url: "https://www.webesushi.io",
  },
  {
    id: 'projects/jinchoi',
    title: "JinChoiVisuals",
    headline: "Photography Portfolio",
    desc: "Single Page Application using Next.js framework incorporating SASS as CSS preprocessor. Using Framer Motion to create animation effects on page load.",
    tech: ["HTML", "SCSS", "Typescript", "React", "Next.js", "Framer Motion"],
    images: jin,
    github: "https://github.com/wbenarto/jin",
    deployed_url: "https://jin-six.vercel.app/",
  },
  {
    id: 'projects/spotifyclone',
    title: "Spotify Clone",
    headline:
      "Fetch Spotify Playlists + Control Music playback with the Spotify API",
    desc: "Spotify clone built in Next.js that allows user to fetch playlists and control media playback using Spotify API. NextAuth to persist user's logged in state and refresh oAuth JWT tokens. Tailwind CSS is utilized to build reusable components that are fully responsive. Next.js 12 Middleware used to handle authenticated user access. Recoil library is used for state management in the spotify clone app.",
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Next.js",
      "NextAuth",
      "Next.js Middleware",
      "Tailwind CSS",
      "Recoil",
    ],
    images: spotify,
    github: "https://github.com/wbenarto/sp-clone",
    deployed_url: "https://sp-clone.vercel.app/",
  },
  {
    id: 'projects/covid19',
    title: "Covid19 Tracker",
    headline: "Live tracking of Covid19 Data",
    desc: "Utilizing covid.mathdro.id/api to display daily data of covid infection around the world. This app was built using React and is going to fetch the live data from API using Async/Await syntax.",
    tech: ["HTML", "CSS", "Javascript", "React", "API", "Chartjs"],
    images: covid,
    github: "https://github.com/wbenarto/COVID19_Tracker",
    deployed_url: "https://wbenarto.github.io/COVID19_Tracker/",
  },
  {
    id:'projects/liri',
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
    id: 'projects/bamazon',
    title: "Bamazon",
    headline: "Sales and inventory management system",
    desc: "Node.js app that allows allows management to add, update and delete inventory using CRUD methodology to update MySql database. Data from MySql then parsed into table-cli to improve clarity.",
    tech: ["Node.js", "MySql", "Inquirer NPM", "Table-cli"],
    images: bamazon,
    github: "https://github.com/wbenarto/bamazon",
    deployed_url: "https://youtu.be/vT5ERASIs3M",
  },
  // {
  //   title: "Street Fighters Clicky Game",
  //   headline: "React Web-App Memory Game",
  //   desc: "Using React state management to keep track of images that has been selected, current high score, and top score. ",
  //   tech: ["Javascript", "React", "HTML", "CSS"],
  //   images: clicky,
  //   github: "https://github.com/wbenarto/Clicky_Game",
  //   deployed_url: "https://evening-hamlet-61362.herokuapp.com/",
  // },
  // {
  //   title: "Giphy - NBA Players Edition",
  //   headline: "Giphy Generator",
  //   desc: "Using Ajax function to perform asynchronous HTTP request to Giphy API and lookup players' gifs based on input from user.",
  //   tech: ["Javascript", "HTML", "CSS", "Giphy API", "jQuery"],
  //   images: giphy,
  //   github: "https://github.com/wbenarto/Giphy",
  //   deployed_url: "https://wbenarto.github.io/Giphy/",
  // },
  // {
  //   title: "Crystal Collector",
  //   headline: "Numbers Memorization Game",
  //   desc: "Simple number comparison game created using Javascript. Players have to try and match Thanos' crystal numbers.",
  //   tech: ["Javascript", "HTML", "CSS"],
  //   images: crystal,
  //   github: "https://github.com/wbenarto/unit-4-game",
  //   deployed_url: "https://wbenarto.github.io/unit-4-game/",
  // },
];
