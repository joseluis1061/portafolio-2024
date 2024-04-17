import { Projects } from "src/app/models/project.model"
export const PROJECTS_DATA: Projects[] = [
  {
    id: 0,
    name: 'Fanta',
    github: 'https://github.com/joseluis1061/FantaAngular',
    web: 'https://fantascroll.netlify.app',
    resume: 'Landing page con animaciones en GSAP. Diseño centrado en Desktop con movimiento de elementos para una pagina promocional. Combina la manipulación de elementos y la reactividad',
    type: 'landing',
    cover: '../../../../../assets/svg/projects/project-fanta.svg',
    technologies: ['Angular', 'GSAP', 'TypeScript']
  },
  {
    id: 1,
    name: 'Trello Clone',
    github: 'https://github.com/joseluis1061/trello-clone',
    web: 'https://trellopair.netlify.app/',
    resume: 'Clone de trello, cuenta con autenticación de usuarios, registro, rutas protegidas, crear boards y drag and drop de lista de tareas',
    type: 'aplication',
    cover: '../../../../../assets/svg/projects/trelloApp.svg',
    technologies: ['Html', 'CSS', 'Java Scrip']
  },
  {
    id: 2,
    name: 'Guitar LA',
    github: 'https://github.com/joseluis1061/guitar-la',
    web: 'https://bestguitar.netlify.app/',
    resume: 'E comerce para compra de guitarras. Desarrollado con React',
    type: 'landing',
    cover: '../../../../../assets/svg/projects/guitarLa.svg',
    technologies: ['React']
  },
  {
    id: 3,
    name: 'Wordle',
    github: 'https://github.com/joseluis1061/wordle',
    web: 'https://visionary-blancmange-e764a6.netlify.app/',
    resume: 'Pon tu mente a prueba adivina la palabra oculta en 6 intentos. Juego desarrollado con las tecnologias base de la web Html, Css y Java Script',
    type: 'game',
    cover: '../../../../../assets/svg/projects/wordle.svg',
    technologies: ['Html', 'CSS', 'Java Scrip']
  },
  // {
  //   id: 4,
  //   name: 'Lamborgini',
  //   github: 'https://github.com/joseluis1061/lamborgini_three_js',
  //   web: 'https://lamborgini-threejs.netlify.app/',
  //   resume: 'Landing page con carga de modelos 3D usando GSAP, control de movimiento mediante GSAP y Angular como framework frontend',
  //   type: 'landing',
  //   cover: '../../../../../assets/svg/projects/project-fanta.svg',
  //   technologies: ['Angular', 'GSAP', 'Three JS']
  // },

]
