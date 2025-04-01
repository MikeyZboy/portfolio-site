import React from 'react';
import HeartMemoji from './assets/HeartMemoji.png';
import LogoCloud from './components/LogoCloud';
import { SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiRedux, SiNextdotjs, SiTailwindcss, SiGraphql, SiFigma } from 'react-icons/si';
import {
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import './App.css' 

 const skillIcons = [
  { icon: <SiReact />, name: 'React' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <SiHtml5 />, name: 'HTML' },
  { icon: <SiCss3 />, name: 'CSS' },
  { icon: <SiNodedotjs />, name: 'Node.js' },
  { icon: <SiRedux />, name: 'Redux' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <SiGraphql />, name: 'GraphQL' },
  { icon: <SiFigma />, name: 'Figma' },
];

export const App = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Bento Box Layout */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
          {/* Welcome - Span 2 columns */}
          <div className="bg-gray-800 rounded-lg p-6 md:col-span-3 hover:bg-gray-700 transition duration-300 grid grid-cols-2">

            <div className="col-span-1 text-right">
              <p className="mb-4">
                Hello world, I am <b className="text-cyan-300">Mike Zahuta</b>, a passionate <b className="text-cyan-300">Full Stack Developer</b> with over 4 years of experience creating 
                responsive web apps. A long time ago, in a startup far, far away, I discovered my love for coding when I used to sell SaaS products. 
                Now, I use my user-focused critical thinking and listening skills to help companies deliver the best software solutions possible.
              </p>
              <p>
                When I'm not coding, you can find me walking my dog, experimenting 
                with new spicy recipes, or trying to renovate something.
              </p>
              {/* <div>
                <h3 className="text-3xl font-bold text-cyan-100 mt-5 mb-10 text-center">
                  Skills
                </h3>
              </div> */}
              {/* <LogoCloud /> */}
              {/*<div className="bg-gray-800 rounded-lg p-6 md:col-span-3 hover:bg-gray-700 transition duration-300">
                <h2 className="text-2xl font-bold text-cyan-300 mb-4 text-center">Skills</h2>
                 <Carousel
                  showThumbs={false}
                  showStatus={false}
                  infiniteLoop
                  autoPlay
                  interval={2000}
                  stopOnHover
                  swipeable
                  emulateTouch
                  className="text-center"
                > 
                <Carousel>
                  {skillIcons.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="text-cyan-300 text-4xl mb-2">{skill.icon}</div>
                      <p className="text-cyan-200 text-sm">{skill.name}</p>
                    </div>
                  ))}
                </Carousel>
              </div> */}
              {/* <div className="bg-gray-800 rounded-lg p-6 md:col-span-3 hover:bg-gray-700 transition duration-300">
                <h2 className="text-2xl font-bold mt-4 mb-4 text-cyan-300 text-center">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Node.js', 'Redux', 'Next.js', 'Tailwind CSS', 'GraphQL', 'Figma'].map((skill) => (
                    <span key={skill} className="bg-gray-900 text-cyan-200 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div> */}
              <h2 className="text-2xl font-bold text-cyan-300 mt-10 text-center">Contact</h2>
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300 text-center">
                <button href="#" className="text-cyan-400 hover:text-cyan-300 px-4 py-2 m-2">
                  <MailOutlined />
                </button>
                <button href="#" className="text-cyan-400 hover:text-cyan-300 px-4 py-2 m-2">
                  <LinkedinOutlined />
                </button>
                <button href="#" className="text-cyan-400 hover:text-cyan-300 px-4 py-2 m-2">
                  <GithubOutlined />
                </button>
              </div> 

            </div>
            {/* <div className="md:col-span-1 hover:bg-gray-700 transition duration-300 content-center"> */}
            {/* Contact - Span 2 columns */}
            <div className="square-full bg-gray-900 mx-auto mb-4 content-center">
              <LogoCloud>
                <img src={HeartMemoji} alt="Heart Memoji" className="w-100 h-100" />
              </LogoCloud>
            </div>
              {/* <h2 className="text-2xl font-bold mb-4 text-cyan-300">Contact</h2>
              <p className="mb-4">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300">
                <button href="#" className="text-cyan-400 hover:text-cyan-300 px-4 py-2 m-2">
                  <MailOutlined />
                </button>
                <button href="#" className="text-cyan-400 hover:text-cyan-300 px-4 py-2 m-2">
                  <LinkedinOutlined />
                </button>
                <button href="#" className="text-cyan-400 hover:text-cyan-300 px-4 py-2 m-2">
                  <GithubOutlined />
                </button>
              </div> */}
            {/* </div> */}
          </div>

          {/* Skills - Span full width */}
          {/* <div className="bg-gray-800 rounded-lg p-6 md:col-span-3 hover:bg-gray-700 transition duration-300">
            <h2 className="text-2xl font-bold mb-4 text-cyan-300">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Node.js', 'Redux', 'Next.js', 'Tailwind CSS', 'GraphQL', 'Figma'].map((skill) => (
                <span key={skill} className="bg-gray-900 text-cyan-200 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div> */}
          
          {/* Featured Project - Span 2 columns */}
          <div className="bg-gray-800 rounded-lg p-6 md:col-span-2 hover:bg-gray-700 transition duration-300">
            <h2 className="text-2xl font-bold mb-4 text-cyan-300">Current Project</h2>
            <h3 className="text-xl font-semibold mb-2">Returns AI Agent</h3>
            <p className="mb-4">
              A RAG based AI bot that reads an uploaded receipt and helps the user figure out the return policy and reminds them when the date approaches.
            </p>
            <div className="flex gap-2">
              <button className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition">View Project</button>
              <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition">GitHub</button>
            </div>
          </div>
          
          {/* Experience */}
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300">
            <h2 className="text-2xl font-bold mb-4 text-cyan-300">Experience</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Full-Stack Software Engineer</h3>
              <p className="text-gray-400">IQVIA • 2021-Present</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Software Engineering Immersive Bootcamp</h3>
              <p className="text-gray-400">General Assembly • 2020-2020</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Mid-Market Account Executive</h3>
              <p className="text-gray-400">Envoy • 2018-2020</p>
            </div>
          </div>
          
          {/* Other Projects - Span full width */}
          <div className="bg-gray-800 rounded-lg p-6 md:col-span-3 hover:bg-gray-700 transition duration-300">
            <h2 className="text-2xl font-bold mb-4 text-cyan-300">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'Post-Ed Planner', tech: 'Postgres, Express, React, NodeJS' },
                { name: 'Make-Your-Day (Momentum Clone)', tech: 'React, OpenWeather API' },
                { name: 'All-Inclusive Resort Searcher', tech: 'Mongo, Express, React, NodeJS, Heroku' },
                { name: 'Streamline Sports', tech: 'Javascript, CSS, HTML, Axios' }
              ].map((project) => (
                <div key={project.name} className="bg-gray-900 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
                  <p className="text-gray-400 text-sm">{project.tech}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact - Span 2 columns */}
          {/* <div className="bg-gray-800 rounded-lg p-6 md:col-span-2 hover:bg-gray-700 transition duration-300">
            <h2 className="text-2xl font-bold mb-4 text-cyan-300">Contact</h2>
            <p className="mb-4">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300">
              <button href="#" className="text-cyan-400 hover:text-cyan-300 px-4 py-2 m-2">
                <MailOutlined />
              </button>
              <button href="#" className="text-cyan-400 hover:text-cyan-300 px-4 py-2 m-2">
                <LinkedinOutlined />
              </button>
              <button href="#" className="text-cyan-400 hover:text-cyan-300 px-4 py-2 m-2">
                <GithubOutlined />
              </button>
            </div>
          </div> */}
          
          {/* Blog */}
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300">
            <h2 className="text-2xl font-bold mb-4 text-cyan-300">Latest Blog</h2>
            <h3 className="text-lg font-semibold mb-2">Mastering React Hooks</h3>
            <p className="text-gray-400 mb-4">March 15, 2025</p>
            <button className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition">Read More</button>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-8 text-center text-gray-500 py-4">
          <p>© 2025 Mike Zahuta. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};
