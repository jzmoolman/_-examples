import logo from './logo.svg';
import './App.css';
import * as d3 from 'd3'

const nodes = [
  {"id": "Alice"},
  {"id": "Bob"},
  {"id": "Carol"}
];

const links = [
  {"source": 0, "target": 1}, // Alice → Bob
  {"source": 1, "target": 2} // Bob → Carol
];

const svg = d3.select('#container');
console.log(svg);

const width = +svg.attr('width');
const height = +svg.attr('height');
const centerX = width/2;
const centerY = height/2;
console.log(width);


const simulation = d3.forceSimulation(nodes)
    .force("charge", d3.forceManyBody())
    .force("link", d3.forceLink(links))
    .force("center", d3.forceCenter(centerX, centerY));

const circles = svg
    .selectAll('circle')
    .data(nodes)
    .enter()
    .append('circle')
    .attr('r', 10);

const lines = svg
    .selectAll('line')
    .data(links)
    .enter()
    .append('line')
    .attr('stroke', 'black')
    

simulation.on('tick', ()=> {
    console.log('tick');
    circles
        .attr('cx', (d) => {return d.x})
        .attr('cy', (d) => {return d.y});
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
