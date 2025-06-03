import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
const jsonUrl ='../assets/world-110m.json';

const InteractiveGlobe = () => {
  const svgRef = useRef();
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, data: null });
  const [isRotating, setIsRotating] = useState(true);
  const [data, setData] = useState(null);

  // Sample visited cities data - replace with your actual data
  const visitedCities = [
    { name: "New York", country: "USA", lat: 40.7128, lng: -74.0060, year: "2023", description: "Amazing skyline and Central Park" },
    { name: "Paris", country: "France", lat: 48.8566, lng: 2.3522, year: "2022", description: "Eiffel Tower and incredible museums" },
    // { name: "Tokyo", country: "Japan", lat: 35.6762, lng: 139.6503, year: "2023", description: "Blend of modern and traditional culture" },
    { name: "London", country: "UK", lat: 51.5074, lng: -0.1278, year: "2021", description: "Historic landmarks and great theater" },
    // { name: "Sydney", country: "Australia", lat: -33.8688, lng: 151.2093, year: "2022", description: "Beautiful harbor and opera house" },
    // { name: "Rio de Janeiro", country: "Brazil", lat: -22.9068, lng: -43.1729, year: "2023", description: "Christ the Redeemer and Copacabana" },
    // { name: "Cairo", country: "Egypt", lat: 30.0444, lng: 31.2357, year: "2021", description: "Ancient pyramids and rich history" },
    // { name: "Mumbai", country: "India", lat: 19.0760, lng: 72.8777, year: "2022", description: "Vibrant culture and Bollywood" }
  ];

  // World map data (simplified - in production you'd load from topojson file)
  const worldData = {
    type: "FeatureCollection",
    features: [...data?.land ? [data.land] : []]
      // Load land and interiors from topojson file if available
      // Example: ...data?.land ? [data.land] : []
      // For demo purposes, we'll create the globe effect with just the graticule
  };
  console.log('worldData', worldData);
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 600;
    const height = 600;

    d3.json(jsonUrl).then(topojsonData => {
        const {countries,land} = topojsonData.objects
        setData({
    land: topojson.feature(topojsonData, land),
    interiors: topojson.mesh(
    topojsonData, countries, (a, b)=>  a !== b)});
    });
    
    svg.selectAll("*").remove();
    
    const projection = d3.geoOrthographic()
      .scale(250)
      .translate([width / 2, height / 2])
      .clipAngle(90);
    
    const path = d3.geoPath().projection(projection);
    const graticule = d3.geoGraticule();
    
    // Add sphere (ocean)
    svg.append("circle")
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("r", 250)
      .attr("fill", "#4a90e2")
      .attr("stroke", "#2c5aa0")
      .attr("stroke-width", 2);
    
    // Add graticule (grid lines)
    svg.append("path")
      .datum(graticule)
      .attr("d", path)
      .attr("fill", "none")
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 0.5)
      .attr("opacity", 0.3);
    
    // Add land masses (simplified)
    // const landFeatures = [
    //   // North America
    //   { type: "Feature", geometry: { type: "Polygon", coordinates: [[[-140, 60], [-140, 10], [-60, 10], [-60, 60], [-140, 60]]] }},
    //   // Europe
    //   { type: "Feature", geometry: { type: "Polygon", coordinates: [[[0, 60], [0, 35], [40, 35], [40, 60], [0, 60]]] }},
    //   // Asia
    //   { type: "Feature", geometry: { type: "Polygon", coordinates: [[[40, 60], [40, 10], [140, 10], [140, 60], [40, 60]]] }},
    //   // Africa
    //   { type: "Feature", geometry: { type: "Polygon", coordinates: [[[0, 35], [0, -35], [40, -35], [40, 35], [0, 35]]] }},
    //   // South America
    //   { type: "Feature", geometry: { type: "Polygon", coordinates: [[[-80, 10], [-80, -60], [-35, -60], [-35, 10], [-80, 10]]] }},
    //   // Australia
    //   { type: "Feature", geometry: { type: "Polygon", coordinates: [[[110, -10], [110, -45], [155, -45], [155, -10], [110, -10]]] }}
    // ];
    console.log(data);
    const landFeatures = data?.land ? [data.land] : [];
    
    svg.selectAll(".land")
      .data(landFeatures)
      .enter()
      .append("path")
      .attr("class", "land")
      .attr("d", path)
      .attr("fill", "#90EE90")
      .attr("stroke", "#228B22")
      .attr("stroke-width", 0.5);
    
    // Add visited cities
    const cityGroups = svg.selectAll(".city")
      .data(visitedCities)
      .enter()
      .append("g")
      .attr("class", "city");
    
    // City markers
    cityGroups.append("circle")
      .attr("r", 4)
      .attr("fill", "#ff6b6b")
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 2)
      .style("cursor", "pointer")
      .on("mouseover", (event, d) => {
        const [x, y] = projection([d.lng, d.lat]);
        if (x && y) {
          setTooltip({
            visible: true,
            x: event.pageX,
            y: event.pageY,
            data: d
          });
        }
      })
      .on("mouseout", () => {
        setTooltip({ visible: false, x: 0, y: 0, data: null });
      })
      .on("mousemove", (event) => {
        setTooltip(prev => ({
          ...prev,
          x: event.pageX,
          y: event.pageY
        }));
      });
    
    // City labels
    cityGroups.append("text")
      .attr("dx", 8)
      .attr("dy", 4)
      .style("font-size", "10px")
      .style("font-weight", "bold")
      .style("fill", "#333")
      .style("text-shadow", "1px 1px 1px rgba(255,255,255,0.8)")
      .text(d => d.name);
    
    // Position cities and labels
    const updatePositions = () => {
      cityGroups.attr("transform", d => {
        const coords = projection([d.lng, d.lat]);
        return coords ? `translate(${coords[0]}, ${coords[1]})` : null;
      })
      .style("display", d => {
        const coords = projection([d.lng, d.lat]);
        // Hide cities on the back of the globe
        return coords && coords[0] >= 0 && coords[0] <= width && coords[1] >= 0 && coords[1] <= height ? "block" : "none";
      });
    };
    
    updatePositions();
    
    // Auto-rotation
    let rotationTimer;
    if (isRotating) {
      rotationTimer = d3.timer((elapsed) => {
        const rotate = projection.rotate();
        projection.rotate([rotate[0] + 0.2, rotate[1]]);
        
        // Update all paths and positions
        svg.selectAll("path").attr("d", path);
        updatePositions();
      });
    }
    
    // Manual rotation on drag
    const drag = d3.drag()
      .on("start", () => {
        setIsRotating(false);
        if (rotationTimer) rotationTimer.stop();
      })
      .on("drag", (event) => {
        const rotate = projection.rotate();
        projection.rotate([rotate[0] + event.dx * 0.5, rotate[1] - event.dy * 0.5]);
        
        svg.selectAll("path").attr("d", path);
        updatePositions();
      });
    
    svg.call(drag);
    
    return () => {
      if (rotationTimer) rotationTimer.stop();
    };
  }, [isRotating]);

  return (
    <div className="relative">
      <div className="mb-4 flex justify-center">
        <button
          onClick={() => setIsRotating(!isRotating)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          {isRotating ? 'Pause Rotation' : 'Start Rotation'}
        </button>
      </div>
      
      <div className="flex justify-center">
        <svg
          ref={svgRef}
          width={600}
          height={600}
          className="border border-gray-300 rounded-lg shadow-lg bg-gradient-to-b from-blue-400 to-blue-600"
        />
      </div>
      
      {tooltip.visible && tooltip.data && (
        <div
          className="absolute z-10 bg-white p-3 rounded-lg shadow-lg border max-w-xs"
          style={{
            left: tooltip.x + 10,
            top: tooltip.y - 10,
            transform: 'translateY(-100%)'
          }}
        >
          <h3 className="font-bold text-lg text-gray-800">{tooltip.data.name}</h3>
          <p className="text-sm text-gray-600">{tooltip.data.country}</p>
          <p className="text-sm text-blue-600 font-semibold">Visited: {tooltip.data.year}</p>
          <p className="text-sm text-gray-700 mt-1">{tooltip.data.description}</p>
        </div>
      )}
      
      <div className="mt-6 text-center">
        <h3 className="text-lg font-semibold mb-2">Cities Visited ({visitedCities.length})</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-2xl mx-auto">
          {visitedCities.map((city, index) => (
            <div key={index} className="text-sm p-2 bg-gray-100 rounded">
              <span className="font-medium">{city.name}</span>
              <span className="text-gray-600 block">{city.year}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>🌍 Drag to rotate manually • Red markers show visited cities</p>
      </div>
    </div>
  );
};

export default InteractiveGlobe;