import * as d3 from 'd3';
//dimensions of svg
const w = 500;
const h = 100;
//getting the JSON data
//data source
const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';
//requesting the data
d3.json(url, function(data){
    
});
const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);
