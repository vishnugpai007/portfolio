export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string; // Only set if a real verified live demo exists (no fake buttons)
}

export const projectsData: ProjectItem[] = [
  {
    id: "campusfix",
    title: "CampusFix",
    subtitle: "Campus Issue Reporting & Management System",
    description:
      "A platform built to streamline the reporting, tracking, and resolution of campus infrastructure and facility issues, designed to improve communication between students and administration.",
    tags: ["Web Application", "Campus Utility", "Problem Solving"],
    githubUrl: "https://github.com/vishnugpai007/CampusFix",
  },
  {
    id: "first-project-angularjs",
    title: "First Project – AngularJS",
    subtitle: "Frontend Exploration with AngularJS",
    description:
      "An exploratory web project built with AngularJS to practice dynamic client-side templating, two-way data binding, and modular frontend structure.",
    tags: ["AngularJS", "JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/vishnugpai007/firstprojectangularjs",
  },
];
