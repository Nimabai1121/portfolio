import { Experience, Project, Skill } from "@shared/schema";

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Druk Holding and Investments",
    role: "Intern",
    year: "2023",
    description: "Gained valuable experience in corporate operations, financial analysis, and strategic planning in Bhutan's leading investment company.",
    icon: "fas fa-building",
    color: "bg-blue-600"
  },
  {
    id: 2,
    company: "National Center for Hydrology and Meteorology",
    role: "Intern",
    year: "2024",
    description: "Applied technical skills in environmental data analysis, weather monitoring systems, and meteorological research projects.",
    icon: "fas fa-cloud-rain",
    color: "bg-blue-600"
  },
  {
    id: 3,
    company: "Fuzzy Automation",
    role: "Intern",
    year: "Summer 2024",
    description: "Hands-on experience with automation technologies, machine learning algorithms, and software development in an innovative tech environment.",
    icon: "fas fa-robot",
    color: "bg-purple-600"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.",
    techStack: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: 2,
    name: "Weather Analytics App",
    description: "Mobile application for weather data visualization and analytics with real-time updates and forecasting.",
    techStack: ["React Native", "Python", "FastAPI"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: 3,
    name: "Automation Dashboard",
    description: "Intelligent automation system with machine learning capabilities for process optimization and monitoring.",
    techStack: ["Python", "TensorFlow", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  }
];

export const SKILLS: Skill[] = [
  {
    id: 1,
    name: "HTML5",
    level: 90,
    icon: "fab fa-html5",
    color: "from-orange-400 to-red-500"
  },
  {
    id: 2,
    name: "CSS3",
    level: 85,
    icon: "fab fa-css3-alt",
    color: "from-blue-400 to-blue-600"
  },
  {
    id: 3,
    name: "JavaScript",
    level: 80,
    icon: "fab fa-js-square",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    id: 4,
    name: "React",
    level: 75,
    icon: "fab fa-react",
    color: "from-cyan-400 to-blue-500"
  },
  {
    id: 5,
    name: "Node.js",
    level: 70,
    icon: "fab fa-node-js",
    color: "from-green-400 to-green-600"
  },
  {
    id: 6,
    name: "Python",
    level: 85,
    icon: "fab fa-python",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 7,
    name: "Git",
    level: 80,
    icon: "fab fa-git-alt",
    color: "from-gray-600 to-gray-800"
  },
  {
    id: 8,
    name: "MongoDB",
    level: 65,
    icon: "fas fa-database",
    color: "from-purple-500 to-purple-700"
  }
];
