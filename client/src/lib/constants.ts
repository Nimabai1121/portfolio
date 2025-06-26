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
    name: "🌿Grensense",
    description: "A smart agriculture solution focused on greenhouses, using automation and IOT.",
    techStack: ["React Native", "Express + Node.js", "NeonDB" ,"Upstash Redis"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "https://voltpolymer.com/wp-content/uploads/2023/11/Improved-Crop-Quality.jpg"
  },
  {
    id: 2,
    name: "📱Wallet Mobile App",
    description: "A mobile app for managing personal finances with budgeting, expense tracking, and investment tracking.",
    techStack: ["React Native", "Neon Db", "FastAPI" ,"redis"],
    githubUrl: "https://github.com",
   //
    liveUrl: "https://example.com",
    imageUrl: "https://www.softwaregroup.com/images/default-source/landing-pages/mwallet/mobile-wallet-screens4fc36895e42a42eda9dc055208ac7f70.png?sfvrsn=590722c5_0"
  },
  {
    id: 3,
    name: "🩺Simple ECG Patient Monitoring System",
    description: "A simple ECG patient monitoring system using machine learning and IoT devices.",
    techStack: ["Python", "TensorFlow", "Arduino" , "Flask"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "https://getwellue.com/cdn/shop/files/standardviewof8inchpatientmonitor_1200x1200.jpg?v=1743139801"
  }
];

export const SKILLS: Skill[] = [
  {
    id: 1,
    name: "Programing and IOT Integration",
    level: 90,
    icon: "fas fa-laptop-code",
    color: "from-orange-400 to-red-500"
  },
  {
    id: 2,
    name: "Control Systems and Simulation",
    level: 85,
    icon: "fas fa-cogs",
    //icon: "fab fa-css3-alt",
    color: "from-blue-400 to-blue-600"
  },
  {
    id: 3,
    name: "IOT Architecture and Communication Protocols",
    level: 80,
    icon: "fas fa-network-wired",
   // icon: "fas fa-network-wired",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    id: 4,
    name: "Instrmentation, Senors and Sigal Conditioning",
    level: 75,
    icon: "fas fa-microchip",
    //icon: "fab fa-react",
    color: "from-cyan-400 to-blue-500"
  },
  {
    id: 5,
    name: "PLC ,SCADA , DCS and HMI programming",
    level: 70,
    icon: "fas fa-cogs",
   // icon: "fab fa-node-js",
    color: "from-green-400 to-green-600"
  },
  {
    id: 6,
    name: "Python for Data Analysis and Automation",
    level: 85,
    icon: "fab fa-python",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 7,
    name: "Version control and CI/CD with Git",
    level: 80,
    icon: "fab fa-git-alt",
    color: "from-gray-600 to-gray-800"
  },
  {
    id: 8,
    name: "Machine Learning for Industrial Automation",
    level: 65,
    icon: "fas fa-brain",
    color: "from-purple-400 to-purple-600"
   // icon: "fas fa-database",
   // color: "from-purple-500 to-purple-700"
  }
];
