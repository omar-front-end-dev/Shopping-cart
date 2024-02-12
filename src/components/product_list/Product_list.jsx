import { Row } from "react-bootstrap";
import { Product_card } from "../product_card/Product_card";
import { PropTypes } from "prop-types";


export function Product_list(props) {
  
  return (
    <div>
        <h1 className="my-4 border-bottom text-capitalize py-2">{props.title}</h1>
      <Row>
        {props.products.map(product =>{
           return <Product_card key={product.id} product={product} />
        })}
      </Row>
      
    </div>
  )
}


Product_list.propTypes = {
  products : PropTypes.array,
  title : PropTypes.string, 
}