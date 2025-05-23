import { useContext } from "react"
import { BasketContext } from "../../context/BasketProvider"

function Basket() {
  const {addbasket,basket,decreasebasket,removeBasket,totalBasket} = useContext(BasketContext)

  if(basket.length===0){
    return <p>Hele basketde hecne yoxdur</p>
  }
  return (
    <>
    <title>Basket</title>
    <h1>Total:{totalBasket()}</h1>
    <div className="container">
        {basket.map((item) => (
          <div className="card" key={item._id}>
            <div className="card_image">
              <img src={item.image} alt="chair" />
            </div>
            <div className="card_title">
              <div className="card_name">{item.name}</div>
              <div className="card_name">{item.price}</div>
            </div>
            <div className="card_buttons">
              <button onClick={()=>addbasket(item)}>+</button>
              <div className="basketCount">Count:{item.count}</div>
              <button onClick={()=>decreasebasket(item)}>-</button>
              <button onClick={()=>removeBasket(item._id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Basket