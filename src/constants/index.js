import {
    react,
    tailwind, 
    threejs,
    logo
} from "../assets";

const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "section",
        title: "Section",
    },
    {
        id: "contact",
        title: "Contact",
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