import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./Cart_Page.css"
import { removeAll } from "../../RTK/Slices/cartSlice";
import { Cart_List } from "../../components/Cart_List/Cart_List";


export function Cart_Page() {
    const cartItems = useSelector(state => state.cartReducer.cartItems)
    const dispatch = useDispatch()



    const removeAllHandler = () =>{
        dispatch(removeAll())
    }
    



    const totalPrice = cartItems.reduce((acc, current) => {
        return acc + current.price * current.quantity
    },0).toFixed(1);
    

  return (
    <div className="cart-page py-5">
        <Container>
            <div className="cart-page__content p-3 shadow-lg rounded-3">
                <div className="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom border-danger">
                    <h5 className="cart-page__title">
                        Shopping Cart
                    </h5>
                    <h6 onClick={removeAllHandler} className="cart-page__remove__all text-danger text-decoration-underline">
                        Remove All
                    </h6>
                </div>

                {cartItems.length > 0 ?     
                <>
                    <div className="overflow-x-auto">
                        <Table striped hover className=" border-none">
                            <tbody>
                                <Cart_List cartItems={cartItems}/>
                            </tbody>
                        </Table>
                    </div> 
                    <div className="d-flex justify-content-between align-items-center py-3 border-top border-danger">
                        <h4 >Total all price : <span className="text-danger">{+totalPrice}$</span></h4>
                        <Button variant="primary" className="px-5">
                            Checkout
                        </Button>
                    </div>
                </>        
                    : <h1 className="text-center text-danger py-3">Cart shopping is empty</h1>
                }
           </div>
        </Container>
    </div>
  )
}