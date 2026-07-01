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
      "A real-time Kanban project management app inspired by Linear, with live drag-and-drop and team collaboration.",
    fullDescription:
      "A real-time Kanban board for teams, inspired by Linear. Drag-and-drop task management with Socket.io-powered live sync, per-card comment threads with read/unread tracking, workspace join requests, and Google OAuth sign-in.",
    stack: ["React", "TypeScript", "Node.js", "Express", "Socket.IO", "MongoDB"],
  },
  {
    title: "EchoStudy",
    href: "https://echostudy.gosagirma.me",
    image: "/EchoStudy.png",
    imageAlt: "EchoStudy Preview",
    shortDescription:
      "AI-powered study platform that turns notes into summaries, quizzes, and spaced-repetition flashcards.",
    fullDescription:
      "An AI-powered study platform built on the Gemini API. Summarizes large uploaded documents through a chunking pipeline, generates quizzes and flashcards with SM-2 spaced repetition scheduling, and includes a Socratic tutor mode for active recall.",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Gemini API", "Tailwind"],
  },
  {
    title: "WatchVault",
    href: "https://watchvault.gosagirma.me",
    image: "/WatchVault.png",
    imageAlt: "WatchVault Preview",
    shortDescription:
      "A cinematic movie discovery app powered by the TMDB API, with AI-generated personalized recommendations.",
    fullDescription:
      "A movie discovery app built on the TMDB API. Search by title, browse cast, ratings, and trailers, and get personalized recommendations powered by Gemini, which weighs your own ratings alongside IMDb scores.",
    stack: ["React", "JavaScript", "TMDB API", "Gemini API", "Vanilla CSS"],
  },
  {
    title: "MERN-Backend-Core",
    href: "https://github.com/gosag/mern-backend-core.git",
    image: "/Backend-core.png",
    imageAlt: "MERN-Backend-Core Preview",
    shortDescription:
      "A production-ready backend boilerplate with auth, error handling, and MongoDB integration.",
    fullDescription:
      "A production-ready backend boilerplate for MERN stack apps. Includes JWT authentication and authorization, centralized error handling, and MongoDB integration via Mongoose, built as a solid starting point for new projects.",
    stack: ["Express", "Node.js", "MongoDB", "Mongoose", "JWT"],
  },
];