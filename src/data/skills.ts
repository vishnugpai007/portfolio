export interface SkillItem {
  name: string;
  iconId: string;
  context: string;
}

export interface SkillCategory {
  category: string;
  tag: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    tag: "01 // CORE",
    description: "Foundational programming languages used across coursework, algorithmic thinking, and problem solving.",
    skills: [
      {
        name: "C",
        iconId: "c",
        context: "Low-level fundamentals, memory concepts, pointer arithmetic, and procedural structure.",
      },
      {
        name: "Python",
        iconId: "python",
        context: "Object-oriented scripting, algorithmic logic, problem solving, and automation experiments.",
      },
      {
        name: "Java",
        iconId: "java",
        context: "OOP paradigms, class hierarchies, structured design patterns, and academic coursework.",
      },
    ],
  },
  {
    category: "Frontend Development",
    tag: "02 // CLIENT",
    description: "Building responsive layouts, semantic document architecture, and dynamic user interfaces.",
    skills: [
      {
        name: "HTML5",
        iconId: "html5",
        context: "Semantic layout markup, accessibility landmarks, forms, and certified fundamentals.",
      },
      {
        name: "CSS3",
        iconId: "css3",
        context: "Responsive design, Flexbox, Grid, custom styling, and layout aesthetics.",
      },
      {
        name: "JavaScript",
        iconId: "javascript",
        context: "ES6+ syntax, asynchronous programming, DOM manipulation, and interactive client logic.",
      },
      {
        name: "AngularJS",
        iconId: "angularjs",
        context: "Client-side MVC framework, two-way data binding, and dynamic templating exploration.",
      },
    ],
  },
  {
    category: "Database & Storage",
    tag: "03 // DATA",
    description: "Relational data structuring, query operations, and persistent storage fundamentals.",
    skills: [
      {
        name: "SQL",
        iconId: "sql",
        context: "Relational database concepts, schema definitions, and structured querying.",
      },
    ],
  },
];

export const interestAreas: { title: string; description: string }[] = [
  {
    title: "Full-Stack Development",
    description: "Connecting responsive frontend client interfaces with reliable backend APIs and persistent databases.",
  },
  {
    title: "Software Engineering",
    description: "Writing clean, maintainable, and modular code following structured engineering practices.",
  },
  {
    title: "Application Development",
    description: "Transforming real-world everyday problems into functional, practical software applications.",
  },
  {
    title: "Problem Solving",
    description: "Analyzing computational challenges, breaking down logic, and developing optimized solutions.",
  },
];

export const focusAreas: string[] = [
  "Full-Stack Development",
  "Software Engineering",
  "Application Development",
  "Problem Solving",
  "Web Development",
  "Entrepreneurship",
];
