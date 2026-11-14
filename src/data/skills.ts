export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core languages learned and used across coursework and algorithmic problem solving.",
    skills: ["C", "Python", "Java"],
  },
  {
    category: "Frontend Development",
    description: "Building structured, responsive, and interactive user interfaces.",
    skills: ["HTML5", "CSS3", "JavaScript", "AngularJS"],
  },
  {
    category: "Database & Storage",
    description: "Relational database concepts and structured query operations.",
    skills: ["SQL"],
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
