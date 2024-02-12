import { Cart_Product } from "../Cart_Product/Cart_Product"
import { PropTypes } from "prop-types"


export function Cart_List( {cartItems} ) {
  return (
    <>
        {cartItems.map((item) =>{
            return <Cart_Product key={item.id} product={item}/>
        })}
    </>
  )
}

Cart_List.propTypes = {
    cartItems: PropTypes.object,
}