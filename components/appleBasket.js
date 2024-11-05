export default function AppleBasket(Props){
  return (
    <div className="basket">
      <h1><span>{Props.apples}</span>  apples</h1>
      <p>Basket {Props.basket}</p>
    </div>
  )
}