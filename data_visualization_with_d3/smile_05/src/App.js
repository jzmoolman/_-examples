import logo from './logo.svg';
import './App.css';

import { BackgroundCirle } from './BackgroundCircle';
import { Eyes } from './Eyes'
import { Mouth } from './Mouth'


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

const App = () => {

  return (

    <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
            <BackgroundCirle 
                radius={centerY - strokeWidth /2}
                strokeWidth={strokeWidth}
            />
            <Eyes 
                eyeOffsetX={eyeOffsetX} 
                eyeOffsetY={eyeOffsetY} 
                eyeRadius={eyeRadius}
            />
            <Mouth 
                mouthRadius={mountRadius} 
                mouthWidth={mounthWidth} 
            />
        </g>
    </svg>

  )
}

export default App;
