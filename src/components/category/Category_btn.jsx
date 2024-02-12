import { Button } from "react-bootstrap";
import './Category.css'
import { PropTypes } from "prop-types";

export function Category_btn(props) {
  const { valueBtn, setCurrentCategory } = props
  return (
    <>
      <Button onClick={() =>setCurrentCategory(valueBtn)} variant="primary" className="btn__Category fw-bold my-2 px-3">{ valueBtn }</Button>
    </>
  )
}



Category_btn.propTypes = {
  valueBtn : PropTypes.string,
  setCurrentCategory: PropTypes.func,
}


