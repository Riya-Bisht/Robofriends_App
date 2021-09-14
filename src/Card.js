import React from "react";
const Heading=()=>{
return(<div className="f2 garamond fl w-100 bg-light-purple bb">
    ROBOFRIENDS
</div>)
}

const Card=({name, id, email})=>{
    return(
    <div className="bg-light-blue navy ba b f4 fl w-third b--solid  b--dark-blue bw3 br--left grow georgia">
    <img src={`https://robohash.org/${id}`} alt="Robo1Pic"/>
        <div>{name}</div>
        <p>{email}</p>
    </div>
    )
    }
export default Card