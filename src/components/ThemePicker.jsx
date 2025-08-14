import React, { useState, useEffect } from "react";
import { Button, Modal } from 'antd';

const HIGHLIGHT_KEY = "highlightColor";

export default function ThemePicker({ children, onClose, visible }) {
    // const title = 'Choose Your Color Theme'
    // const footer = [
    //     <Button key="back" onClick={onClose} className="text-highlight-400 hover:text-highlight-300 m-2">
    //         Back
    //     </Button>,
    // ]
    const [highlight, setHighlight] = useState(
        localStorage.getItem(HIGHLIGHT_KEY) || "#67e8f9"
    );

    useEffect(() => {
        // Set the main highlight color
        document.documentElement.style.setProperty("--highlight-color", highlight);
        
        // Generate lighter and darker variations for the theme
        const root = document.documentElement;
        root.style.setProperty("--highlight-50", generateLighterColor(highlight, 0.9));
        root.style.setProperty("--highlight-100", generateLighterColor(highlight, 0.8));
        root.style.setProperty("--highlight-200", generateLighterColor(highlight, 0.6));
        root.style.setProperty("--highlight-300", generateLighterColor(highlight, 0.4));
        root.style.setProperty("--highlight-400", generateLighterColor(highlight, 0.2));
        root.style.setProperty("--highlight-500", highlight);
        root.style.setProperty("--highlight-600", generateDarkerColor(highlight, 0.2));
        root.style.setProperty("--highlight-700", generateDarkerColor(highlight, 0.4));
        root.style.setProperty("--highlight-800", generateDarkerColor(highlight, 0.6));
        root.style.setProperty("--highlight-900", generateDarkerColor(highlight, 0.8));
        
        localStorage.setItem(HIGHLIGHT_KEY, highlight);
    }, [highlight]);

    // Helper function to generate lighter color variations
    const generateLighterColor = (hex, factor) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        
        const newR = Math.min(255, r + (255 - r) * factor);
        const newG = Math.min(255, g + (255 - g) * factor);
        const newB = Math.min(255, b + (255 - b) * factor);
        
        return `#${Math.round(newR).toString(16).padStart(2, '0')}${Math.round(newG).toString(16).padStart(2, '0')}${Math.round(newB).toString(16).padStart(2, '0')}`;
    };

    // Helper function to generate darker color variations
    const generateDarkerColor = (hex, factor) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        
        const newR = Math.max(0, r * (1 - factor));
        const newG = Math.max(0, g * (1 - factor));
        const newB = Math.max(0, b * (1 - factor));
        
        return `#${Math.round(newR).toString(16).padStart(2, '0')}${Math.round(newG).toString(16).padStart(2, '0')}${Math.round(newB).toString(16).padStart(2, '0')}`;
    };

    if (!visible) return null;

    return (
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <span>highlight:</span>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <input
                    type="color"
                    value={highlight}
                    onChange={(e) => setHighlight(e.target.value)}
                    style={{
                        width: 40,
                        height: 40,
                        // border: "2px solid #333",
                        // borderRadius: "1.5em",
                        cursor: "pointer",
                        // outline: "none",
                        // padding: 0,
                        backgroundColor: "transparent"
                    }}
                />
            </div>
        </div>
    );
}