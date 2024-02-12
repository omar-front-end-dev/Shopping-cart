import { Row } from "react-bootstrap";
import { Product_card } from "../product_card/Product_card"
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { Pagination_Button } from "../PaginationButton/Pagination_Button";

const PRODUCT_PER_PAGE = 10;
export function Product_Shop_List(props) {
    const { currentCategory } = props
    const [products, setProducts] = useState([]);
    const [productsLength, setProductsLength] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    let base_url_length = `http://localhost:3000/products`; 
    let base_url = `http://localhost:3000/products?_page=${currentPage}`; 
    const pageNum = Math.ceil(productsLength.length / PRODUCT_PER_PAGE)
    let paginationElement = [];
    for (let index = 0; index < pageNum; index++) {
      paginationElement.push(<Pagination_Button setCurrentPage={setCurrentPage} key={index} text={index + 1}/>)
      
    }
    
    
    useEffect(() =>{
      fetch(base_url_length)
      .then(res => res.json())
      .then(data => { 
        setProductsLength(data)
      })

      fetch(base_url)
      .then(res => res.json())
      .then(data => {
        setProducts(data.data)
      })
    }, [currentPage])


    
  return (
    <Row>
        {
            products.map(product =>{
                if(currentCategory == "" || currentCategory == "All" || product.category === currentCategory){
                  return <Product_card key={product.id} product={product}/>
                }
            })
        }
        <div className=" d-flex justify-content-center gap-3 my-3">
          {paginationElement}
        </div>
    </Row>
  )
}

  Product_Shop_List.propTypes = {
    currentCategory : PropTypes.string
  }