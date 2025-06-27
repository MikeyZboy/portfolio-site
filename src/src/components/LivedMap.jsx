import React, { useState, useEffect, useMemo } from "react";
import * as d3 from "d3";
import {
    ComposableMap,
    Geographies,
    Geography,
    Graticule,
    Marker,
    Sphere,
    ZoomableGroup
} from "react-simple-maps"
import { scaleLinear } from "d3-scale";
import { visitedCountries } from "../assets/mydata";

const LivedMap = () => {
    const [tooltipContent, setTooltipContent] = useState("");
    const [globeData, setGlobeData] = useState([]);
    const [maxValue, setMaxValue] = useState(0);
    const [visitedData, setVisitedData] = useState([]);
    
    const colorScale = useMemo(
        () => {
            return scaleLinear()
                .domain([0.01, 37])
                .range(["#cceeff", "#66ccff"])
        },
        [maxValue]
    );

    const fetchData = async () => {
        const response = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
        const data = await response.json();
        setGlobeData(data);
    };


    useEffect(() => {
        fetchData();
        const sortedCities = visitedCountries.toSorted((a, b) => b - a);
        setVisitedData(sortedCities);
        const max = Math.max(...visitedCountries.map(d => d.time_spent), 0.00);
        setMaxValue(max);
    }, []);

return (
    <div style={{ height: '75vh', width: '100%' }}>
    <ComposableMap
        projectionConfig={{
            rotate: [-10, 0, 0],
            scale: 132
        }}
    >
            <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
            <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
            <Geographies geography={globeData}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const d = visitedData.find((visitedData) => visitedData.name === geo.properties.name);
                    // d ? geo.properties.color = colorScale(d.time_spent) : geo.properties.color = "#e6e6e6"; // Default color for countries not visited
                    return (
                    <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={d ? colorScale(d.time_spent) : "#e6e6e6"}
                        stroke="#000000" // Black for border lines
                        onMouseEnter={() => {
                            setTooltipContent(`${geo.properties.name}`);
                        }}
                        onMouseLeave={() => {
                            setTooltipContent("");
                        }}
                    />
                  )})
                }
            </Geographies>
        </ComposableMap>
    </div>
    );
};

export default LivedMap;
