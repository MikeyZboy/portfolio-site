import React from 'react';
import HeartMemoji from './assets/HeartMemoji';
import './App.css'

export const App = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-purple-400">Mike Zahuta</h1>
          <p className="text-xl text-gray-400">Software Developer & AI Dreamer</p>
        </header>
        
        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* About Me - Span 2 columns */}
          <div className="bg-gray-800 rounded-lg p-6 md:col-span-2 hover:bg-gray-700 transition duration-300">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">About Me</h2>
            <p className="mb-4">
              I'm a passionate full stack developer with 4 years of experience creating 
              responsive, user-friendly web applications. My background in sales 
              helps me create interfaces that are highly tailored to user feedback.
            </p>
            <p>
              When I'm not coding, you can find me walking with my dog, experimenting 
              with new recipes, or catching some sunshine.
            </p>
          </div>
          
          {/* Profile Picture */}
          <div className="bg-gray-800 rounded-lg p-6 flex items-center justify-center hover:bg-gray-700 transition duration-300">
            <div className="w-48 h-48 rounded-full bg-purple-600 flex items-center justify-center">
              <span className="text-4xl">{HeartMemoji}</span>
            </div>
          </div>
          
          {/* Skills - Span full width */}
          <div className="bg-gray-800 rounded-lg p-6 md:col-span-3 hover:bg-gray-700 transition duration-300">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Node.js', 'Redux', 'Next.js', 'Tailwind CSS', 'GraphQL', 'Figma'].map((skill) => (
                <span key={skill} className="bg-gray-900 text-purple-200 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Featured Project - Span 2 columns */}
          <div className="bg-gray-800 rounded-lg p-6 md:col-span-2 hover:bg-gray-700 transition duration-300">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Featured Project</h2>
            <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
            <p className="mb-4">
              A full-featured online shopping platform built with React, Node.js, and MongoDB.
              Includes user authentication, product catalog, shopping cart, and payment processing.
            </p>
            <div className="flex gap-2">
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">View Project</button>
              <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition">GitHub</button>
            </div>
          </div>
          
          {/* Experience */}
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Experience</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Senior Frontend Developer</h3>
              <p className="text-gray-400">TechCorp • 2021-Present</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">UI Developer</h3>
              <p className="text-gray-400">WebSolutions • 2018-2021</p>
            </div>
          </div>
          
          {/* Other Projects - Span full width */}
          <div className="bg-gray-800 rounded-lg p-6 md:col-span-3 hover:bg-gray-700 transition duration-300">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'Weather App', tech: 'React, OpenWeather API' },
                { name: 'Task Manager', tech: 'React, Redux, Firebase' },
                { name: 'Portfolio Generator', tech: 'Next.js, Tailwind CSS' }
              ].map((project) => (
                <div key={project.name} className="bg-gray-900 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
                  <p className="text-gray-400 text-sm">{project.tech}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact - Span 2 columns */}
          <div className="bg-gray-800 rounded-lg p-6 md:col-span-2 hover:bg-gray-700 transition duration-300">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Contact</h2>
            <p className="mb-4">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-purple-400 hover:text-purple-300">Email</a>
              <a href="#" className="text-purple-400 hover:text-purple-300">LinkedIn</a>
              <a href="#" className="text-purple-400 hover:text-purple-300">GitHub</a>
              <a href="#" className="text-purple-400 hover:text-purple-300">Twitter</a>
            </div>
          </div>
          
          {/* Blog */}
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300">
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Latest Blog</h2>
            <h3 className="text-lg font-semibold mb-2">Mastering React Hooks</h3>
            <p className="text-gray-400 mb-4">March 15, 2025</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">Read More</button>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-8 text-center text-gray-500 py-4">
          <p>© 2025 Jane Developer. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};
