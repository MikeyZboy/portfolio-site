import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
const jsonUrl ='../assets/world-110m.json';

export const GlobeData = () => {
const [data, setData] = useState(null);

    useEffect(() => {
        d3.json(jsonUrl).then(topojsonData => {
            const {countries,land} = topojsonData.objects
            setData({
        land: topojson.feature(topojsonData, land),
        interiors: topojson.mesh(
        topojsonData, countries, (a, b)=>  a !== b)
    })});
    }, []);

    return data
}
