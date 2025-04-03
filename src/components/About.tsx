import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl fade-in">
          About Me
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300 fade-in-delay-1">
          I'm a passionate developer with a keen eye for design and a love for creating
          seamless user experiences. With expertise in modern web technologies,
          I bring ideas to life through clean, efficient, and maintainable code.
        </p>
        <div className="mt-10 relative group fade-in-delay-2">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
          <img
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            alt="Developer workspace"
            className="relative rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </div>
      </div>
    </section>
  );
}
