import logo from './logo.svg';
import './App.css';
import { ForceGraph} from './ForceGraph.js';
import { useState, useEffect} from 'react'
import * as d3 from 'd3'

const jsonUrl = 'https://gist.githubusercontent.com/jzmoolman/da9bcef3ee2f7143aed323d35cd8fa02/raw/miserables';



function App() {
    // const [data, setData] = useState({nodes: [], links:[]});
    const [data, setData] = useState(null);

    const invalid = () => {

    }

    useEffect(()=> {
        d3.json(jsonUrl).then(data=> {
            setData(data);
        })
    },[]);

    if (data) {
        console.log(data);
        ForceGraph( data );
       
        // console.log(chart)
    }

  return (
    <div className="App">
        {/* <ForceGraph data={data}></ForceGraph> */}

    </div>
  );
}

export default App;
