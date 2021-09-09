import React from "react";
import Card from './Card.js';

const Cardlist=({robots})=>{
    return(<div>
    <Card name={robots[0].name} email={robots[0].email} id={robots[0].id}/>
    <Card name={robots[1].name} email={robots[1].email} id={robots[1].id}/>
    <Card name={robots[2].name} email={robots[2].email} id={robots[2].id}/>
    <Card name={robots[3].name} email={robots[3].email} id={robots[3].id}/>
    <Card name={robots[4].name} email={robots[4].email} id={robots[4].id}/>
    <Card name={robots[5].name} email={robots[5].email} id={robots[5].id}/>
    <Card name={robots[6].name} email={robots[6].email} id={robots[6].id}/>
    <Card name={robots[7].name} email={robots[7].email} id={robots[7].id}/>
    </div>)
}
export default Cardlist;