import logo from './logo.svg';
import './App.css';


const width = 960;
const height = 500;
const centerX = width/2;
const centerY = height/2;
const strokeWidth = 10;
const eyeOffsetX = 90;
const eyeOffsetY = 75;
const eyeRadius = 50;

const App = () => {
  return (

    <svg width={width} height={height}>
    <circle 
        cx={centerX}
        cy={centerY}
        r= {centerY - strokeWidth /2}
        fill="yellow"
        stroke="black"
        stroke-width={strokeWidth}
    ></circle>
    <circle 
        cx={centerX - eyeOffsetX }
        cy={centerY - eyeOffsetY } 
        r={eyeRadius}
    />
    <circle 
        cx={centerX + eyeOffsetX }
        cy={centerY - eyeOffsetY } 
        r={eyeRadius}
    />
    </svg>

  )
}

export default App;
