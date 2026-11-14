export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  education: {
    degree: string;
    institution: string;
    location: string;
    year: string;
    expectedGraduation: string;
  };
  location: string;
  contact: {
    email: string;
    linkedIn: string;
    github: string;
  };
  certification: {
    title: string;
    issuer?: string;
    dateAwarded?: string;
    validity?: string;
    verificationUrl?: string;
    verificationCode?: string;
    note?: string;
  };
  interests: string[];
}

export const profileData: ProfileData = {
  name: "Vishnu G Pai",
  title: "Computer Science & Engineering Student | Aspiring Full-Stack Developer",
  bio: "Second-year Computer Science and Engineering student at FISAT passionate about software engineering, practical web application development, and solving real-world challenges through code.",
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Federal Institute of Science and Technology (FISAT)",
    location: "Angamaly, Kerala, India",
    year: "Second Year",
    expectedGraduation: "2029",
  },
  location: "Kerala, India",
  contact: {
    email: "vishnugpai007@gmail.com",
    linkedIn: "https://www.linkedin.com/in/vishnu-g-pai-b7b031374",
    github: "https://github.com/vishnugpai007",
  },
  certification: {
    title: "HTML5 Application Development",
    issuer: "Certiport, a Pearson VUE business (Information Technology Specialist)",
    dateAwarded: "January 16, 2026",
    validity: "5 years from date of issue",
    verificationUrl: "https://verify.certiport.com",
    verificationCode: "ybmT-DkTL",
    note: "Official certification in HTML5 Application Development fundamentals verified via Certiport.",
  },
  interests: [
    "Full-Stack Development",
    "Software Engineering",
    "Application Development",
    "Problem Solving",
    "Web Development",
    "Entrepreneurship",
  ],
};
