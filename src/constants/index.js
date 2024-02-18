import { meta, shopify, starbucks, tesla } from "../assets/images";
import vermeg from "../assets/images/vermeg.png";
import charles from "../assets/images/CharlesBaudelaire.png";
import tadeco from "../assets/images/TadecoGroup.jpg";
import ExpressDisplay from "../assets/images/ExpressDisplay.jpg";
import tak from "../assets/images/tak.jpg";


import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    QR
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Java Developer",
        company_name: "Vermeg for banking and insurance software",
        icon: vermeg,
        iconBg: "black",
        date: "January 2024 - February 2024",
        points: [
            "Developing web applications using Java and other related technologies.",
            "Collaborating with cross-functional teams including Business analysts, product managers, and other developers to create high-quality products.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Trainee: MERN developer",
        company_name: "Charles Baudelaire",
        icon: charles,
        iconBg: "blue",
        date: "February 2023 - Jun 2023",
        points: [
            "Full stack web platform that connects buyers of bio pistachio and almond to customers.",
            "integrates a tracking System.",
            "assuring coding best practices.",
            "Hight code quality.",
        ],
    },
    {
        title: "Trainee: MERN developer",
        company_name: "Tadeco Group",
        icon: tadeco,
        iconBg: "blue",
        date: "Jan 2023 - February 2023",
        points: [
            "full-stack website for hotel room reservations.",
            "handling state with react toolkit.",
            "Requirement Analysis.",
            "API Design and Git Best Practices.",
        ],
    },
    {
        title: "Trainee: mobile developer",
        company_name: "Express Display",
        icon: ExpressDisplay,
        iconBg: "orange",
        date: "July 2022 - August 2022",
        points: [
            "Front-end mobile application of ticket reservation using Expo React Native.",
            "Authentication system.",
            "ensures the delivery of the mobile app to the customer.",
        ],
    },
    {
        title: "Trainee: Java EE developer",
        company_name: "Takyour’s Connect",
        icon: tak,
        iconBg: "#DAA520",
        date: "Jan 2022 - February 2022",
        points: [
            "development of client management system Using Java EE.",
            "professional life integration.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/saadliwissem/saadliwissem',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/saadli-wissem-15338622a/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: QR,
        theme: 'btn-back-pink',
        name: 'QR code Generator',
        description: 'A web app that from a url enable you to create an QR code.',
        link: 'https://github.com/saadliwissem/QR-code-generator',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Contact Manager app',
        description: 'Developed a MEAN stack web application for managing contacts.',
        link: 'https://github.com/saadliwissem/Contact-Manager',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Admin Quiz Generator',
        description: 'App that enable department director to create Quiz for students using MEAN stack.',
        link: 'https://github.com/saadliwissem/Quiz',
    }
];