import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function BentoProjectCard({ project, className = "", delay = 0 }) {
    const DEFAULT_IMAGE = "coming-soon.webp";
    const imageUrl = project?.imageUrl || DEFAULT_IMAGE;
    const Github = ({ ...props }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 49.4 512 399.42" {...props}><g fill="none" fillRule="evenodd"><g fillRule="nonzero"><path fill="#4285f4" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z" /><path fill="#34a853" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z" /><path fill="#fbbc04" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z" /></g><path fill="#ea4335" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z" /><path fill="#c5221f" fillRule="nonzero" d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z" /></g></svg>
        );
    }
    if (!project) return null;
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 0.4, // 40% del componente visible
    });
    const bounceVariant = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: [0, 1.2, 0.9, 1],
            opacity: [0, 1, 1, 1],
            transition: {
                duration: 0.6,
                times: [0, 0.4, 0.7, 1],
                ease: "easeOut",
                delay: delay, // aquí puedes recibir delay dinámico
            },
        },
    };

    return (
        <div ref={ref} className={`${className}`}>
            {isInView && (
                <motion.div
                    className={`relative cursor-pointer flex flex-col rounded-xl overflow-hidden shadow-xl bg-neutral-900 border border-neutral-700 hover:border-fuchsia-500 hover:scale-[1.03] transition-all duration-300 ${className}`}
                    variants={bounceVariant}
                    initial="hidden"
                    animate="visible"
                    whileInView={{
                        scale: [0, 1.2, 0.9, 1],
                        opacity: [0, 1],
                    }}
                    transition={{
                        delay: delay,
                        duration: 0.8,
                        ease: "easeOut",
                        times: [0, 0.4, 0.7, 1],
                    }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <a href={`/projects/${project.id}`}>
                        <div className="relative w-full h-60 md:h-72 overflow-hidden">
                            <img
                                src={imageUrl}
                                alt={`Imagen de ${project.title}`}
                                className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                            <div className="absolute z-50 bottom-0 left-0 text-2xl p-4">
                                <h3 className="text-lg sm:text-2xl font-bold mb-1 text-fuchsia-400 line-clamp-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                    {project.title}
                                </h3>
                                <p className="text-neutral-200 text-base mb-2 line-clamp-2 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
                                    {project.shortDescription || project.description.slice(0, 60) + "..."}
                                </p>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-fuchsia-700 px-3 py-1 rounded-lg hover:bg-fuchsia-500 transition-colors text-white font-semibold text-xs shadow-md w-fit mt-auto"
                                    >
                                        <Github className="size-4" />
                                        <span className="hidden sm:inline">GitHub</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </a>
                </motion.div>
            )}
        </div>
    );
}
