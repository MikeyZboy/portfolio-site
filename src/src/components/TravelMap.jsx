import { useLayoutEffect } from 'react';
import { Modal } from 'antd';
import * as am5 from "@amcharts/amcharts5";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

export default function TravelMap ({ visible, onClose }) {

    // if (!visible) return null;

    // let root = am5.Root.new("chartdiv");
    // let chart = root.container.children.push(
    // am5map.MapChart.new(root, {
    //     panX: "rotateX",
    //     projection: am5map.geoNaturalEarth1()
    // })
    // );

    // let polygonSeries = chart.series.push(
    //     // this could be a lineseries also to draw lines on map
    //     am5map.MapPolygonSeries.new(root, {
    //       geoJSON: am5geodata_worldLow
    //     })
    //   );

      return (
        <div id="chartdiv" className="bgcolor-gray-800 rounded-lg mb-2 p-2 hover:bg-gray-700 transition duration-300 overflow-x-auto">
            <h2 className="text-2xl font-bold mb-1 text-gray-900 text-left"><i>MAP SHOULD BE HERE</i></h2>
            {/* <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
            <button onClick={onClose} className="close-button">Close</button> */}
        </div>
    );
};


{/* <Modal
open={visible}
title="Travel Map"
onOk={onClose}
onCancel={onClose}
footer={null}
width={800}
centered
id="chartdiv"
> */}