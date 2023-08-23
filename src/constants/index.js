import {
    react,
    tailwind, 
    threejs,
    logo
} from "../assets";

const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "searcher",
        title: "Searcher",
    },
];

const tech = [
    {
        title: "React JS",
        icon: react,
    },
    {
        title: "Three JS",
        icon: threejs,
    },
    {
        title: "TailwindCSS",
        icon: tailwind,
    },
    {
        title: "OMDb API",
        icon: logo,
    },
];

export { tech, navLinks };