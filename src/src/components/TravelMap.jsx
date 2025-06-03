import React, { useState, useEffect, memo } from "react"
import { Modal, Button } from 'antd';
// import {
//     ComposableMap,
//     Geographies,
//     Geography,
//     Graticule,
//     Marker,
//     Sphere,
//     ZoomableGroup
// } from "react-simple-maps"
import InteractiveGlobe from "./InteractiveGlobe";

const TravelMap = ({ visible, onClose, setTooltipContent }) => {
    const [data, setData] = useState([]);

    const title = 'Places that have shaped me';
    const footer = [
        <Button key="back" onClick={onClose} className="text-cyan-400 hover:text-cyan-300 m-2">
            Back
        </Button>,
        ];

    const fetchCountries = async () => {
        try {
            const response = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error("Error fetching countries:", error);
        }
    };

    useEffect(() => {
        fetchCountries();
    },[]);

    if (!visible) return null;

    return (
        <Modal
            open={visible}
            title={title}
            onOk={onClose}
            onCancel={onClose}
            footer={footer}
            style={{
                width: "100%",
                height: "auto",
            }}
        >
            {data ? (
                // Trying a d3 option
                <InteractiveGlobe />

                // this is the React Simple Maps component
                // <ComposableMap>
                //      <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
                //     <Graticule stroke="#DDD" />
                //         <Geographies geography={data}>
                //             {({ geographies }) =>
                //             geographies.map((geo) => (
                //                 <Geography
                //                     key={geo.rsmKey}
                //                     geography={geo}
                //                     fill="#D3D3D3" // Light grey color for all countries
                //                     stroke="#000000" // Black for border lines
                //                     onMouseEnter={() => {
                //                         setTooltipContent(`${geo.properties.name}`);
                //                     }}
                //                     onMouseLeave={() => {
                //                         setTooltipContent("");
                //                     }}
                //                     style={{
                //                         default: {
                //                             fill: "#EEE",
                //                         },
                //                         hover: {
                //                             fill: "#F53",
                //                         },
                //                         pressed: {
                //                             fill: "#E42",
                //                         },
                //                     }}
                //                 />
                //             ))
                //         }
                //         </Geographies>
                //         <Marker coordinates={[-74.006, 40.7128]}>
                //             <circle r={10} fill="#F53" stroke="#000" strokeWidth={2} />
                //             <text textAnchor="middle" y={-15} style={{ fontSize: "12px", fill: "#000" }}>
                //                 New York
                //             </text>
                //         </Marker>
                // </ComposableMap>
            ):(
                <div className="text-center">
                    <p>Loading countries...</p>
                </div>
            )}
        </Modal>
    );
};

export default memo(TravelMap);