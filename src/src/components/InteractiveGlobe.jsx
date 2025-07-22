import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { visitedCountries } from '../assets/mydata';

const jsonUrl = 'https://cdn.jsdelivr.net/npm/visionscarto-world-atlas@1/world/110m.json';

const VISITED_COLOR = '#ff5722'; // Red-orange
const UNVISITED_COLOR = '#e0e7ef'; // Light neutral
const HOVER_COLOR = '#ff784e'; // Lighter red-orange

function normalizeName(name) {
  return name ? name.trim().toLowerCase() : '';
}

function getMatchingVisitedCountry(feature, countriesData) {
  if (!countriesData || !feature) return null;
  const countryName = feature.properties?.name;
  if (!countryName) return null;
  const normalizedCountryName = normalizeName(countryName);
  return visitedCountries.find(vc => {
    const normalizedVisitedName = normalizeName(vc.name);
    return normalizedVisitedName === normalizedCountryName;
  });
}

const InteractiveGlobe = () => {
  const svgRef = useRef();
  const [data, setData] = useState(null);
  const [infoPanel, setInfoPanel] = useState(null); // Holds info for the side panel
  const [hoveredCountryIdx, setHoveredCountryIdx] = useState(null);
  const rotationRef = useRef([-60, -10, 0]); // More left tilt
  const animationRef = useRef();
  const [isRotating, setIsRotating] = useState(true);

  // Fetch world data
  useEffect(() => {
    d3.json(jsonUrl).then(topojsonData => {
      const { countries, land } = topojsonData.objects;
      setData({
        land: topojson.feature(topojsonData, land),
        countries: topojson.feature(topojsonData, countries),
        countryNames: topojsonData.objects.countries.geometries.map(g => g.properties.name),
        interiors: topojson.mesh(topojsonData, countries, (a, b) => a !== b)
      });
    });
  }, []);

  // Draw and animate globe
  useEffect(() => {
    if (!data) return;
    const svg = d3.select(svgRef.current);
    const width = 600, height = 600;
    svg.selectAll('*').remove();

    // Projection
    const projection = d3.geoOrthographic()
      .scale(250)
      .translate([width / 2, height / 2])
      .clipAngle(90)
      .rotate(rotationRef.current);
    const path = d3.geoPath().projection(projection);
    const graticule = d3.geoGraticule();

    // Ocean
    svg.append('circle')
      .attr('cx', width / 2)
      .attr('cy', height / 2)
      .attr('r', 250)
      .attr('fill', '#b3d1f7');

    // Graticule
    svg.append('path')
      .datum(graticule)
      .attr('d', path)
      .attr('fill', 'none')
      .attr('stroke', '#fff')
      .attr('stroke-width', 0.5)
      .attr('opacity', 0.4);

    // Countries
    svg.selectAll('.land')
      .data(data.countries.features)
      .enter()
      .append('path')
      .attr('class', 'land')
      .attr('d', path)
      .attr('fill', (d, i) => {
        const match = getMatchingVisitedCountry(d, data.countries);
        if (hoveredCountryIdx === i && match) {
          return HOVER_COLOR;
        }
        return match ? VISITED_COLOR : UNVISITED_COLOR;
      })
      .attr('stroke', '#888')
      .attr('stroke-width', 0.5)
      .style('cursor', (d) => getMatchingVisitedCountry(d, data.countries) ? 'pointer' : 'default')
      .on('mouseover', function (event, d) {
        const match = getMatchingVisitedCountry(d, data.countries);
        if (match) {
          setHoveredCountryIdx(data.countries.features.indexOf(d));
          setInfoPanel({
            country: match.name,
            info: match
          });
        }
      })
      .on('mouseout', function () {
        setHoveredCountryIdx(null);
        setInfoPanel(null);
      });

    // Borders
    svg.append('path')
      .datum(data.interiors)
      .attr('class', 'borders')
      .attr('d', path)
      .attr('fill', 'none')
      .attr('stroke', '#fff')
      .attr('stroke-width', 0.8)
      .attr('opacity', 0.7);

    // Drag to rotate
    let lastRotation = [...rotationRef.current];
    svg.call(d3.drag()
      .on('start', () => setIsRotating(false))
      .on('drag', (event) => {
        lastRotation[0] += event.dx * 0.5;
        lastRotation[1] -= event.dy * 0.5;
        lastRotation[1] = Math.max(-90, Math.min(90, lastRotation[1]));
        rotationRef.current = [...lastRotation];
        projection.rotate(rotationRef.current);
        svg.selectAll('path.land').attr('d', path);
        svg.selectAll('path.borders').attr('d', path);
      })
      .on('end', () => {
        setTimeout(() => setIsRotating(true), 1000);
      })
    );

    // Animation
    function animate() {
      if (isRotating) {
        rotationRef.current[0] += 0.2;
        projection.rotate(rotationRef.current);
        svg.selectAll('path.land').attr('d', path);
        svg.selectAll('path.borders').attr('d', path);
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationRef.current);
  }, [data, isRotating, hoveredCountryIdx]);

  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center">
        <svg
          ref={svgRef}
          width={600}
          height={600}
        />
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>🌍 Drag to rotate manually • Visited countries are orange • Hover for details</p>
        </div>
      </div>
      {/* Absolutely positioned info panel in the top right */}
      {infoPanel && (
        <div className="absolute top-6 right-6 z-50 w-64 bg-white p-4 rounded-lg shadow-xl border-2 border-gray-200 h-fit">
          <h3 className="font-bold text-lg text-gray-800 mb-2">{infoPanel.country}</h3>
          <p className="text-sm text-orange-600 font-semibold mb-2">{infoPanel.info.year && `Visited: ${infoPanel.info.year}`}</p>
          <p className="text-sm text-gray-700 mb-1">{infoPanel.info.description}</p>
          {infoPanel.info.time_spent && (
            <p className="text-xs text-gray-500">Time spent: {infoPanel.info.time_spent} days</p>
          )}
        </div>
      )}
    </div>
  );
};

export default InteractiveGlobe;