import { ArrowUpRight, X } from "lucide-react";
import { useState, useRef, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import type { Project } from "../data/projects";

const OVERLAY_EXPAND = 64;
const CLOSE_DELAY = 120;
const OVERLAY_MAX_WIDTH = 360;
const VIEWPORT_MARGIN = 12;

const overlayVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 420, damping: 30, mass: 0.75 },
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.96,
    transition: { duration: 0.18, ease: "easeIn" as const },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.05, duration: 0.25, ease: "easeOut" as const },
  },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

const arrowVariants: Variants = {
  hidden: { opacity: 0, scale: 0.4, y: 10, rotate: -45 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: { delay: 0.12, type: "spring", stiffness: 500, damping: 22 },
  },
  exit: { opacity: 0, scale: 0.6, transition: { duration: 0.1 } },
};

// Bottom sheet (touch) variants
const sheetBackdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const sheetVariants: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { type: "spring", stiffness: 380, damping: 34 },
  },
  exit: { y: "100%", transition: { duration: 0.2, ease: "easeIn" as const } },
};

type ProjectCardProps = {
  project: Project;
};

function forwardWheelToScrollParent(e: React.WheelEvent, startEl: HTMLElement | null) {
  let parent = startEl?.parentElement ?? null;
  while (parent) {
    const { overflowY, overflowX } = getComputedStyle(parent);
    const canScrollY =
      (overflowY === "auto" || overflowY === "scroll") &&
      parent.scrollHeight > parent.clientHeight;
    const canScrollX =
      (overflowX === "auto" || overflowX === "scroll") &&
      parent.scrollWidth > parent.clientWidth;

    if (canScrollY || canScrollX) {
      e.preventDefault();
      if (canScrollY) parent.scrollTop += e.deltaY;
      if (canScrollX) parent.scrollLeft += e.deltaX;
      return;
    }
    parent = parent.parentElement;
  }
}

/** True on devices whose primary input is a mouse/trackpad (real hover support). */
function useHasHover() {
  const [hasHover, setHasHover] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setHasHover(mq.matches);
    const listener = (e: MediaQueryListEvent) => setHasHover(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  return hasHover;
}

function TechAndDescription({ project }: { project: Project }) {
  return (
    <>
      <div className="shrink-0 mb-2">
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
      <p className="text-[13px] text-zinc-600 dark:text-zinc-300 leading-relaxed">
        {project.fullDescription}
      </p>
    </>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasHover = useHasHover();

  const [showOverlay, setShowOverlay] = useState(false);
  const [showSheet, setShowSheet] = useState(false);

  const cardRef = useRef<HTMLAnchorElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [overlayStyle, setOverlayStyle] = useState<{
    left: number;
    top: number;
    width: number;
  } | null>(null);

  const updateRect = useCallback(() => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    setRect(r);

    const width = Math.min(r.width, OVERLAY_MAX_WIDTH);
    // If we've capped the width below the card width, center the overlay
    // over the card instead of anchoring it to the card's left edge.
    let left = r.left - (width - r.width) / 2;
    left = Math.max(
      VIEWPORT_MARGIN,
      Math.min(left, window.innerWidth - width - VIEWPORT_MARGIN)
    );

    const desiredTop = r.top - OVERLAY_EXPAND;
    const top = Math.max(VIEWPORT_MARGIN, desiredTop);

    setOverlayStyle({ left, top, width });
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setShowOverlay(false), CLOSE_DELAY);
  }, [cancelClose]);

  const openOverlay = useCallback(() => {
    if (!hasHover) return;
    cancelClose();
    updateRect();
    setShowOverlay(true);
  }, [cancelClose, updateRect, hasHover]);

  useEffect(() => {
    return () => cancelClose();
  }, [cancelClose]);

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

  // Lock body scroll while the mobile sheet is open
  useEffect(() => {
    if (!showSheet) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [showSheet]);

  const overlayHeight = rect ? rect.height + OVERLAY_EXPAND : 0;

  // Card tap handling: on touch devices, first tap opens the info sheet
  // instead of navigating away immediately.
  const handleCardClick = (e: React.MouseEvent) => {
    if (!hasHover) {
      e.preventDefault();
      setShowSheet(true);
    }
  };

  const overlay = createPortal(
    <AnimatePresence>
      {hasHover && showOverlay && rect && overlayStyle && (
        <motion.a
          key={`${project.title}-overlay`}
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={overlayVariants}
          onMouseEnter={openOverlay}
          onMouseLeave={scheduleClose}
          onWheel={(e) => forwardWheelToScrollParent(e, cardRef.current)}
          className="fixed z-[100] flex flex-col p-3 rounded-2xl cursor-pointer
            bg-white border border-zinc-200 shadow-2xl shadow-zinc-900/15
            dark:bg-zinc-950 dark:border-white/10 dark:shadow-black/60"
          style={{
            left: overlayStyle.left,
            width: overlayStyle.width,
            top: overlayStyle.top,
            height: Math.min(overlayHeight, window.innerHeight - overlayStyle.top - VIEWPORT_MARGIN),
          }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/80 via-white to-violet-50/50 dark:from-blue-500/15 dark:via-transparent dark:to-violet-500/10 pointer-events-none" />
          <div className="absolute -top-8 -right-8 w-28 h-28 bg-blue-200/40 dark:bg-blue-500/25 rounded-full blur-2xl pointer-events-none" />

          <motion.div
            variants={contentVariants}
            className="relative z-10 flex flex-col h-full min-h-0"
          >
            <h2 className="text-sm font-bold text-zinc-900 dark:text-white mb-2 shrink-0">
              {project.title}
            </h2>

            <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
              <TechAndDescription project={project} />
            </div>

            <div className="flex items-end justify-end mt-2 pt-1 shrink-0">
              <motion.div
                variants={arrowVariants}
                className="bg-blue-600 text-white rounded-full p-2 shadow-lg shadow-blue-600/30 dark:bg-blue-500 dark:shadow-blue-500/30"
              >
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </motion.div>
            </div>
          </motion.div>
        </motion.a>
      )}
    </AnimatePresence>,
    document.body
  );

  // Mobile / touch: bottom sheet triggered by tap, with an explicit
  // "open project" action instead of relying on hover.
  const sheet = createPortal(
    <AnimatePresence>
      {!hasHover && showSheet && (
        <motion.div
          key={`${project.title}-sheet-backdrop`}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={sheetBackdropVariants}
          className="fixed inset-0 z-[100] bg-black/50"
          onClick={() => setShowSheet(false)}
        >
          <motion.div
            variants={sheetVariants}
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-0 left-0 right-0 max-h-[80vh] flex flex-col
              rounded-t-2xl p-4 pb-[max(1rem,env(safe-area-inset-bottom))]
              bg-white border-t border-zinc-200
              dark:bg-zinc-950 dark:border-white/10"
          >
            <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-zinc-300 dark:bg-zinc-700 shrink-0" />

            <div className="flex items-start justify-between gap-3 mb-2 shrink-0">
              <h2 className="text-base font-bold text-zinc-900 dark:text-white">
                {project.title}
              </h2>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setShowSheet(false)}
                className="shrink-0 rounded-full p-1.5 text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto">
              <TechAndDescription project={project} />
            </div>

            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-1.5 shrink-0
                rounded-full bg-blue-600 dark:bg-blue-500 text-white text-sm font-semibold
                py-2.5 shadow-lg shadow-blue-600/30 dark:shadow-blue-500/30"
            >
              Open project
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );

  return (
    <>
      <div
        className="relative snap-start"
        style={{ paddingTop: OVERLAY_EXPAND, marginTop: -OVERLAY_EXPAND }}
        onMouseEnter={openOverlay}
        onMouseLeave={scheduleClose}
      >
        <a
          ref={cardRef}
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          onFocus={openOverlay}
          onBlur={scheduleClose}
          onClick={handleCardClick}
          className="group relative min-h-fit flex-1 flex flex-col justify-between rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition-all duration-300 hover:border-blue-500/30 overflow-hidden dark:bg-[radial-gradient(ellipse_at_bottom_left,_theme(colors.zinc.600),_theme(colors.zinc.900),_theme(colors.black))] dark:border-zinc-800 dark:hover:border-blue-500/40"
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
            <div className="w-16 h-10 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-sm">
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
      {sheet}
    </>
  );
}