import React, { useState, useEffect } from "react";

// Example highlight colors
const COLORS = [
    { name: "Cyan", value: "#06b6d4" },
    { name: "Pink", value: "#ec4899" },
    { name: "Lime", value: "#84cc16" },
    { name: "Amber", value: "#f59e42" },
    { name: "Violet", value: "#8b5cf6" },
];

const HIGHLIGHT_KEY = "highlightColor";

function ThemePicker() {
    const [highlight, setHighlight] = useState(
        localStorage.getItem(HIGHLIGHT_KEY) || COLORS[0].value
    );

    useEffect(() => {
        document.documentElement.style.setProperty("--highlight-color", highlight);
        localStorage.setItem(HIGHLIGHT_KEY, highlight);
    }, [highlight]);

    return (
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <span>Highlight color:</span>
            {COLORS.map((color) => (
                <button
                    key={color.value}
                    onClick={() => setHighlight(color.value)}
                    style={{
                        background: color.value,
                        border:
                            highlight === color.value
                                ? "2px solid #333"
                                : "2px solid transparent",
                        borderRadius: "50%",
                        width: 32,
                        height: 32,
                        cursor: "pointer",
                        outline: "none",
                    }}
                    aria-label={color.name}
                />
            ))}
        </div>
    );
}

export default ThemePicker;