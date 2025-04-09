import React from 'react';
import './SkillsModal.css';
import HeartMemoji from '../assets/HeartMemoji.png';
import {Cloud, renderSimpleIcon, fetchSimpleIcons } from 'react-icon-cloud';
import { Modal } from 'antd';

const useIcons = (slugs) => {
    const [icons, setIcons] = React.useState()
    React.useEffect(() => {fetchSimpleIcons({slugs}).then(setIcons)}, [])

if (icons) {
    return Object.values(icons.simpleIcons).map((icon) => renderSimpleIcon({
      icon,
      size: 64,
      minContrastRatio: 1,
      aProps: {
        onClick: (e) => e.preventDefault(),
        color: 'white'
      }
    }))
  }
  
  return <a>Loading</a>
}

const options = {
    // ... other options
    pauseOnMouseOver: false,
    noTagsTimeout: false,
    // ... other options
  };

const slugs = [
  'amazonwebservices',
  'antdesign',
  'anthropic',
  'codecademy',
  'django',
  'flask',
  'figma',
  'freecodecamp',
  'mui',
  'nodedotjs',
  'nx',
  'openai',
  'python',
  'react',
  'redux',
  'tailwindcss',
  'typescript',
  'vite',
  'github',
  'googlecloud',
  'heroku',
  'kubernetes',
  'mongodb',
  'postgresql',
]

export default function SkillsModal({children, visible, onClose}) {
    if (!visible) return null;
    const icons = useIcons(slugs)

    return (
      <Modal
        open={visible}
        title="Frequently used technologies"
        onOk={onClose}
        onCancel={onClose}
        footer={"Created with ❤️ by patience, learning and of course, react-icon-cloud"}
        width={800}
        height={1000}
      >
        <Cloud
            canvasProps={{height: 800, width: 800, margin: '0 auto'}}
            tagCanvasOptions={options}
        >
            {icons}
        </Cloud>
      </Modal>
    );
  }