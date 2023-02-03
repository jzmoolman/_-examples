import logo from './logo.svg';
import './App.css';
import {arc} from "d3"


const width = 960;
const height = 500;
const centerX = width/2;
const centerY = height/2;
const strokeWidth = 10;
const eyeOffsetX = 90;
const eyeOffsetY = 75;
const eyeRadius = 50;
const mounthWidth = 20;
const mountRadius = 140;



const mountArc = arc()
      .innerRadius(mountRadius)
      .outerRadius(mountRadius + mounthWidth )
      .startAngle(Math.PI /2)
      .endAngle(Math.PI * 3/ 2);

const BackgroundCirle = ({radius}) => (
    <circle 
        cx={0}
        cy={0}
        r= {radius}
        fill="yellow"
        stroke="black"
        strokeWidth={strokeWidth}
    />
)


const App = () => {

  return (

    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
            <BackgroundCirle radius={centerY - strokeWidth /2}/>
       
            <circle 
                cx={-eyeOffsetX }
                cy={-eyeOffsetY } 
                r={eyeRadius}
            />
            <circle 
                cx={eyeOffsetX }
                cy={-eyeOffsetY } 
                r={eyeRadius}
            />
            <path d={mountArc()}></path>
    </g>
    </svg>

  )
}

export default App;
