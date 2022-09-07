import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";
import {SiAzuredevops,SiJenkins,SiApachetomcat,SiMicrosoftazure} from "react-icons/si";
import {FaAws} from "react-icons/fa";
import {CgServer} from "react-icons/cg";

export const services: Service[] = [
  {
    Icon: SiAzuredevops,
    title: "DevOps",
    about: " 3+ years of experience as a DevOps Engineer involved in <b>System Administration, Automation, and Cloud Computing</b>.",
  },
  {
    Icon: CgServer,
    title: "Server Administration",
    about: " Experience in <b>Server build,Migration,Troubleshooting,Security, Disaster Recovery, Performance Monitoring and Fine-tuning.</b>",
  },
  {
    Icon: FaAws,
    title: "Amazon Web Services",
    about:
      "Experience in AWS including <b>EC2,ELB,S3,RDS,Lambda,Cloud formation</b> for deployment and automation of web applications.",
  },
  {
    Icon: SiMicrosoftazure,
    title: "Microsoft Azure",
    about: "Building and configuring <b>Azure infrastructure</b> to meet the client's needs while leveraging <b>Azure templates & Azure DevOps tools.</b>",
  },
  {
    Icon: SiJenkins,
    title: "CI/CD",
    about:
      "Experience with CI/CD using various Tools like <b>Jenkins, Puppet, Chef, Ansible, Hudson, and Bamboo.</b>",
  },
  {
    Icon: SiApachetomcat,
    title: "Web Application Administration",
    about:
      "Experience in administering applications to WebSphere,Tomcat,JBOSS,and OpenShift environment",
  },
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Springboot </b> & other popular frameworks",
  },
  
  
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Svelte",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Groovy",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },

  {
    Icon: BsCircleFill,
    name: "Linux",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Maven",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Jenkins",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Ansible",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Terraform",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Nagios",
    level: "80",
  },

];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Github",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "AWS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Azure",
    level: "95",
  },

  {
    Icon: BsCircleFill,
    name: "Google Cloud Platform",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Docker",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Kubernetes",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Linux",
    level: "45",
  },

  {
    Icon: BsCircleFill,
    name: "SonarQube",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Nexus",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Helm Chart",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Splunk",
    level: "45",
  },
];

export const projects: IProject[] = [
  { 
    id:1,
    name: "COVID-19 Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id:2,
    name: "Algorithm Visualizer",
    image_path: "/images/algoVisual.png",
    deployed_url: "https://visual-algorithm.web.app/",
    github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
    category: ["react"],
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "firebase", "Framer Motion"],
  },

  {
    id:3,
    name: "Dev Talks",
    image_path: "/images/dev.jpg",
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/Dey-Sumit/Dev-talks",
    category: ["node", "mongo", "react"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    id:4,
    name: "Realtime Chat App",
    image_path: "/images/chatapp.jpg",
    deployed_url: "https://sumit-chat.netlify.app/",
    github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
    category: ["node", "react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    id:5,
    name: "Tweeter Clone",
    image_path: "/images/tweetme.jpg",
    deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
    github_url: "https://github.com/Dey-Sumit/tweetme",
    category: ["django", "react"],
    description:
      "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    key_techs: ["React", "Django", "Django REST API"],
  },

  {
    id:6,
    name: "Color Classification using tf.js",
    image_path: "/images/color.jpg",
    deployed_url: "!#",
    github_url: "https://github.com/Dey-Sumit/color-classification",
    category: ["express"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
  {
    id:7,
    name: "YouTube using YouTube ",
    image_path: "/images/youtubeClone.png",
    deployed_url: "https://not-utube.web.app/",
    github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
    category: ["express"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    id:8,
    name: "Football App",
    image_path: "/images/football.png",
    deployed_url: "https://o-my-goal.web.app/",
    github_url: "https://github.com/Dey-Sumit/football-app",
    category: ["react"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
];