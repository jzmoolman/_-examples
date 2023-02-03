import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { arc } from 'd3'
import { select } from 'd3'
import { Graph } from 'd3-graph'
import { ForceGraph } from './forcegraph'
import './App.css';

type d3Node = {
  id: string,
  group: number
};

type d3Link = {
  source: string,
  target: string,
  value: number
};

type d3Graph = {
  nodes: d3Node[],
  links: d3Link[]
};

console.log(arc)

interface IProps {

}

interface IState {  

}

const mountArc = arc()
    .innerRadius(0)
    .outerRadius(100)
    .startAngle(0)
    .endAngle(Math.PI / 2);



    // graph payload (with minimalist structure)
const data2 = {
  nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
  links: [
    { source: "Harry", target: "Sally" },
    { source: "Harry", target: "Alice" },
  ],
};

// the graph configuration, just override the ones you need
const myConfig = {
  nodeHighlightBehavior: true,
  node: {
    color: "lightgreen",
    size: 120,
    highlightStrokeColor: "blue",
  },
  link: {
    highlightColor: "lightblue",
  },
};

const onClickNode = function(nodeId: number) {
  window.alert(`Clicked node ${nodeId}`);
};

const onClickLink = function(source, target) {
  window.alert(`Clicked link between ${source} and ${target}`);
};


// console.log(mountArc())

// class App extends React.Component<IProps, IState> {
//     ref!: SVGSVGElement;


//     private buildGraph(data: Array<number>) {
//         const width = 200,
//         scaleFactor = 10,
//         barHeight = 20;
    
//         const graph = d3.select(this.ref)
//           .attr("width", width)
//           .attr("height", barHeight * data.length);
    
//         const bar = graph.selectAll("g")
//           .data(data)
//           .enter()
//           .append("g")
//           .attr("transform", function(d, i) {
//                 return "translate(0," + i * barHeight + ")";
//           });
    
//         bar.append("rect")
//           .attr("width", function(d) {
//                     return d * scaleFactor;
//           })
//           .attr("height", barHeight - 1);
           
//         bar.append("text")
//           .attr("x", function(d) { return (d*scaleFactor); })
//           .attr("y", barHeight / 2)
//           .attr("dy", ".35em")
//           .text(function(d) { return d; });
        
//       }

//     componentDidMount() {
//         // this.buildGraph([5,10,12])
    
//     }

const data = [
  {
      name: 'foo',
      number: 9000
  },
  {
      name: 'bar',
      number: 2340
  },
  
  {
      name: 'baz',
      number: 3463
  },
  
  {
      name: 'hoge',
      number: 7655
  },
  
  {
      name: 'piyo',
      number: 8746
  },
  
]


const App : React.FC = () => {
        const ref = useRef(null);
        const [selection, setSelection] = useState<null | d3.Selection<null, unknown, null, undefined>>(null) 

        const maxValue = d3.max(data, d=>d.number)
        const y = d3.scaleLinear()
            .domain([0, maxValue!])
            .range([0, 500])
        
        const x =d3.scaleBand()
            .domain(data.map(d=>d.name))
            .range([0,800])
            .paddingInner(0.5)
            .paddingOuter(.7)


        useEffect(() => {
          if (!selection) {
            setSelection(select(ref.current))
          } else {
            selection
                .selectAll('rect')
                .data(data)
                .enter()
                .append('rect')
                .attr('width', x.bandwidth)
                .attr('x', d=>{ 
                      const xValue = x(d.name)
                      if (xValue) 
                          return xValue
                      else  
                        return null
                  })
                .attr('height', d=>y(d.number))
                .attr('fill','orange')
          }
        },[selection])


    return ( 
        <div className="svg">
           {/* <svg ref={ref} width={800} height={500}/>

                <svg className="container" ref={(ref: SVGSVGElement) => this.ref = ref} 
                width='100'  height='100'> 
                <path d={mountArc() as any}/>
          </svg> */}

                <ForceGraph
                  data={data2}
                />


        </div>

    )

}

export default App;
