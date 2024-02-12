/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import "./Single_product.css"
import { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Images_glary } from "../../components/images_glary/Images_glary";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
  import { addItem } from "../../RTK/Slices/cartSlice";

export function Single_product() {
  const  urlParamsId  =  useParams();
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  
  
  const dispatch = useDispatch()
  const addToCartHandler = (product) =>{
      dispatch(addItem(product))
  }


  let BasUrl = `https://dummyjson.com/products/${urlParamsId.id}`


  useEffect(() =>{
    fetch(BasUrl).then(response => response.json())
    .then(data => {
      setProduct(data);
      setImages(data.images || []);
    })
  }, [])

  const {title, description, price, category, brand, thumbnail } = product;
 
  const handleImageClick = (imageUrl) => {
    return imageUrl
  };


  return (
    <div className="py-5" >
      <Container>
        <Row>
          <Col md={6} className="mb-3 mb-md-0">
            <img className="w-100" src={thumbnail} alt={title} />
          </Col>
          <Col md={6}>
            <h2 className="text-danger">{title}</h2>
            <p className="text-danger fs-5 fw-bold"><span className="text-primary">Price: </span>{price}$</p>
            <p className="text-danger fs-5 fw-bold"><span className="text-primary">Brand: </span>{brand}</p>
            <p className="text-danger fs-5 fw-bold"><span className="text-primary">Category: </span>{category}</p>
            <div className="single__product-add-to-cart d-flex gap-3">
              <Button onClick={() => addToCartHandler(product)} className="flex-grow-1" variant="primary">Add To Cart</Button>
            </div>
            <div className="py-3">
              <h2 className="fw-bolder pt-2">More Details: </h2>
              <p>{description}</p>
            </div>
          </Col>
        </Row>
        <Row className="single__product__images__glary my-5 justify-content-center">
          <Images_glary images={images} onImageClick={handleImageClick} />
        </Row>
      </Container>
    </div>
  )
}
