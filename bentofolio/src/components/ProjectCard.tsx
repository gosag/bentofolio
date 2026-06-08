import { ArrowUpRight } from "lucide-react";
import { useState, useRef, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import type { Project } from "../data/projects";

const OVERLAY_EXPAND = 64;

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showOverlay, setShowOverlay] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);

  const updateRect = useCallback(() => {
    if (cardRef.current) {
      setRect(cardRef.current.getBoundingClientRect());
    }
  }, []);

  const openOverlay = useCallback(() => {
    updateRect();
    setShowOverlay(true);
  }, [updateRect]);

  const closeOverlay = useCallback(() => {
    setShowOverlay(false);
  }, []);

  useEffect(() => {
    if (!showOverlay) return;
    updateRect();
    window.addEventListener("scroll", updateRect, true);
    window.addEventListener("resize", updateRect);
    return () => {
      window.removeEventListener("scroll", updateRect, true);
      window.removeEventListener("resize", updateRect);
    };
  }, [showOverlay, updateRect]);

  const overlay =
    showOverlay && rect
      ? createPortal(
          <div
            role="tooltip"
            aria-hidden="true"
            className="fixed z-[100] flex flex-col p-3 rounded-2xl pointer-events-none transition-opacity duration-200
              bg-white border border-zinc-200 shadow-2xl shadow-zinc-900/15
              dark:bg-zinc-950 dark:border-white/10 dark:shadow-black/60"
            style={{
              left: rect.left,
              width: rect.width,
              top: rect.top - OVERLAY_EXPAND,
              minHeight: rect.height + OVERLAY_EXPAND,
            }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/80 via-white to-violet-50/50 dark:from-blue-500/15 dark:via-transparent dark:to-violet-500/10 pointer-events-none" />
            <div className="absolute -top-8 -right-8 w-28 h-28 bg-blue-200/40 dark:bg-blue-500/25 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between mb-2 shrink-0">
              <h2 className="text-sm font-bold text-zinc-900 dark:text-white">{project.title}</h2>
              <div className="bg-blue-600 text-white rounded-full p-1.5 shadow-lg shadow-blue-600/30 dark:bg-blue-500 dark:shadow-blue-500/30">
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </div>
            </div>

            <div className="relative z-10 shrink-0 mb-2">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-400 mb-1.5">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[10px] font-medium rounded-full
                      bg-blue-50 text-blue-800 border border-blue-200
                      dark:bg-blue-500/20 dark:text-blue-100 dark:border-blue-400/25"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex-1 min-h-0">
              <p className="text-[13px] text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <div
        className="relative snap-start"
        style={{ paddingTop: OVERLAY_EXPAND, marginTop: -OVERLAY_EXPAND }}
        onMouseEnter={openOverlay}
        onMouseLeave={closeOverlay}
      >
        <a
          ref={cardRef}
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          onFocus={openOverlay}
          onBlur={closeOverlay}
          className="group relative min-h-fit md:h-fit min-w-[240px] md:min-w-[260px] flex-1 flex flex-col justify-between rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition-all duration-300 hover:border-blue-500/30 overflow-hidden dark:bg-[radial-gradient(ellipse_at_bottom_left,_theme(colors.zinc.600),_theme(colors.zinc.900),_theme(colors.black))] dark:border-zinc-800 dark:hover:border-blue-500/40"
        >
          <div>
            <h2 className="text-sm font-bold text-zinc-900 mb-1 dark:text-zinc-50">
              {project.title}
            </h2>
            <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed dark:text-zinc-200">
              {project.shortDescription}
            </p>
          </div>

          <div className="flex items-end justify-between mt-2">
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
        </a>
      </div>
      {overlay}
    </>
  );
}
