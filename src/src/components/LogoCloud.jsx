import React from 'react';
import HeartMemoji from '../assets/HeartMemoji.png';
import {Cloud, renderSimpleIcon, fetchSimpleIcons } from 'react-icon-cloud';

const useIcons = (slugs) => {
    const [icons, setIcons] = React.useState()
    React.useEffect(() => {fetchSimpleIcons({slugs}).then(setIcons)}, [])

if (icons) {
    return Object.values(icons.simpleIcons).map((icon) => renderSimpleIcon({
      icon,
      size: 42,
      aProps: {
        onClick: (e) => e.preventDefault()
      }
    }))
  }
  
  return <a>Loading</a>
}

const slugs = [
  'amazonaws',
  'python',
  'typescript',
  'antdesign',
  'react',
  'redux',
  'tailwindcss',
  'vite',
  'visualstudiocode'
]

export default function LogoCloud({children}) {
    const icons = useIcons(slugs)

    return (
        <Cloud canvasProps={{width: 800, height: 400 }}>
            {icons}
        </Cloud>
    );
  }