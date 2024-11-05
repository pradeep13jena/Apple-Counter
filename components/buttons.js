import React from "react";

export default function Button(Props){
  return (
    <>
      <button onClick={Props.handler}><img src={Props.link} alt={Props.alt}/></button>
    </>
  )
}