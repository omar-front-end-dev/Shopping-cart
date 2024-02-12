import { Button, Card, Col } from "react-bootstrap";
import './Product_card.css'
import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addItem } from "../../RTK/Slices/cartSlice";



export function Product_card( { product } ) {
    const dispatch = useDispatch()
    

    const addToCartHandler = (product) =>{
        dispatch(addItem(product))
        
    }

    return (
        <Col lg={3} md={6} className="mb-3">
            <Card className="products__card">
                <Card.Img variant="top" src={product.thumbnail} className="products__card__image" />
                <Card.Body>
                    <Card.Title className="text-capitalize">
                        <h6 className="text-primary text-decoration-none">
                            <strong className="text-danger">title:</strong> {product.title || "No address"}
                        </h6>
                    </Card.Title>
                    <Card.Text className="text-capitalize text-primary fw-bold">
                        <strong className="text-danger">Price:</strong> {product.price || "No price"}$
                    </Card.Text>
                    <Link to={`/products/${product.id}`} className="btn btn-primary me-2">Show Product</Link>
                    <Button variant="danger" onClick={() => addToCartHandler(product)}>
                        <MdOutlineAddShoppingCart fontSize={20}/>
                    </Button>
                </Card.Body>
            </Card>
        </Col>
  )
}

Product_card.propTypes = {
    product: PropTypes.object,
}