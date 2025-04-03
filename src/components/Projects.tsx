import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Uniguide – AI-Powered Career Guidance System',
    description: 'AI-driven chatbot providing personalized degree and career recommendations for Sri Lankan A/L students.',
    technologies: ['React', 'Python (ML)', 'Firebase', 'NLP', 'RAG'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  // {
  //   title: 'Spot-Shield – Parking Safety App',
  //   description: 'Smart AI-based security solution for vehicle parking safety, enhancing surveillance and access control.',
  //   technologies: ['React Native', 'Firebase', 'Computer Vision'],
  //   image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  //   github: 'https://github.com',
  //   demo: 'https://example.com',
  // },
  {
    title: 'Cinema Ticket Booking System',
    description: 'A full-stack web application for online movie ticket booking with seat selection and payment gateway.',
    technologies: ['Java (Spring Boot)', 'Angular', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Timetable Sorting System',
    description: 'University timetable management tool to optimize class schedules and avoid clashes.',
    technologies: ['Python', 'Flask', 'SQL'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            A selection of my recent work
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col items-start"
            >
              <div className="relative w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative aspect-[16/9] w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <h3 className="text-lg font-semibold leading-6 text-white group-hover:text-blue-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-6 text-gray-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium text-blue-400 bg-indigo-900/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </div> 
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
