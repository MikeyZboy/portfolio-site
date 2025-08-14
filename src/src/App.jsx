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
  CodeOutlined,
} from '@ant-design/icons';
import { Button, Tooltip, List, Flex } from 'antd';
import './App.css'
import ProjectsModal from './components/ProjectsModal';
import SkillsModal from './components/SkillsModal';
import ExperienceModal from './components/ExperienceModal';
import EthosModal from './components/EthosModal';
import MemojiCarousel from './components/MemojiCarousel';
import TimeDisplay from './components/CurrentTime';
import TravelMap from './components/TravelMap';
import ThemePicker from './components/ThemePicker';
import FunModal from './components/FunModal';

export const App = () => {
  const [isFeaturedProjectVisible, setIsFeaturedProjectVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [ethosVisible, setEthosVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [isFunModalVisible, setIsFunModalVisible] = useState(false);
  
  const toggleFeaturedProjectModal = () => setIsFeaturedProjectVisible((prev) => !prev);
  const toggleLogoCloud = () => setSkillsVisible((prev) => !prev);
  const toggleEthosCloud = () => setEthosVisible((prev) => !prev);
  const toggleExperienceCloud = () => setExperienceVisible((prev) => !prev);
  const toggleMap = () => setIsMapVisible((prev) => !prev);
  const toggleFunModal = () => setIsFunModalVisible((prev) => !prev);

  const memojis = [
    { src: HeartMemoji, alt: 'Heart Memoji' },
    { src: zen, alt: 'Zen Memoji' },
    { src: working, alt: 'Working Memoji' },
    { src: cute, alt: 'Cute Memoji' },
    { src: CallMemoji, alt: 'Call Memoji' },
  ];

  return (
    <Flex gap="middle" alig="flex-start" justify="center" className="min-h-screen bg-gray-900 text-gray-100">
    <div className="bg-gray-900 text-gray-100 container max-w-screen mx-auto">
      <div className="container max-w-screen mx-auto p-4">
        {/* Bento Box Layout */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
            {/* Welcome - Span 2 columns */}
            <div className="bg-gray-800 rounded-lg p-6 md:col-span-3 transition duration-300 grid grid-cols-2">

            <div className="col-span-1 text-left">
              <p className="mb-4 text-xl">
              Hello world, I am <b className="text-highlight-300">Mike Zahuta</b>, a passionate <b className="text-highlight-300">Full Stack Developer</b> with over 4 years of experience creating 
              responsive web apps. A long time ago, in a startup far, far away, I discovered my love for coding while I was selling SaaS products. 
              Now, I use my user-focused critical thinking and listening skills to help companies deliver the best software solutions possible.
              <br />
              <br />
              When I'm not coding, you can find me walking my dog, experimenting 
              with new spicy recipes, or trying to renovate something.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10"><i>contact</i></h2>
              <div className="bg-gray-800 rounded-lg">
                <Tooltip title="Drop me a message!">
                  <Button 
                    type="link"
                    icon={<MailOutlined style={{ color: 'var(--highlight-300)', fontSize: '32px' }} />}
                    className="m-6"
                    onClick={() => window.open('mailto:mike.zahuta@gmail.com', '_blank')}
                  />
                </Tooltip>
                <Tooltip title="Connect with me on LinkedIn!"> 
                  <Button
                    type="link"
                    icon={<LinkedinOutlined style={{ color: 'var(--highlight-300)', fontSize: '32px' }} />}
                    className="m-6"
                    onClick={() => window.open('https://www.linkedin.com/in/mikezahuta/', '_blank')}
                  />
                </Tooltip>
                <Tooltip title="Check out my GitHub!">
                  <Button
                    type="link"
                    icon={<GithubOutlined style={{ color: 'var(--highlight-300)', fontSize: '32px' }} />}
                    className="m-6"
                    onClick={() => window.open('https://github.com/MikeyZboy', '_blank')}
                  />
                </Tooltip>
                <Tooltip title="Schedule a meeting with me!">
                  <Button
                    type="link"
                    icon={<CalendarOutlined style={{ color: 'var(--highlight-300)', fontSize: '32px' }} />}
                    className="m-6"
                    onClick={() => window.open('https://calendly.com/mike-zahuta', '_blank')}
                  />
                </Tooltip>
              </div>
            </div>
              <div className="relative inset-0 flex items-center justify-center hidden md:block">
                <MemojiCarousel images={memojis} />
              </div>
          </div>
          
          {/* Featured Project/Skills/Experience - Span 3 columns */}
          <div className="flex-row bg-gray-800 rounded-lg mb-2 p-2 md:col-span-1 hover:bg-gray-700 transition duration-300 h-30 text-left overscroll-auto">
            <h2 className="text-2xl font-bold mb-1 text-gray-900"><i>current project</i></h2>
              <h2
                className="text-2xl font-semibold mb-2 cursor-pointer text-highlight-300 hover:text-highlight-200"
                onClick={toggleFeaturedProjectModal}
              >
                Your Ai Refund Agent (YARA)
              </h2>
              <ProjectsModal visible={isFeaturedProjectVisible} onClose={toggleFeaturedProjectModal} />
          </div> 

          {/* {LogoCloud Div} */}
          <div className="flex-col col-span-1">
            <div className="flex-row bg-gray-800 rounded-lg m-1">
              <h2 className="text-2xl font-semibold mb-2 cursor-pointer text-highlight-300 hover:text-highlight-200"
              onClick={toggleLogoCloud}>tech</h2>
            </div>
            <SkillsModal visible={skillsVisible} onClose={toggleLogoCloud} />
            
            <div className="flex-row bg-gray-800 rounded-lg m-1">
              <h2 className="text-2xl font-semibold mb-2 cursor-pointer text-highlight-300 hover:text-highlight-200"
              onClick={toggleEthosCloud}>ethos</h2>
            </div>
            {/* Travel Modal */}
            <EthosModal visible={ethosVisible} onClose={toggleEthosCloud} />
            <div className="flex-row bg-gray-800 rounded-lg m-1">
              <h2 className="text-2xl font-semibold mb-2 cursor-pointer text-highlight-300 hover:text-highlight-200"
              onClick={toggleExperienceCloud}>resume</h2>
            </div>
            {/* Experience Modal */}
              <ExperienceModal visible={experienceVisible} onClose={toggleExperienceCloud} />
          </div>

          {/* Experience */}
          <div className="flex-col container h-30 bg-gray-800 rounded-lg mb-2 p-2 hover:bg-gray-700 transition duration-300 text-left overflow-auto">
            <h2 className="text-2xl font-bold mb-1 text-gray-900"><i>current work</i></h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-highlight-300">Full-Stack Software Engineer</h3>
              <p className="text-gray-300">IQVIA • Nov 2021 - Present</p>
            </div>
          </div>
          
          {/* Other Projects - Span full width */}
          <div className="bg-gray-800 rounded-lg mb-2 p-2 md:col-span-2 hover:bg-gray-700 transition duration-300 overflow-x-auto">
            <h2 className="text-2xl font-bold mb-1 text-gray-900 text-left"><i>past projects (not actively maintained)</i></h2>
            <div className="flex flex-row grid-cols-1 md:grid-cols-3 gap-2">
              {[
                { 
                  name: 'Post-Ed Planner',
                  tech: 'Postgres, Express, React, NodeJS', 
                  link: 'https://github.com/MikeyZboy/PostBootCampPlanner', 
                  icon: <CodeOutlined style={{ color: 'var(--highlight-300)', fontSize: '24px' }} />
                },
                { 
                  name: 'Make-Your-Day (Momentum Clone)',
                  tech: 'React, OpenWeather API',
                  link: 'https://github.com/MikeyZboy/make-your-day', 
                  icon: <CodeOutlined style={{ color: 'var(--highlight-300)', fontSize: '24px' }}/> 
                },
                { 
                  name: 'All-Inclusive Resort Searcher', 
                  tech: 'Mongo, Express, React, NodeJS, Heroku', 
                  link: 'https://github.com/MikeyZboy/All_Inclusive', 
                  icon: <CodeOutlined style={{ color: 'var(--highlight-300)', fontSize: '24px' }} /> 
                },
                { name: 'Streamline Sports',
                  tech: 'Javascript, CSS, HTML, Axios', 
                  link: 'https://github.com/MikeyZboy/StreamlineSports', 
                  icon: <CodeOutlined style={{ color: 'var(--highlight-300)', fontSize: '24px' }} /> 
                },
              ].map((project) => (
                <div key={project.name} className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition duration-300 relative">
                  <h3 className="text-lg font-semibold mb-1 text-highlight-300 hover:text-highlight-200">{project.name}</h3>
                  <p className="text-gray-400 text-sm mb-10">{project.tech}</p>
                  <div className="absolute bottom-2 right-2 mt-5">
                    <Tooltip title="View Code">
                      <Button
                        type="link"
                        icon={project.icon}
                        className="m-1"
                        onClick={() => window.open(project.link, '_blank')}
                      />
                    </Tooltip>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="columns-2">
              <Flex justify="center" className="flex-col">
                {/* Clock component - responsive sizing to prevent overlap */}
                <div className="bg-gray-800 rounded-lg mb-2 hover:bg-gray-700 transition duration-300 text-left hidden sm:block">
                    <TimeDisplay />
                </div>

                <div className="flex-row bg-gray-800 rounded-lg mb-2 p-2 hover:bg-gray-700 transition duration-300 text-left overflow-auto">
                    <h2 className="text-2xl font-semibold mb-2 cursor-pointer text-highlight-300 hover:text-highlight-200" onClick={toggleMap}>
                      travel
                    </h2>
                </div>
                <TravelMap visible={isMapVisible} onClose={toggleMap} />

                <div className="flex-row bg-gray-800 rounded-lg mb-2 p-2 hover:bg-gray-700 transition duration-300 text-left overflow-auto">
                    <h3 className="text-2xl font-semibold mb-2 cursor-pointer text-highlight-300 hover:text-highlight-200" onClick={toggleFunModal}>
                      fun
                    </h3>
                </div>
                <FunModal visible={isFunModalVisible} onClose={toggleFunModal} />
                <div className="flex-row bg-gray-800 rounded-lg mb-2 p-2 hover:bg-gray-700 transition duration-300 text-left overflow-auto">
                    <h3 className="text-2xl font-semibold mb-2 cursor-pointer text-highlight-300 hover:text-highlight-200">
                    <ThemePicker visible={true} />
                    </h3>
                </div>
              </Flex>
            </div>
            <footer className="mt-2 text-center text-gray-500 py-0">
              <p>© 2025 Mike Zahuta. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
    </Flex>
  );
};
