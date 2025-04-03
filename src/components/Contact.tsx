import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center fade-in">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Connect with me 
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 fade-in-delay-1">
            <div className="group flex flex-col items-center text-center">
              <Mail className="h-8 w-8 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
              <h3 className="mt-4 text-base font-semibold text-white">Email</h3>
              <p className="mt-2 text-gray-300">thanugiweerasinghe@gmail.com</p>
            </div>
            <div className="group flex flex-col items-center text-center">
              <Phone className="h-8 w-8 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
              <h3 className="mt-4 text-base font-semibold text-white">Phone</h3>
              <p className="mt-2 text-gray-300">+070-6477053</p>
            </div>
            <div className="group flex flex-col items-center text-center">
              <Linkedin className="h-8 w-8 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
              <h3 className="mt-4 text-base font-semibold text-white">LinkedIn</h3>
              <p className="mt-2 text-gray-300">
                <a 
                  href="https://www.linkedin.com/in/thanugi-weerasinghe-6799772b5/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  Thanugi Weerasinghe
                </a>
              </p>
            </div>
          </div>
          <form className="mt-16 fade-in-delay-2">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 bg-gray-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-blue-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 transition-colors duration-300"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
