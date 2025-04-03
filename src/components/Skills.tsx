import React from 'react';
import { Code2, Database, Layout, Settings, Brain, Terminal, Server, PenTool as Tool } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  {
    category: 'Languages',
    items: [
      
      { name: 'Python', level: 'Intermediate' },
      { name: 'Java', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Intermediate' },
    ],
    icon: Terminal,
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'React', level: 'Intermediate' },
      { name: 'Spring Boot', level: 'Intermediate' },
      // { name: 'Flask', level: 'Intermediate' },
    ],
    icon: Layout,
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', level: 'Intermediate' },
      // { name: 'Firebase', level: 'Intermediate' },
    ],
    icon: Database,
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', level: 'Intermediate' },
      { name: 'VS Code', level: 'Advanced' },
      { name: 'Postman', level: 'Intermediate' },
      // { name: 'Figma', level: 'Intermediate' },
    ],
    icon: Tool,
  },
  {
    category: 'Backend',
    items: [
      { name: 'REST APIs', level: 'Intermediate' },
      { name: 'Node.js', level: 'Intermediate' },
    ],
    icon: Server,
  },
  {
    category: 'AI & ML',
    items: [
      { name: 'Machine Learning', level: 'Intermediate' },
      // { name: 'RAG Models', level: 'Intermediate' },
      // { name: 'NLP', level: 'Intermediate' },
    ],
    icon: Brain,
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-3"
        >
          {skills.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="group relative rounded-lg bg-gray-800/50 p-6 hover:bg-gray-800 transition-colors duration-300"
            >
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <category.icon className="h-5 w-5 flex-none text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
                {category.category}
              </dt>
              <dd className="mt-4 flex flex-col gap-2">
                {category.items.map((skill) => (
                  <div key={skill.name} className="flex justify-between items-center">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-sm text-blue-500">{skill.level}</span>
                  </div>
                ))}
              </dd>
              <div className="absolute inset-0 border border-gray-700 rounded-lg group-hover:border-blue-600/50 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
