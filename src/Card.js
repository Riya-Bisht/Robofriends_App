import React from "react";
const Heading=()=>{
return(<div className="f2 garamond fl w-100 bg-light-purple bb">
    ROBOFRIENDS
</div>)
}

const Card=({name, id, email})=>{
    return(
    <div className="bg-light-pink ba b--solid b--black-50 br4 grow georgia">
    <img src={`https://robohash.org/${id}`} alt="Robo1Pic"/>
        <div>{name}</div>
        <p>{email}</p>
    </div>
    )
    }
export default Card