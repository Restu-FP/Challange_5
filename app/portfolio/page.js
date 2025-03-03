"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Set isLoaded to true after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      title: "Website Streaming Anime",
      description:
        "Sebuah platform yang memungkinkan pengguna untuk menonton dan streaming anime secara online, dengan berbagai pilihan genre dan episode terbaru.",
      imageUrl: "/image/anime.jpg",
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    },
    {
      title: "Website Perpustakaan Online",
      description:
        "Platform digital yang memungkinkan pengguna untuk mencari, meminjam, dan membaca buku secara online, serta mengakses berbagai sumber daya perpustakaan.",
      imageUrl: "/image/perpustakaan.jpg",
      technologies: ["React", "MongoDB", "Express", "Node.js"],
    },
    {
      title: "Website Games Store",
      description:
        "Sebuah website yang menyediakan berbagai game Nintendo untuk dibeli dan diunduh, lengkap dengan ulasan dan informasi terbaru tentang game.",
      imageUrl: "/image/nintendo.jpg",
      technologies: ["React", "Redux", "Firebase", "Tailwind"],
    },
  ];

  // Animation for heading
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  // Animation for description
  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.7, delay: 0.2 },
    },
  };

  // Animation for project cards (alternating directions)
  const leftToRightVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightToLeftVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Technology badge animation
  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="max-w-6xl mx-auto p-8 mt-20 bg-white shadow-lg rounded-lg">
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="text-4xl font-bold text-blue-600 mb-6 text-center">
        My Projects
      </motion.h2>

      <motion.p
        variants={descriptionVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="text-lg text-gray-700 text-center mb-12">
        Beberapa proyek saya yang telah saya kerjakan.
      </motion.p>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col md:flex-row gap-8 bg-gray-50 rounded-lg overflow-hidden shadow-md p-4">
            {/* For even indices (0, 2, etc.), image on the left, content on right */}
            {index % 2 === 0 ? (
              <>
                <motion.div
                  variants={leftToRightVariants}
                  className="w-full md:w-1/2 overflow-hidden rounded-lg">
                  <motion.img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <motion.div
                  variants={rightToLeftVariants}
                  className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        variants={badgeVariants}
                        className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full">
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </>
            ) : (
              /* For odd indices (1, 3, etc.), content on left, image on right */
              <>
                <motion.div
                  variants={leftToRightVariants}
                  className="w-full md:w-1/2 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        variants={badgeVariants}
                        className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full">
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  variants={rightToLeftVariants}
                  className="w-full md:w-1/2 overflow-hidden rounded-lg order-1 md:order-2">
                  <motion.img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
