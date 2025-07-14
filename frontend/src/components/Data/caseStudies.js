const caseStudies = [
  {
    title: "Questa - Quiz Platform",
    description:
      "A full-stack quiz creation and sharing platform with analytics dashboard",
    image: "questa-preview.jpg",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    features: [
      "Quiz creation with multiple question types",
      "Response analytics dashboard",
      "Secure authentication with Supabase",
      "Public quiz sharing via links",
      "Modern responsive UI",
      "RESTful API endpoints",
    ],
    technologies: [
      { name: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
      { name: "Backend", items: ["Supabase", "PostgreSQL"] },
      { name: "Tools", items: ["Framer Motion", "ESLint", "Prettier"] },
    ],
    challenges: [
      "Designing flexible quiz data structures",
      "Implementing real-time response tracking",
      "Creating intuitive question editors",
    ],
    solutions: [
      "Developed recursive component architecture",
      "Leveraged Supabase real-time subscriptions",
      "Built drag-and-drop question builder",
    ],
    results: [
      "75% faster quiz creation than competitors",
      "90% user satisfaction in testing",
      "Support for 10+ question types",
    ],
    links: {
      demo: "https://questa-lyyb.onrender.com",
      github: "https://github.com/Amar-H-G/questa",
    },
  },
  {
    title: "FundMate - Investment Tracker",
    description: "Comprehensive mutual fund tracking and analytics platform",
    image: "fundmate-preview.jpg",
    tags: ["MERN Stack", "JWT Auth", "Data Visualization", "MongoDB"],
    features: [
      "Fund performance analytics",
      "Personalized dashboard",
      "Secure authentication",
      "Favorite funds management",
      "Premium account features",
      "Dark mode ready UI",
    ],
    technologies: [
      { name: "Frontend", items: ["React", "Vite", "Tailwind CSS"] },
      { name: "Backend", items: ["Node.js", "Express", "MongoDB"] },
      { name: "Visualization", items: ["Chart.js", "D3.js"] },
    ],
    challenges: [
      "Processing large financial datasets",
      "Creating meaningful data visualizations",
      "Implementing secure authentication flow",
    ],
    solutions: [
      "Optimized data aggregation pipelines",
      "Developed interactive chart components",
      "Implemented JWT with localStorage persistence",
    ],
    results: [
      "50% faster data loading than industry average",
      "85% user retention after first month",
      "30+ financial metrics tracked per fund",
    ],
    links: {
      demo: "https://fundmate-8bhw.onrender.com",
      github: "https://github.com/Amar-H-G/FundMate",
    },
  },
  {
    title: "ChatUs - Real-Time Chat Application",
    description:
      "A full-featured messaging platform supporting 1:1 and group conversations with real-time functionality",
    image: "chatus-preview.jpg",
    tags: ["MERN Stack", "WebSockets", "Cloudinary", "JWT Auth"],
    features: [
      "Secure JWT authentication with protected routes",
      "Real-time messaging powered by Socket.io",
      "Group chat creation and management",
      "Typing indicators and read receipts",
      "Cloudinary-based profile picture uploads",
      "Responsive design for all devices",
    ],
    technologies: [
      {
        name: "Frontend",
        items: ["React", "Vite", "Tailwind CSS", "Socket.io-client"],
      },
      {
        name: "Backend",
        items: ["Node.js", "Express", "MongoDB", "Socket.io"],
      },
      {
        name: "Services",
        items: ["JWT Authentication", "Cloudinary API", "Bcrypt Hashing"],
      },
    ],
    challenges: [
      "Implementing reliable real-time updates across multiple clients",
      "Managing complex group chat permissions",
      "Optimizing database queries for chat history",
    ],
    solutions: [
      "Leveraged Socket.io rooms for efficient message broadcasting",
      "Created middleware for granular access control",
      "Implemented pagination and indexing for message retrieval",
    ],
    results: [
      "200ms average message delivery time",
      "Support for 100+ concurrent users in stress tests",
      "95% reduction in database queries through caching",
    ],
    links: {
      demo: "https://chat-us-goaa.onrender.com",
      github: "https://github.com/Amar-H-G/Chat-Us",
    },
  },
  {
    title: "BookSwap - Community Book Exchange",
    description:
      "A peer-to-peer platform for users to exchange books within their community",
    image: "bookswap-preview.jpg",
    tags: ["MERN Stack", "Tailwind CSS", "Context API", "Render"],
    features: [
      "User authentication with JWT",
      "Book listing management with CRUD operations",
      "Book status tracking (available/exchanged)",
      "Responsive design with Tailwind CSS",
      "Profile management for users",
    ],
    technologies: [
      { name: "Frontend", items: ["React", "Tailwind CSS", "Axios"] },
      { name: "Backend", items: ["Node.js", "Express", "MongoDB"] },
      { name: "Services", items: ["JWT Authentication", "Render Hosting"] },
    ],
    challenges: [
      "Creating an intuitive book exchange workflow",
      "Managing state across multiple components",
      "Implementing responsive design with complex layouts",
    ],
    solutions: [
      "Developed clear status indicators for book availability",
      "Used React Context API for global state management",
      "Leveraged Tailwind CSS for responsive utilities",
    ],
    results: [
      "80% reduction in CSS code with Tailwind",
      "30% faster page loads with Vite",
      "Improved mobile experience with responsive design",
    ],
    links: {
      demo: "https://book-swap-frontend-tpyl.onrender.com",
      github: "https://github.com/Amar-H-G/Book-Swap",
    },
  },

  {
    title: "Uber Clone - Ride Booking Platform",
    description:
      "A full-stack ride-hailing application with real-time tracking and role-based user management",
    image: "uber-clone-preview.jpg",
    tags: ["MERN Stack", "Socket.io", "Geolocation API", "JWT Auth"],
    features: [
      "User and driver registration with vehicle details",
      "Real-time ride tracking and status updates",
      "Fare calculation based on distance and time",
      "Secure authentication for both users and drivers",
      "Location search with autocomplete suggestions",
    ],
    technologies: [
      { name: "Frontend", items: ["React", "Redux", "Mapbox GL"] },
      { name: "Backend", items: ["Node.js", "Express", "MongoDB"] },
      { name: "Services", items: ["Socket.io", "JWT Auth", "Geocoding API"] },
    ],
    challenges: [
      "Implementing real-time location updates between multiple clients",
      "Calculating accurate fares based on dynamic pricing",
      "Managing driver availability and ride matching",
    ],
    solutions: [
      "Used Socket.io for bidirectional real-time communication",
      "Integrated distance matrix APIs for accurate calculations",
      "Implemented a queue system for driver assignment",
    ],
    results: [
      "200ms average location update interval",
      "95% accuracy in fare estimates",
      "Support for 50+ concurrent rides in testing",
    ],
    links: {
      demo: "https://uber-clone-frontend-uver.onrender.com",
      github: "https://github.com/Amar-H-G/Uber-Clone",
    },
  },
  {
    title: "LocalShop - Community E-Commerce Platform",
    description:
      "A local-focused marketplace connecting nearby sellers with customers in their community",
    image: "localshop-preview.jpg",
    tags: ["Django", "Python", "SQLite", "Bootstrap"],
    features: [
      "Location-based shop discovery",
      "Direct customer-seller communication",
      "Self-managed delivery system",
      "Product catalog management",
      "User authentication system",
      "Responsive mobile-friendly design",
    ],
    technologies: [
      { name: "Core", items: ["Django", "Python", "SQLite"] },
      { name: "Frontend", items: ["HTML5", "CSS", "Bootstrap"] },
      {
        name: "Features",
        items: ["Geo-location", "CRUD Operations", "User Roles"],
      },
    ],
    challenges: [
      "Creating a simple interface for non-technical sellers",
      "Implementing location-based filtering",
      "Ensuring data security for financial transactions",
    ],
    solutions: [
      "Developed intuitive admin dashboard with guided workflows",
      "Integrated geocoding APIs for location services",
      "Implemented Django's built-in security features",
    ],
    results: [
      "30% faster page loads compared to similar platforms",
      "85% seller satisfaction in usability tests",
      "Reduced carbon footprint by promoting local commerce",
    ],
    links: {
      demo: "http://localshop.pythonanywhere.com",
      github: "https://github.com/Amar-H-G/LocalShop",
    },
  },
];

export default caseStudies;
