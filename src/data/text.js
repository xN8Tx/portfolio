import school from '../assets/school.webp';
import architecture from '../assets/architecture.webp';
import weather from '../assets/weather.webp';
import utils from '../assets/utils.webp';
import studio from '../assets/studio.webp';

// SEE
const seeEN = 'See';
const seeRU = 'Посмотреть';

// demo
const demoEN = 'demo';
const demoRU = 'демо';

// code
const codeEN = 'code';
const codeRU = 'код';

// CONTACT
const contactEN = 'Contact';
const contactRU = 'Связаться';

// ANCHORS
const anchorsEN = [
  {
    name: 'About me',
    href: '#about',
  },
  {
    name: 'Skills',
    href: '#skills',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
];
const anchorsRU = [
  {
    name: 'Обо мне',
    href: '#about',
  },
  {
    name: 'Навыки',
    href: '#skills',
  },
  {
    name: 'Проекты',
    href: '#projects',
  },
];

// LINKS
const linksEN = [
  {
    name: 'Github',
    href: 'https://github.com/xN8Tx',
  },
  {
    name: 'Telegram',
    href: 'https://t.me/xN8Tx',
  },
];
const linksRU = [
  {
    name: 'Гитхаб',
    href: 'https://github.com/xN8Tx',
  },
  {
    name: 'Телеграм',
    href: 'https://t.me/xN8Tx',
  },
];

// PROJECTS
const projectRU = 'Проект';
const projectEN = 'Project';

const projectsRU = [
  {
    name: 'Онлайн школа',
    skills: ['React', 'RTK', 'ExpressJS', 'NodeJS', 'PostgreSQL', 'JWT'],
    github: 'https://github.com/xN8Tx/start-rsl',
    link: 'http://217.71.129.139:5408',
    image: school,
  },
  {
    name: 'Архитектурная cтудия',
    skills: ['React', 'Zustand', 'TypeScript'],
    github: 'https://github.com/xN8Tx/digital-project',
    link: 'https://digital-project-rho.vercel.app',
    image: architecture,
  },
  {
    name: 'Приложение погоды',
    skills: ['React'],
    github: 'https://github.com/xN8Tx/weather-app',
    link: 'https://shteyn-weather.netlify.app/',
    image: weather,
  },
  {
    name: 'Веб студия',
    skills: ['HTML', 'SCSS', 'GSAP', 'GULP'],
    github: 'https://github.com/xN8Tx/Yudaev',
    link: 'http://217.71.129.139:5408',
    image: studio,
  },
  {
    name: 'Студия посуды',
    skills: ['HTML', 'SCSS', 'GSAP', 'LocomotiveScroll', 'GULP'],
    github: 'https://github.com/xN8Tx/Tom-crew',
    link: 'https://gregarious-longma-f7da78.netlify.app/',
    image: utils,
  },
];

const projectsEN = [
  {
    name: 'Online school',
    skills: ['React', 'RTK', 'ExpressJS', 'NodeJS', 'PostgreSQL', 'JWT'],
    github: 'https://github.com/xN8Tx/start-rsl',
    link: 'http://217.71.129.139:5408',
    image: school,
  },
  {
    name: 'Architecture studio',
    skills: ['React', 'Zustand', 'TypeScript'],
    github: 'https://github.com/xN8Tx/digital-project',
    link: 'https://digital-project-rho.vercel.app',
    image: architecture,
  },
  {
    name: 'Weather app',
    skills: ['React'],
    github: 'https://github.com/xN8Tx/weather-app',
    link: 'https://shteyn-weather.netlify.app/',
    image: weather,
  },
  {
    name: 'Web studio',
    skills: ['HTML', 'SCSS', 'GSAP', 'GULP'],
    github: 'https://github.com/xN8Tx/Yudaev',
    link: 'http://217.71.129.139:5408',
    image: studio,
  },
  {
    name: 'Utils studio',
    skills: ['HTML', 'SCSS', 'GSAP', 'LocomotiveScroll', 'GULP'],
    github: 'https://github.com/xN8Tx/Tom-crew',
    link: 'https://gregarious-longma-f7da78.netlify.app/',
    image: utils,
  },
];

// SKILLS
const skillsRU = 'Навыки';
const skillsEN = 'Skills';

const skills = [
  'HTML5, CSS, SCSS',
  'JS, TS',
  'React',
  'Redux, RTK, Zustand',
  'NodeJS',
  'Express',
  'PostgreSQL',
  'Docker',
  'Figma',
  'Git',
];

// ABOUT
const aboutRU = 'Обо мне';
const aboutEN = 'About me';

const aboutTextEN =
  "I'm a 19 y.o  frontend developer living in Russia, Novosibirsk. I have been doing that year and I devote most of my time self-improvement and develop my own projects. My main goal is to get new knowledge in programming. Deepen the knowledge already gained.";
const aboutTextRU =
  'Я 19-летний фронтенд-разработчик, живу в России, Новосибирск. Занимаюсь разработкой уже год и большую часть своего времени посвящаю самосовершенствованию и созданию собственных проектов. Моя основная цель - получение новых знаний в программирование. Углубляться в уже полученные знания.';

const aboutButtonRU = 'Проекты';
const aboutButtonEN = 'Projects';

// FINAL TEXT
const textRU = {
  anchors: anchorsRU,
  links: linksRU,
  about: aboutRU,
  aboutText: aboutTextRU,
  aboutButton: aboutButtonRU,
  skills: skillsRU,
  skillsText: skills,
  project: projectRU,
  see: seeRU,
  code: codeRU,
  contact: contactRU,
  projects: projectsRU,
  demo: demoRU,
};

const textEN = {
  anchors: anchorsEN,
  links: linksEN,
  about: aboutEN,
  aboutText: aboutTextEN,
  aboutButton: aboutButtonEN,
  skills: skillsEN,
  skillsText: skills,
  project: projectEN,
  see: seeEN,
  code: codeEN,
  contact: contactEN,
  projects: projectsEN,
  demo: demoEN,
};

export { textEN, textRU };
