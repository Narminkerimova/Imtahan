import React, { useContext } from "react";
import {Link} from "react-router"
import "./style.css";
import { RequestContext } from "../../context/RequestProvider";
import { BasketContext } from "../../context/BasketProvider";
import { WishListContext } from "../../context/WishListProvider";

function Cards() {
  const { product } = useContext(RequestContext);
  const { addbasket, checkIsBasket, removeBasket } = useContext(BasketContext);
  const { addWish, checkIsWish, removeWish } = useContext(WishListContext);

  if (product.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="container">
        {product.map((item) => (
          <div className="card" key={item._id}>
            <div className="card_image">
              <img src={item.image} alt="chair" />
            </div>
            <div className="card_title">
              <div className="card_name">{item.name}</div>
              <div className="card_price">${item.price}.00</div>
            </div>
            <div className="card_buttons">
              {checkIsBasket(item) ? (
                <button onClick={() => removeBasket(item._id)}>
                  Remove Basket
                </button>
              ) : (
                <button onClick={() => addbasket(item)}>Add Basket</button>
              )}
              {checkIsWish(item) ? (
                <button onClick={() => removeWish(item._id)}>
                  Remove Wish
                </button>
              ) : (
                <button onClick={() => addWish(item)}>Add Wish</button>
              )}
              <Link to={`/detail/${item._id}`}>
              <button>Info</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
