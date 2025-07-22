import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
const jsonUrl = '../assets/world-110m.json';

export const GlobeData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        d3.json(jsonUrl).then(topojsonData => {
            const { countries, land } = topojsonData.objects;
            setData({
                land: topojson.feature(topojsonData, land),
                interiors: topojson.mesh(topojsonData, countries, (a, b) => a !== b),
                countries: topojson.feature(topojsonData, countries)
            });
        });
    }, []);

    return data;
};

export default function Globe({ data, places }) {
    const svgRef = useRef();
    const [rotate, setRotate] = useState([0, 0, 0]);
    const [dragging, setDragging] = useState(false);
    const mouseDownInfo = useRef({ mouse: null, rotate: [0, 0, 0] });

    useEffect(() => {
        if (!data || !data.countries) return;

        const svg = d3.select(svgRef.current)
            .attr("width", "800px")
            .attr("height", "800px");

        svg.selectAll("*").remove();

        const waterProjection = d3.geoOrthographic()
            .scale(380)
            .translate([400, 400]);
        const waterPath = d3.geoPath().projection(waterProjection);
        const circle = d3.geoCircle().center(waterProjection.center());

        const projection = d3.geoOrthographic()
            .scale(380)
            .translate([400, 400])
            .rotate(rotate);

        const path = d3.geoPath().projection(projection);

        svg.append("g")
            .append("path")
            .attr("fill", "#aadaff")
            .attr("d", _ => waterPath(circle()));

        const placesById = {};
        places.forEach(place => { placesById[place.id] = place });

        let feature = svg.selectAll("path.country")
            .data(data.countries.features)
            .enter().append("path")
            .attr("class", "country")
            .attr("fill", (d) => placesById[d.id] ? '#BBD9BA' : "#f4f4f4")
            .attr("stroke", "#aaa")
            .attr("d", path);

        feature.append("title")
            .text(d => d.properties.name);

        // Mouse events
        const mousedown = (event) => {
            mouseDownInfo.current.mouse = [event.pageX, event.pageY];
            mouseDownInfo.current.rotate = [...rotate];
            setDragging(true);
            event.preventDefault();
        };

        const mousemove = (event) => {
            if (mouseDownInfo.current.mouse) {
                const mouse = [event.pageX, event.pageY];
                const newRotate = [
                    mouseDownInfo.current.rotate[0] - (mouseDownInfo.current.mouse[0] - mouse[0]) / 8,
                    mouseDownInfo.current.rotate[1] - (mouse[1] - mouseDownInfo.current.mouse[1]) / 8,
                    0
                ];
                setRotate(newRotate);
            }
        };

        const mouseup = () => {
            if (mouseDownInfo.current.mouse) {
                setDragging(false);
                mouseDownInfo.current.mouse = null;
            }
        };

        svg.on("mousedown", mousedown);
        d3.select(window)
            .on("mousemove", dragging ? mousemove : null)
            .on("mouseup", mouseup);

        // Cleanup
        return () => {
            d3.select(window).on("mousemove", null).on("mouseup", null);
        };
    }, [data, places, rotate, dragging]);

    return <svg ref={svgRef}></svg>;
}