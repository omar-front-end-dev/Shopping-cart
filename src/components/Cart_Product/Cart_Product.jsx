import { PropTypes } from "prop-types"
import "./Cart_Product.css"
import { useDispatch } from "react-redux"
import { decreaseQuantity, increaseQuantity, removeItem } from "../../RTK/Slices/cartSlice"
export function Cart_Product( { product } ) {
  const dispatch = useDispatch()

  const deleteProductHandler = (id) =>{
    dispatch(removeItem(id))
  }

  function increaseQuantityHandler () {
    dispatch(increaseQuantity(product.id))
  }

  function decreaseQuantityHandler () {
    dispatch(decreaseQuantity(product.id))
  }


  return (
    
      <tr>
        <td className="text-center">
          <img className="cart-page__item-image" src={product.thumbnail} alt={product.title} />
        </td>

        <td className="text-center fw-bold">
          {product.title}
        </td>

        <td className="text-center fw-polder fs-4">
          {product.price}$
        </td>
        <td className="text-center fw-polder fs-4">
          {product.brand}
        </td>

        <td className="fw-polder fs-4">
            {product.category}
        </td>

        <td className="text-center">
            <div className=" d-flex align-items-center">
            <button onClick={increaseQuantityHandler} className="change-amount rounded-circle border-0 btn btn-success change-amount__inc">+</button>
            <span className="quantity fs-5 p-2">{product.quantity}</span>
            <button onClick={decreaseQuantityHandler} className="change-amount rounded-circle border-0 btn btn-danger change-amount__dec">-</button>
            </div>
        </td>


        <td className="fw-polder fs-4">
            {parseFloat(+product.price * +product.quantity).toFixed(1)}$
        </td>

        <td>
          <span onClick={() => deleteProductHandler(product.id)} className="remove-product text-danger text-decoration-underline">
            Remove
          </span>
        </td>
    </tr>
     
  )
}

Cart_Product.propTypes = {
    product: PropTypes.object,
}



            
            
            
           