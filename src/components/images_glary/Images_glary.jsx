import { useState } from "react";
import { Col } from "react-bootstrap";
import { PropTypes } from "prop-types";
import './Images_glary.css'

export function Images_glary( { images, onImageClick } ) {
    const [mainImage, setMainImage] = useState("")


  return (
    <>
    <div className="main__image__glary text-center mb-5">
        <img className="img-fluid" src={mainImage || images[0]} alt="main image" />
    </div>
        {images.map((img, index) => (
        <Col key={index}>
          <div className="images__glary__content">
            <img className="images__glary__content__image" src={img} alt={`Image ${index}`} onClick={() => onImageClick(setMainImage(img))} />
          </div>
        </Col>
        ))}
    </>
  )
}

Images_glary.propTypes = {
    images : PropTypes.array,
    onImageClick : PropTypes.func
  }