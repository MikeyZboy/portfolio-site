import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { visitedCountries } from '../assets/mydata'
const jsonUrl ='https://cdn.jsdelivr.net/npm/visionscarto-world-atlas@1/world/110m.json';

const InteractiveGlobe = () => {
  const svgRef = useRef();
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, data: null });
  const [isRotating, setIsRotating] = useState(true);
  const [data, setData] = useState(null);

  // Sample visited cities data - replace with your actual data
  const visitedCities = [
    { name: "New York", country: "USA", lat: 40.7128, lng: -74.0060, year: "2023", description: "Amazing skyline and Central Park" },
    { name: "Paris", country: "France", lat: 48.8566, lng: 2.3522, year: "2022", description: "Eiffel Tower and incredible museums" },
    { name: "London", country: "UK", lat: 51.5074, lng: -0.1278, year: "2021", description: "Historic landmarks and great theater" },
    { name: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194, year: "2020", description: "Golden Gate Bridge and vibrant culture" },
    { name: "San Luis Obispo", country: "USA", lat: 35.2828, lng: -120.6596, year: "2019", description: "Beautiful coastal town with great food" },
    { name: "Tijuana", country: "Mexico", lat: 32.5149, lng: -117.0382, year: "2018", description: "Vibrant culture and delicious tacos" },
    { name: "Dublin", country: "Ireland", lat: 53.3498, lng: -6.2603, year: "2017", description: "Friendly people and rich history" },
    { name: "Madrid", country: "Spain", lat: 40.4168, lng: -3.7038, year: "2016", description: "Art, culture, and delicious tapas" },
    { name: "Amsterdam", country: "Netherlands", lat: 52.3676, lng: 4.9041, year: "2015", description: "Canals, museums, and vibrant nightlife" },
    { name: "Stockholm", country: "Sweden", lat: 59.3293, lng: 18.0686, year: "2014", description: "Beautiful archipelago and rich history" },
    { name: "Sandviken", country: "Sweden", lat: 60.6167, lng: 16.7667, year: "2013", description: "Charming town with a rich industrial history" },
    { name: "Barcelona", country: "Spain", lat: 41.3851, lng: 2.1734, year: "2012", description: "Stunning architecture and vibrant culture" },
    { name: "Copenhagen", country: "Denmark", lat: 55.6761, lng: 12.5683, year: "2011", description: "Beautiful canals and modern design" },
    { name: "Granada", country: "Spain", lat: 37.1773, lng: -3.5986, year: "2010", description: "Historic Alhambra and stunning views" },
    { name: "Whistler", country: "Canada", lat: 50.1163, lng: -122.9574, year: "2009", description: "World-class skiing and beautiful mountains" },
    { name: "Kauai", country: "Hawaii, USA", lat: 22.0964, lng: -159.5261, year: "2008", description: "Stunning beaches and lush landscapes" },
    { name: "Prague", country: "Czech Republic", lat: 50.0755, lng: 14.4378, year: "2007", description: "Beautiful architecture and rich history" },
  ];

  // World map data (simplified - in production you'd load from topojson file)
  // const worldData = {
  //   type: "FeatureCollection",
  //   features: [...data?.land ? [data.land] : []]
      // Load land and interiors from topojson file if available
      // Example: ...data?.land ? [data.land] : []
      // For demo purposes, we'll create the globe effect with just the graticule
  // };
  // first fetch the data
  useEffect(() => {
    d3.json(jsonUrl).then(topojsonData => {
      const { countries, land } = topojsonData.objects;
      setData({
        land: topojson.feature(topojsonData, land),
        interiors: topojson.mesh(
          topojsonData, countries, (a, b) => a !== b
        )
      });
    });
  // }, []);

  // const landArray = data?.land.features[0].geometry.coordinates || [];

  // now set the svgRef and draw the globe
  // useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 600;
    const height = 600;

    // d3.json(jsonUrl).then(topojsonData => {
    //     const {countries,land} = topojsonData.objects
    //     setData({
    // land: topojson.feature(topojsonData, land),
    // interiors: topojson.mesh(
    // topojsonData, countries, (a, b)=>  a !== b)});
    // });
    
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
    
    const landFeatures = data?.land.features || [];

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
    const cityGroups = svg.selectAll(".name")
      .data(visitedCountries)
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
  console.log('data loaded?', data);
  return (
    data?.land ? (
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
    ) : (
      <div className="text-center">
        <p>Loading world map...</p>
      </div>
    )
  );
};

export default InteractiveGlobe;