import React from "react"
import CardList from './CardList.js';
import {robots} from "./robodetails.js";

const App=()=>{
    return(
        <div>
        <h1>ROBOFRIENDS</h1>
        
        <CardList robots={robots}/>

        </div>)}
    

export default App;
