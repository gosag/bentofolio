import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative min-h-fit md:h-fit min-w-[240px] md:min-w-[260px] flex-1 flex flex-col justify-between rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition-all duration-300 hover:border-blue-500/30 hover:z-200 snap-start overflow-hidden hover:overflow-visible dark:bg-[radial-gradient(ellipse_at_bottom_left,_theme(colors.zinc.600),_theme(colors.zinc.900),_theme(colors.black))] dark:border-zinc-800 dark:hover:border-blue-500/40"
    >
      {/* Default card content */}
      <div className="z-10 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0">
        <h2 className="text-sm font-bold text-zinc-900 mb-1 dark:text-zinc-50">
          {project.title}
        </h2>
        <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed dark:text-zinc-200">
          {project.shortDescription}
        </p>
      </div>

      <div className="flex items-end justify-between z-10 mt-2 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0">
        <div className="w-16 h-10 sm:w-[160px] sm:h-[100px] md:w-16 md:h-10 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-sm">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-full p-2 shadow-sm transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 group-hover:-translate-y-1">
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </div>
      </div>

      {/* Hover overlay — expands upward so stack + description both fit */}
      <div
        className="absolute inset-x-0 bottom-0 z-20 flex flex-col p-3 rounded-2xl shadow-2xl shadow-black/40 opacity-0 translate-y-2 scale-[0.98] group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:-top-14 group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:-top-14 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto min-h-full group-hover:min-h-[calc(100%+3.5rem)]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 rounded-2xl bg-zinc-900/97 dark:bg-zinc-950/97 backdrop-blur-xl border border-white/10" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/15 via-transparent to-violet-500/10" />
        <div className="absolute -top-8 -right-8 w-28 h-28 bg-blue-500/25 rounded-full blur-2xl" />

        <div className="relative z-10 flex items-center justify-between mb-2 shrink-0">
          <h2 className="text-sm font-bold text-white">{project.title}</h2>
          <div className="bg-blue-500 text-white rounded-full p-1.5 shadow-lg shadow-blue-500/30">
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </div>
        </div>

        <div className="relative z-10 shrink-0 mb-2">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-blue-400/80 mb-1.5">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-1">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-blue-500/20 text-blue-100 border border-blue-400/25"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex-1 min-h-0 overflow-y-auto custom-scrollbar">
          <p className="text-[11px] text-zinc-300 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>
      </div>
    </a>
  );
}
