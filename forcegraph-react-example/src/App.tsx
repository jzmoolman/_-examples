import React from 'react';
import './App.css';
import { genRandomTree, nodePaint, getColor } from './random-dataset'
import ForceGraph2D, { NodeObject } from 'react-force-graph-2d'



function App() {

  const paintNode = (node: NodeObject, color: string, ctx: CanvasRenderingContext2D, global: number)  => {
    console.log('paintNdoe')
    ctx.fillStyle = 'red';
    let id = node.id? node.id:0
    let x = node.x?node.x:0
    let y = node.y?node.y:0
    ctx.beginPath();
     ctx.arc(x, y, 5, 0, 2 * Math.PI, false); ctx.fill();  // circle
  }
  
  return (
    <div className="App">
      <script src="./random-data.js"></script>

      <ForceGraph2D
        graphData={genRandomTree(20)}
        nodeLabel="id"
        nodeCanvasObject={(node, ctx) => {
           let id = 0;
          //  const _id = node.id?node.id:0;
          if ( typeof node.id === 'number') {
              id = node.id;
           } else { 
              id = 1;
          }

            paintNode(node, getColor(id), ctx, 1)
        }}
        nodePointerAreaPaint={paintNode}
      />,


    </div>
  );
}

export default App;
