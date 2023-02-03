import React from 'react';
import logo from './logo.svg';
import './App.css';
import neo4j from 'neo4j-driver'


const uri = 'neo4j+s://813893ea.databases.neo4j.io'
const user = 'neo4j'
const password = 'p6YURX5bFlooyM3vRQizhc0uXY_cSpP_gfgJJQ7v_j8'


const driver = neo4j.driver(
    uri, 
    neo4j.auth.basic(user, password), 
    {disableLosslessIntegers: true}
)

function App() {
    
  return (
    <div className="App"> 
    <h1>APP</h1>

    
    </div>
  );
}

export default App;
