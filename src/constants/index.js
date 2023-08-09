import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  dev,
  tripguide,
} from "../assets";

import mappoptimist from "../assets/mappoptimist.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "profiles",
    title: "Profiles",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Competitive Programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "MappOptimist- Freelance",
    description:
      "Completely responsive static wepage smooth scroll motion.Integrated Nodemailer for smooth communication via email on the website.Collaborated closely with the client to deliver a visually appealing and user-friendly design.Implemented dynamic content rendering based on carousel selections, enhancing user experience",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Nodemailer",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mappoptimist,
    source_code_link: "https://www.mappoptimist.com/",
  },
  {
    name: "Shopping Cart",
    description:
      "Shopping Cart Front-end design using React/Redux.It is website contain multiple items on its Home page and we can add them into the our cart.In cart we can see our selected items and also total items with total amount. It is fully responsive and Designing is done using Tailwind CSS",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/armaansingh24/Shopping-Cart",
  },
  {
    name: "Password Generator",
    description:
      "Password Generator is website which generates a random password. we can also copy the password on our clipboard and paste wherever we want. It generates the password based on the selection given by the user. It also tells the strength of the password generated.",
    tags: [
      {
        name: "HTLM",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/armaansingh24/Password-Generator",
  },
  {
    name: "Dev Detective",
    description:
      "Dev Detective is a website in which we can find the information about the developer by searching the username of the developer on the GitHub.When we search for the username it gives shows the GitHub profile information.It also have the feature of changing into dark mode and light mode.",
    tags: [
      {
        name: "HTLM",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: dev,
    source_code_link: "https://github.com/armaansingh24/Dev-Detective",
  },
];

export { services, technologies, projects };
