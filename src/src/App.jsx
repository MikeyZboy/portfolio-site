import React, { useState } from 'react';
import HeartMemoji from './assets/HeartMemoji.png';
import zen from './assets/zen.png';
import working from './assets/working.png';
import CallMemoji from './assets/CallMemoji.png';
import cute from './assets/cute.png';
import {
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import './App.css'
import ProjectsModal from './components/ProjectsModal';
import SkillsModal from './components/SkillsModal';
import ExperienceModal from './components/ExperienceModal';
import TravelModal from './components/TravelModal';
import MemojiCarousel from './components/MemojiCarousel';

export const App = () => {
  const [isFeaturedProjectVisible, setIsFeaturedProjectVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [travelVisible, setTravelVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);

  const toggleFeaturedProjectModal = () => setIsFeaturedProjectVisible((prev) => !prev);
  const toggleLogoCloud = () => setSkillsVisible((prev) => !prev);
  const toggleTravelCloud = () => setTravelVisible((prev) => !prev);
  const toggleExperienceCloud = () => setExperienceVisible((prev) => !prev);

  const memojis = [
    { src: HeartMemoji, alt: 'Heart Memoji' },
    { src: zen, alt: 'Zen Memoji' },
    { src: working, alt: 'Working Memoji' },
    { src: cute, alt: 'Cute Memoji' },
    { src: CallMemoji, alt: 'Call Memoji' },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 container max-w-screen mx-auto">
      <div className="container max-w-screen mx-auto p-4">
        {/* Bento Box Layout */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
          {/* Welcome - Span 2 columns */}
          <div className="bg-gray-800 rounded-lg p-6 md:col-span-3 transition duration-300 grid grid-cols-2">

            <div className="col-span-1 text-left">
              <p className="mb-4 text-xl">
                Hello world, I am <b className="text-cyan-300">Mike Zahuta</b>, a passionate <b className="text-cyan-300">Full Stack Developer</b> with over 4 years of experience creating 
                responsive web apps. A long time ago, in a startup far, far away, I discovered my love for coding while I was selling SaaS products. 
                Now, I use my user-focused critical thinking and listening skills to help companies deliver the best software solutions possible.
              <br />
              <br />
                When I'm not coding, you can find me walking my dog, experimenting 
                with new spicy recipes, or trying to renovate something.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10"><i>contact</i></h2>
              <div className="bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300">
                <button href="#" className="text-cyan-300 hover:text-cyan-200 m-2">
                  <MailOutlined />
                </button>
                <button href="#" className="text-cyan-300 hover:text-cyan-200 m-2">
                  <LinkedinOutlined />
                </button>
                <button href="#" className="text-cyan-300 hover:text-cyan-200 m-2">
                  <GithubOutlined />
                </button>
                <button href="#" className="text-cyan-300 hover:text-cyan-200 m-2">
                  <CalendarOutlined />
                </button>
              </div>
            </div>
            {/* <div style={{ position: 'relative', width: '100%', height: '100%' }}> */}
            <div className="relative inset-0 flex items-center justify-center">
              <MemojiCarousel images={memojis} />
            </div>
          </div>
          
          {/* Featured Project/Skills/Experience - Span 3 columns */}
          <div className="flex-row bg-gray-800 rounded-lg mb-2 p-2 md:col-span-1 hover:bg-gray-700 transition duration-300 h-30 text-left overscroll-auto">
            <h2 className="text-2xl font-bold mb-1 text-gray-900"><i>current project</i></h2>
              <h2
                className="text-2xl font-semibold mb-2 cursor-pointer text-cyan-300 hover:text-cyan-200"
                onClick={toggleFeaturedProjectModal}
              >
                Your Ai Refund Agent (YARA)
              </h2>
              <ProjectsModal visible={isFeaturedProjectVisible} onClose={toggleFeaturedProjectModal} />
          </div> 

          {/* {LogoCloud Div} */}
          <div className="flex-col col-span-1">
            <div className="flex-row bg-gray-800 rounded-lg m-1">
              <h2 className="text-2xl font-semibold mb-2 cursor-pointer text-cyan-300 hover:text-cyan-200"
              onClick={toggleLogoCloud}>tech</h2>
            </div>
            <SkillsModal visible={skillsVisible} onClose={toggleLogoCloud} />
            
            <div className="flex-row bg-gray-800 rounded-lg m-1">
              <h2 className="text-2xl font-semibold mb-2 cursor-pointer text-cyan-300 hover:text-cyan-200"
              onClick={toggleTravelCloud}>ethos</h2>
            </div>
            {/* Travel Modal */}
            <TravelModal visible={travelVisible} onClose={toggleTravelCloud} />
            <div className="flex-row bg-gray-800 rounded-lg m-1">
              <h2 className="text-2xl font-semibold mb-2 cursor-pointer text-cyan-300 hover:text-cyan-200"
              onClick={toggleExperienceCloud}>background</h2>
            </div>
            {/* Experience Modal */}
              <ExperienceModal visible={experienceVisible} onClose={toggleExperienceCloud} />
          </div>

          {/* Experience */}
          <div className="flex-col container h-30 bg-gray-800 rounded-lg mb-2 p-2 hover:bg-gray-700 transition duration-300 text-left overflow-auto">
            <h2 className="text-2xl font-bold mb-1 text-gray-900"><i>current work</i></h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-cyan-300">Full-Stack Software Engineer I</h3>
              <p className="text-gray-300">IQVIA • 2021-Present</p>
            </div>
          </div>
          
          {/* Other Projects - Span full width */}
          <div className="bg-gray-800 rounded-lg mb-2 p-2 md:col-span-2 hover:bg-gray-700 transition duration-300 overflow-x-auto">
            <h2 className="text-2xl font-bold mb-1 text-gray-900 text-left"><i>past (not actively maintained)</i></h2>
            <div className="flex flex-row grid-cols-1 md:grid-cols-3 gap-2">
              {[
                { name: 'Post-Ed Planner', tech: 'Postgres, Express, React, NodeJS' },
                { name: 'Make-Your-Day (Momentum Clone)', tech: 'React, OpenWeather API' },
                { name: 'All-Inclusive Resort Searcher', tech: 'Mongo, Express, React, NodeJS, Heroku' },
                { name: 'Streamline Sports', tech: 'Javascript, CSS, HTML, Axios' }
              ].map((project) => (
                <div key={project.name} className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition duration-300">
                  <h3 className="text-lg font-semibold mb-1 text-cyan-300 hover:text-cyan-200">{project.name}</h3>
                  <p className="text-gray-400 text-sm">{project.tech}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="columns-2">
              <div className="h-15 bg-gray-800 rounded-lg mb-2 p-2 hover:bg-gray-700 transition duration-300 text-left overflow-auto">
                  <h3>Time</h3>
              </div>
              <div className="h-15 bg-gray-800 rounded-lg mb-2 p-2 hover:bg-gray-700 transition duration-300 text-left overflow-auto">
                  <h3>Feedback</h3>
              </div>
            </div>
            <div className="columns-2">
              <div className="h-15 bg-gray-800 rounded-lg mb-2 p-2 hover:bg-gray-700 transition duration-300 text-left overflow-auto">
                  <h3>Travel</h3>
              </div>
              <div className="h-15 bg-gray-800 rounded-lg mb-2 p-2 hover:bg-gray-700 transition duration-300 text-left overflow-auto">
                  <h3>Fun</h3>
              </div>
            </div>
            <footer className="mt-2 text-center text-gray-500 py-0">
              <p>© 2025 Mike Zahuta. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
