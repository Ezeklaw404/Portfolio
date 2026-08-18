// ─────────────────────────────────────────────────────────────
// ADD YOUR PROJECTS HERE.
// To add a new project, copy an object below, paste it into the
// array, and edit the fields. No other files need to change —
// the Projects section renders this list automatically.
//
// Fields:
//   title       - project name
//   description - 1-3 sentences on what it does / why it matters
//   stack       - array of tech used (shows as tags)
//   status      - "shipped" | "in-progress" | "archived"
//   github      - link to repo (or "" to hide the button)
//   live        - link to live demo (or "" to hide the button)
//   featured    - true puts it in the larger card style
//   image       - import your image at the top of this file and reference it here
// ─────────────────────────────────────────────────────────────



import galaga from     "../assets/images/projects/galaga.png";
import cthulhuCards from "../assets/images/projects/matching-hp.png";
import digitRecognizer from      "../assets/images/projects/digitRecognizer.png";
import websiteLauncher from       "../assets/images/projects/mineSweeper.png";
import pong from       "../assets/images/projects/pong.png";
import notesPlusPlus from      "../assets/images/projects/notes++.png";
import gameOfLife from "../assets/images/projects/GoL.gif";
import kitchenAlchemy from    "../assets/images/projects/kitchen-alchemy.png";
import puzzleTD from         "../assets/images/projects/puzzle-td.png";


export const projects = [
  {
    title: 'Kitchen Alchemy',
    description:
      'A mobile app that tracks pantry and fridge inventory to dynamically filter and recommend recipes based on what you have on hand. Features barcode scanning and automated shopping list generation to reduce food waste and simplify meal planning.',
    stack: ['Flutter', 'Dart', 'PostgreSQL', 'Firebase'],
    status: 'built',
    github: 'https://github.com/Ezeklaw404/Kitchen-Alchemy',
    live: '',
    featured: true,
    portrait: true,
    image: kitchenAlchemy,
  },
  {
    title: 'PuzzleTD',
    description:
      'A tower defense game where players strategically place shape-based towers to stop waves of enemies across multiple levels. Encourages tactical planning and replayability through varied tower types and enemy patterns.',
    stack: ['Unity', 'C#'],
    status: 'built',
    github: 'https://github.com/Ezeklaw404/PuzzleTD',
    live: '',
    featured: false,
    image: puzzleTD,
  },
  {
    title: 'Galaga',
    description:
      'A simplified Galaga clone where you fly through space shooting alien ships while dodging their attacks. Endless gameplay with a persistent local high score.',
    stack: ['Java', 'JPanel'],
    status: 'prototype',
    github: 'https://github.com/Ezeklaw404/Shooter',
    live: '',
    featured: false,
    image: galaga,
  },
  {
    title: 'Notes++',
    description:
      'A simple and clean notes app that lets users create, edit, and delete notes to keep everything organized.',
    stack: ['C#', '.NET MAUI', 'Blazor Hybrid', 'JavaScript', 'HTML', 'CSS'],
    status: 'side project',
    github: 'https://github.com/tristancable/NotesPlusPlus',
    live: '',
    featured: false,
    image: notesPlusPlus,
  },
  {
    title: "Conway's Game of Life",
    description:
      "An interactive simulation of Conway's Game of Life — a grid-based cellular automaton where cells live, die, or reproduce based on their neighbors. Simple rules produce surprisingly complex emergent behavior.",
    stack: ['C#', '.NET MAUI'],
    status: 'experiment',
    github: 'https://github.com/Ezeklaw404/GameOfLife',
    live: '',
    featured: false,
    image: gameOfLife,
  },
  {
    title: 'Digit Recognizer',
    description:
      'Draw any digit on a canvas and a trained AI model identifies it in real time.',
    stack: ['C#', 'TensorFlow.NET'],
    status: 'experiment',
    github: 'https://github.com/tristancable/Biscuit',
    live: '',
    featured: false,
    image: digitRecognizer,
  },
  {
    title: 'Website Game Launcher',
    description:
      'A sleek, web-based platform featuring a variety of built-in mini-games. Designed with clean aesthetics and simplicity in mind for an intuitive browser gaming experience.',
    stack: ['EJS', 'JavaScript', 'CSS', 'HTML'],
    status: 'side project',
    github: 'https://github.com/tristancable/WebsiteGameLauncher',
    live: '',
    featured: false,
    image: websiteLauncher,
  },
  {
    title: 'Cthulhu Card Game',
    description:
      'A four-player matching card game where players flip two cards at a time to find pairs, wrapped in the eerie theme of classic H.P. Lovecraft horrors.',
    stack: ['Java', 'Android Studio'],
    status: 'prototype',
    github: 'https://github.com/Ezeklaw404/MatchingCardGameHP',
    live: '',
    featured: false,
    portrait: true,
    image: cthulhuCards,
  },
  {
    title: 'Pong',
    description:
      'A two-player Pong clone with keyboard controls, basic sound effects, and a classic minimalist layout.',
    stack: ['Java', 'JPanel'],
    status: 'prototype',
    github: 'https://github.com/Ezeklaw404/pong',
    live: '',
    featured: false,
    image: pong,
  },
]
