import Button from "./buttons";
import leftArrow from "../assets/leftArrow.png"
import rightArrow from "../assets/rightArrow.png"
import AppleBasket from "./appleBasket";
import "../style.css"
import { useState } from "react";

export default function ReadyToMove(){

  const totalAppleCount = 10
  const [rA, setrA] = useState(0)
  const [lA, setlA] = useState(totalAppleCount - rA)

  function lAr(){
    if(rA > 0){
      setrA(rA-1)
      setlA(lA+1)
    }
    // console.log("lAppleCount:", lAppleCount, "rAppleCount:", rAppleCount)
  }
   
  function rAr(){
    if(lA > 0){
      setrA(rA+1)
      setlA(lA-1)
    }
    // console.log("lAppleCount:", lAppleCount, "rAppleCount:", rAppleCount)
  }

  return (
    <section className="main">
      <AppleBasket apples={lA} basket={1}/>
      <Button link={leftArrow} alt="leftArrow" handler={lAr}/>
      <Button link={rightArrow} alt="rightArrow" handler={rAr}/>
      <AppleBasket apples={rA} basket={2}/>
    </section>)
}