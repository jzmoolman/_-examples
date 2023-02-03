import logo from './logo.svg';
import './App.css';
import { Face } from './Face';
import { range } from 'd3';

const width = 166;
const height = 166;

const array = range(5*3) 
const App = () => array.map(() => (
    <Face
        width={width}
        height={height}
        centerX = {width/2}
        centerY = {height/2}
        strokeWidth = {10}
        eyeOffsetX = {10}
        eyeOffsetY = {30}
        eyeRadius = {5 + Math.random() * 5}
        mouthWidth = {10}
        moutRadius = {40}
    />
  )
)


export default App;
