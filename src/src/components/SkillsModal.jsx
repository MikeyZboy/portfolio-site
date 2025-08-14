import React from 'react';
import './SkillsModal.css';
import {Cloud, renderSimpleIcon, fetchSimpleIcons } from 'react-icon-cloud';
import { Modal, Typography, Tooltip, Button } from 'antd';

const useIcons = (slugs) => {
  const [icons, setIcons] = React.useState()
  React.useEffect(() => {fetchSimpleIcons({slugs}).then(setIcons)}, [])

  const showTooltip = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const iconDescription = e.target.title || 'No description available';

    return (
      <Tooltip title={iconDescription} placement="top">
        <span>{iconDescription}</span>
      </Tooltip>
    )
    // const tooltip = document.createElement('div');
    // tooltip.style.position = 'absolute';
    // tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    // tooltip.style.color = 'white';
    // tooltip.style.padding = '5px 10px';
    // tooltip.style.borderRadius = '5px';
    // tooltip.style.fontSize = '12px';
    // tooltip.style.pointerEvents = 'none';
    // tooltip.style.zIndex = '1000';
    // tooltip.innerText = iconDescription;

    // document.body.appendChild(tooltip);

    // const moveTooltip = (event) => {
    //   tooltip.style.left = `${event.pageX + 10}px`;
    //   tooltip.style.top = `${event.pageY + 10}px`;
    // };

    // document.addEventListener('mousemove', moveTooltip);

    // e.target.addEventListener('mouseleave', () => {
    //   document.body.removeChild(tooltip);
    //   document.removeEventListener('mousemove', moveTooltip);
    // }, { once: true });
    // return (
    //   <span>
    //     <p>{iconDescription}</p>
    //   </span>
    // )
    
  };

  if (icons) {
      return Object.values(icons.simpleIcons).map((icon) => renderSimpleIcon({
        icon,
        size: 64,
        minContrastRatio: 1,
        aProps: {
          onClick: (e) => {
            <Tooltip title={e.target.title} placement="top" />
          },
          color: 'blue',
        }
      }))
    }
  
  return <a>Loading</a>
}
const options = {
  onmouseover: (e) => {
    showTooltip(e);
  },
}

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
  'heroku',
  'kubernetes',
  'mongodb',
  'postgresql',
]

export default function SkillsModal({children, visible, onClose}) {
  const icons = useIcons(slugs)
  
  if (!visible) return null;
    return (
      <Modal
        open={visible}
        title="Frequently used technologies"
        onOk={onClose}
        onCancel={onClose}
        footer={
        <>
          <Button key="back" onClick={onClose} className="text-highlight-400 hover:text-highlight-300 m-2">
              Back
          </Button>
          <Typography.Paragraph
            className="text-center"
            style={{ marginTop: 16 }}
          >
          Created with joy by <i>react-icon-cloud</i>
          </Typography.Paragraph>
        </>
        }
        className="canvas"
      >
        <Cloud
            canvasProps={{height: 800, width: 800, border: '2px solid black' }}
            className="flex justify-center items-center border-2 border-gray-900 rounded-lg"
            style={{
              height: '100%',
              width: '100%',
              position: 'relative',
            }}
            options={options}
        >
            {icons}
        </Cloud>
      </Modal>
    );
  }