import React, { useState } from 'react';
import HeartMemoji from './assets/HeartMemoji.png';
import {
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import './App.css'
import ProjectsModal from './components/ProjectsModal';
import SkillsModal from './components/SkillsModal';

export const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const toggleModal = () => setIsModalVisible((prev) => !prev);
  const toggleLogoCloud = () => setSkillsVisible((prev) => !prev);

  return (
    <div className="bg-gray-900 text-gray-100 container max-w-screen mx-auto">
      <div className="container max-w-screen mx-auto p-4">
        {/* Bento Box Layout */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
          {/* Welcome - Span 2 columns */}
          <div className="bg-gray-800 rounded-lg p-6 md:col-span-3 transition duration-300 grid grid-cols-2">

            <div className="col-span-1 text-left">
              <p className="mb-4">
                Hello world, I am <b className="text-cyan-300">Mike Zahuta</b>, a passionate <b className="text-cyan-300">Full Stack Developer</b> with over 4 years of experience creating 
                responsive web apps. A long time ago, in a startup far, far away, I discovered my love for coding when I used to sell SaaS products. 
                Now, I use my user-focused critical thinking and listening skills to help companies deliver the best software solutions possible.
              </p>
              <p>
                When I'm not coding, you can find me walking my dog, experimenting 
                with new spicy recipes, or trying to renovate something.
              </p>

              <h2 className="text-2xl font-bold text-gray-700 mt-10"><i>contact</i></h2>
              <div className="bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300">
                <button href="#" className="text-cyan-400 hover:text-cyan-300 m-2">
                  <MailOutlined />
                </button>
                <button href="#" className="text-cyan-400 hover:text-cyan-300 m-2">
                  <LinkedinOutlined />
                </button>
                <button href="#" className="text-cyan-400 hover:text-cyan-300 m-2">
                  <GithubOutlined />
                </button>
              </div>

            {/* <div className="h-75 w-75 md:col-span-1 overflow-hidden">
            <LogoCloud />
            </div> */}

            </div>
              <div className="flex justify-center items-center h-full">
                <img src={HeartMemoji} alt="Heart Memoji" className="z-0 w-86 h-86 mx-auto mb-4" />
              </div>
          </div>
          
          {/* Featured Project/Skills/Experience - Span 3 columns */}
          <div className="flex-row bg-gray-800 rounded-lg p-3 md:col-span-1 hover:bg-gray-700 transition duration-300 h-30 text-left overscroll-auto">
            <h2 className="text-2xl font-bold mb-1 text-gray-700 hover:text-gray-200"><i>current</i></h2>
              <h2
                className="text-2xl font-semibold mb-2 cursor-pointer text-cyan-400 hover:text-cyan-300"
                onClick={toggleModal}
              >
                Your Ai Refund Agent (YARA)
              </h2>
              <ProjectsModal visible={isModalVisible} onClose={toggleModal} />
          </div> 

          {/* {LogoCloud Div} */}
          <div className="flex-col col-span-1">
            <div className="flex-row bg-gray-800 rounded-lg m-1">
              <h2 className="text-2xl font-semibold mb-2 cursor-pointer text-cyan-400 hover:text-cyan-300"
              onClick={toggleLogoCloud}>skills</h2>
            </div>
            <SkillsModal visible={skillsVisible} onClose={toggleLogoCloud} />
            
            <div className="flex-row bg-gray-800 rounded-lg m-1">
              <h2 className="text-2xl font-semibold mb-2 cursor-pointer text-cyan-400 hover:text-cyan-300"
              onClick={toggleLogoCloud}>travel</h2>
            </div>
            <div className="flex-row bg-gray-800 rounded-lg m-1">
              <h2 className="text-2xl font-semibold mb-2 cursor-pointer text-cyan-400 hover:text-cyan-300"
              onClick={toggleLogoCloud}>education</h2>
            </div>
          </div>

          {/* Experience */}
          <div className="flex-col container h-30 bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition duration-300 text-left overflow-auto">
            <h2 className="text-2xl font-bold mb-1 text-gray-700 hover:text-gray-200"><i>experience</i></h2>
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
          <div className="bg-gray-800 rounded-lg p-3 md:col-span-2 hover:bg-gray-700 transition duration-300 overflow-x-auto">
            <h2 className="text-2xl font-bold mb-1 text-gray-700 text-left"><i>past</i></h2>
            <div className="flex flex-row grid-cols-1 md:grid-cols-3 gap-2">
              {[
                { name: 'Post-Ed Planner', tech: 'Postgres, Express, React, NodeJS' },
                { name: 'Make-Your-Day (Momentum Clone)', tech: 'React, OpenWeather API' },
                { name: 'All-Inclusive Resort Searcher', tech: 'Mongo, Express, React, NodeJS, Heroku' },
                { name: 'Streamline Sports', tech: 'Javascript, CSS, HTML, Axios' }
              ].map((project) => (
                <div key={project.name} className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition duration-300">
                  <h3 className="text-lg font-semibold mb-1">{project.name}</h3>
                  <p className="text-gray-400 text-sm">{project.tech}</p>
                </div>
              ))}
            </div>
          </div>
        <div>
          {/* <div className="h-50 w-auto bg-gray-800 md:col-span-1 hover:bg-gray-200 transition duration-300"> */}

          {/* </div> */}
        </div>
        </div>
        {/* <div>
          <LogoCloud />
        </div> */}
        {/* Footer */}
        <footer className="mt-8 text-center text-gray-500 py-4">
          <p>© 2025 Mike Zahuta. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};
