export type Project = {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  shortDescription: string;
  fullDescription: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "ShipIt",
    href: "https://shipit.gosagirma.me",
    image: "/ShipIt.png",
    imageAlt: "ShipIt Preview",
    shortDescription:
      "A Real Time collaboration App built with React, Node.js, and Socket.IO, enabling users to work together seamlessly...",
    fullDescription:
      "A real-time collaboration app enabling users to work together on shared documents and projects. Features live editing, in-app chat, and robust synchronization for a smooth collaborative experience.",
    stack: ["React", "Node.js", "Socket.IO", "TypeScript", "Express"],
  },
  {
    title: "EchoStudy",
    href: "https://echostudy.gosagirma.me",
    image: "/EchoStudy.png",
    imageAlt: "EchoStudy Preview",
    shortDescription:
      "AI-powered study system with summarization, quizzes, and spaced repetition...",
    fullDescription:
      "An AI-powered study platform that transforms notes into summaries, auto-generated quizzes, and spaced-repetition flashcards — helping students learn smarter and retain more.",
    stack: ["React", "Node.js", "Express", "TypeScript", "Gemini", "MongoDB", "Tailwind"],
  },
  {
    title: "WatchVault",
    href: "https://watchvault.gosagirma.me",
    image: "/WatchVault.png",
    imageAlt: "WatchVault Preview",
    shortDescription:
      "A responsive cinematic explorer built with React, leveraging the TMDB API...",
    fullDescription:
      "A responsive movie discovery app powered by the TMDB API.  search by title and explore detailed cast, ratings, and trailers  — all in a sleek cinematic UI.",
    stack: ["React", "TMDB API", "Vanila CSS", "JavaScript"],
  },
  {
    title: "MERN-Backend-Core",
    href: "https://github.com/gosag/mern-backend-core.git",
    image: "/Backend-core.png",
    imageAlt: "MERN-Backend-Core Preview",
    shortDescription:
      "A robust backend infrastructure built with Express, Node.js and MongoDB, providing a solid foundation...",
    fullDescription:
      "A production-ready backend boilerplate with authentication, authorization, error handling, and MongoDB integration — a solid foundation for scalable MERN stack applications.",
    stack: ["Express", "Node.js", "MongoDB", "JWT", "Mongoose"],
  },
];
