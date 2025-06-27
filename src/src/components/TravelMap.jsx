import React, { useState, useEffect, memo } from "react"
import { Modal, Button } from 'antd';
import LivedMap from "./LivedMap";
import InteractiveGlobe from "./InteractiveGlobe";

const TravelMap = ({ visible, onClose, setTooltipContent }) => {
    const [data, setData] = useState([]);

    const title = 'Places that have shaped me';
    const footer = [
        <Button key="back" onClick={onClose} className="text-cyan-400 hover:text-cyan-300 m-2">
            Back
        </Button>,
        ];

    // const fetchCountries = async () => {
    //     try {
    //         const response = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
    //         const data = await response.json();
    //         setData(data);
    //     } catch (error) {
    //         console.error("Error fetching countries:", error);
    //     }
    // };

    // useEffect(() => {
    //     fetchCountries();
    // },[]);

    if (!visible) return null;

    return (
        <Modal
            open={visible}
            title={title}
            onOk={onClose}
            onCancel={onClose}
            footer={footer}
            width={1000}
        >
            {data && (
                // Trying a d3 option
                // <InteractiveGlobe />
                // Using React Simple Maps
                // <LivedMap />
                <InteractiveGlobe data={data}/>
            )}
        </Modal>
    );
};

export default memo(TravelMap);