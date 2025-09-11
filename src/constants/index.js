import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },

  {
    id: "Works",
    title: "Projects",  
  },
  
];

export const services = [
  { title: "FL Studio", icon: c },
  { title: "Figma", icon: cpp },
  { title: "React", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [  
  {
    title: "AI/ML Intern",
    company_name: "EduSkill Foundation | AWS Academy | AICTE",
    icon: eduskill,
    iconBg: "#161329",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Acquired hands-on knowledge of AWS Cloud Foundation, delving into cloud infrastructure, services, and deployment.",
      "also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.",
    ],
  },
  {
    title: "Mathwork Ai Virtual Intern",
    company_name: "Mathwork | AICTE",
    icon: mathwork,
    iconBg: "#161329",
    date: "May 2023 - Sep 2023",
    points: [
      "Completed virtual internship, gaining a strong foundation in MATLAB, including data analysis and processing.",
      "Acquired practical skills in image and signal processing, including segmentation, batch processing, and spectral analysis.",
      "Developed expertise in machine learning models for clustering, classification, and regression, and customized deep learning techniques for image classification.",
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    company_name: "Edunet Foundation | IBM SkillsBuild | AICTE",
    icon: edunet,
    iconBg: "#161329",
    date: "June 2023 - July 2023",
    points: [
      "Engineered a comprehensive Mental Health Fitness Tracker ML model utilizing Python and scikit-learn.",
      "Maximized the model's performance by refining model parameters and employing ensemble methods, yielding an outstanding accuracy percentage of 98.50%.",
      "Leveraged 12 regression algorithms to attain precise outcomes in analyzing and predicting mental fitness levels across 150+ countries.",
    ],
  },
];

export const projects = [
  {
    name: "LorAstley",
    description:
      "LoRAstley is a LoRA for SDXL 1.0 that generates 1024x1024 images of Rick Astley specifically from the Never Gonna Give You Up video that can be run in ComfyUI.",
    tags: [
      { name: "AI ", color: "blue-text-gradient" },
      { name: "Machine Learning", color: "green-text-gradient" },
      { name: "ComfyUI", color: "pink-text-gradient" },
      { name: "LoRA", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://drive.google.com/file/d/1rrA42BxN8ST37wWfGWyCEqFKgU2H0Dc8/view?usp=sharing",
  },
  {
    name: "Pixel Doggo Sensor-Driven Interactive Dog Robot",
    description:
      "A sensor-driven interactive dog robot that responds to user commands and environmental stimuli, showcasing robotics and AI integration.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "Arduino", color: "green-text-gradient" },
      { name: "Robotics", color: "pink-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://www.sfu.ca/siat/showcase/spring-2024-project-showcase/iat-267-pixeldoggo.html",
  },
  {
    name: "Interference - A Unity 2D Stealth Platformer Game",
    description:
      "A 2D stealth platformer game where players navigate through levels, avoiding enemies and obstacles, using Unity's physics and animation systems.",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: "Unity", color: "green-text-gradient" },
      { name: "Game Development", color: "pink-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/skittermonster/InterferenceGame",
  },
  {
    name: "Hidden Gems",
    description:
      "A mobile application that helps users discover niche movies in their city, providing personalized recommendations based on user preferences and location.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Java Script", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/skittermonster/iat359hiddengems",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Short Filmmmmmmmmm",
    description:
      "A short film crime drama and comedy that explores the themes of revenge and justice, showcasing the journey of a protagonist",
    tags: [
      { name: "Video Editing", color: "blue-text-gradient" },
      { name: "Sound Mixing", color: "green-text-gradient" },
      { name: "Sound Recording", color: "pink-text-gradient" },
    ],

    image: skibidi,
    source_code_link: "https://youtu.be/Ca0wcVypnqY?si=DoAwfyRxj8RKss2l",
  },
];
