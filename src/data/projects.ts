import campusfixImg from '../assets/images/campusfix.png';

export interface ProjectItem {
  id: string;
  projectNumber: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image?: string;
  imageAlt?: string;
  objective?: string;
  problemStatement?: string;
  proposedSolution?: string;
  features: string[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    tools?: string[];
  };
  tags: string[];
  challengesAndLearnings: string[];
  githubUrl: string;
  liveUrl?: string; // Real verified URL only; otherwise omitted
  isFlagship?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "campusfix",
    projectNumber: "01",
    title: "CampusFix",
    subtitle: "Campus Complaint & Maintenance Management Platform",
    category: "Full-Stack Web Application",
    isFlagship: true,
    image: campusfixImg,
    imageAlt: "CampusFix campus maintenance portal dashboard screenshot showing issue reporting options and login buttons",
    description:
      "CampusFix is a campus-focused complaint management platform designed to make reporting and resolving infrastructure-related issues easier for students and college staff. Students can report problems within their college campus and hostels, including Wi-Fi connectivity issues, plumbing problems, smart board malfunctions and other maintenance-related concerns. Staff members and hostel administrators can view submitted complaints, respond to them and update their progress.",
    objective:
      "Making campus maintenance more organized, transparent and accessible through a centralized digital platform.",
    problemStatement:
      "In colleges and hostels, infrastructure and utility issues (such as Wi-Fi disruptions, plumbing issues, electrical breakdowns, and smart board failures) are often reported via informal word-of-mouth or physical logbooks, causing lost requests, lack of progress tracking, and communication delays.",
    proposedSolution:
      "A centralized role-based web platform connecting students, maintenance staff, and hostel authorities with geotagged issue reporting, image evidence uploads, priority upvoting, and end-to-end resolution status tracking.",
    features: [
      "Student complaint submission with location, categories, and image upload for evidence",
      "Campus & hostel issue reporting (Wi-Fi, plumbing, smart boards, electrical, maintenance)",
      "Role-based authentication & dashboards (Student, Staff, Host)",
      "Status tracking with progression states (Pending, In Progress, Resolved)",
      "Issue upvoting to bubble up urgent collective infrastructure concerns",
      "Dedicated confidential reporting channel for hostel management",
      "Seamless dark/light theme system and responsive modern UI",
    ],
    techStack: {
      frontend: [
        "React 18",
        "Vite 5",
        "Tailwind CSS 3",
        "React Hook Form",
        "Zod",
        "Axios",
        "Lucide React",
      ],
      backend: [
        "Node.js",
        "Express",
        "JWT (Role-embedded access tokens)",
        "Cloudinary",
        "Multer",
        "Helmet",
      ],
      database: ["MongoDB", "Mongoose"],
    },
    tags: ["React 18", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    challengesAndLearnings: [
      "Architecting a 3-role permission hierarchy (Student, Staff, Host) with token-based access controls.",
      "Handling multipart media uploads with Multer and securely streaming evidence images to Cloudinary.",
      "Designing relational-style document schemas in Mongoose for ticket lifecycles and resolution audit trails.",
    ],
    githubUrl: "https://github.com/vishnugpai007/CampusFix",
    // No verified active production deployment URL in repository metadata -> honest: no fake demo button
  },
  {
    id: "firstprojectangularjs",
    projectNumber: "02",
    title: "First Project – AngularJS",
    subtitle: "Interactive Bike Catalog & Purchase Platform",
    category: "Frontend Web Development",
    isFlagship: false,
    description:
      "A beginner-level web development project created to explore frontend development and gain practical experience with AngularJS.",
    objective:
      "Gaining hands-on familiarity with dynamic client-side templating, MVC architecture, two-way data binding, and state management.",
    problemStatement:
      "Stepping beyond static HTML and CSS to understand how real-time client-side scripting powers interactive user interfaces, product filtering, and shopping basket calculations.",
    proposedSolution:
      "A responsive bike showroom interface with instant search filtering, model-driven catalog display, discount percentage computations, and an interactive cart summary built with AngularJS.",
    features: [
      "Dynamic catalog rendering with model-driven bike inventory",
      "Real-time instant keyword search filtering via ng-model",
      "Interactive cart addition, discount computations, and total price calculation",
      "Structured MVC design using angular.module and BikeController with $scope",
      "Clean CSS styling with responsive flex and grid layouts",
    ],
    techStack: {
      frontend: ["HTML5", "CSS3", "JavaScript", "AngularJS 1.8"],
    },
    tags: ["AngularJS", "JavaScript", "HTML5", "CSS3"],
    challengesAndLearnings: [
      "Understanding the $scope lifecycle, two-way data binding, and directives (ng-repeat, ng-model, ng-click).",
      "Implementing real-time client-side array search and mathematical calculations without server reloads.",
      "Configuring and deploying a web app to GitHub Pages.",
    ],
    githubUrl: "https://github.com/vishnugpai007/firstprojectangularjs",
    liveUrl: "https://vishnugpai007.github.io/firstprojectangularjs/", // Verified active GitHub Pages site
  },
];
