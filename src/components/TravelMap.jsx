import React, { useState, useEffect, memo } from "react"
import { Modal, Button } from 'antd';
import LivedMap from "./LivedMap";
import InteractiveGlobe from "./InteractiveGlobe";

const TravelMap = ({ visible, onClose, setTooltipContent }) => {
    const [data, setData] = useState([]);

    const title = 'Travel Thus Far';
    const footer = [
        <Button key="back" onClick={onClose} className="text-highlight-400 hover:text-highlight-300 m-2">
            Back
        </Button>,
        ];

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
                <InteractiveGlobe data={data}/>
            )}
        </Modal>
    );
};

export default memo(TravelMap);