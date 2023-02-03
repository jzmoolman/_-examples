import logo from './logo.svg';
import './App.css';
import * as d3 from 'd3'
import { nodes, links, MANY_BODY_STRENGTH } from './data';

const svg = d3.select('#container');

const width = +svg.attr('width');
const height = +svg.attr('height');
const centerX = width/2;
const centerY = height/2;


const simulation = d3.forceSimulation(nodes)
    .force("charge", d3.forceManyBody().strength(MANY_BODY_STRENGTH))
    .force("link", d3.forceLink(links).distance(d=>d.distance))
    .force("center", d3.forceCenter(centerX, centerY));

const dragInteraction = d3.drag()
    .on('drag', (event, node) => {
        node.fx = event.x;
        node.fy = event.y;
        simulation.alpha(1).restart();
    });

const lines = svg
    .selectAll('line')
    .data(links)
    .enter()
    .append('line')
    .attr('stroke', 'black')

const circles = svg
    .selectAll('circle')
    .data(nodes)
    .enter()
    .append('circle')
    .attr('fill', d => d.color)
    .attr('r', d => d.size)
    .call(dragInteraction);

const text = svg
    .selectAll('text')
    .data(nodes)
    .enter()
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'middle')
    .style('pointer-events', 'none')
    .text(d=>d.id);


    

simulation.on('tick', ()=> {
    console.log('tick');
    circles
        .attr('cx', (d) => {return d.x})
        .attr('cy', (d) => {return d.y});
    text
        .attr('x', (d) => {return d.x})
        .attr('y', (d) => {return d.y});
    lines
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);
})

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
