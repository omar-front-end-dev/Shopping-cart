import { PropTypes } from "prop-types";
import { Button } from "react-bootstrap";

export function Pagination_Button({text, setCurrentPage}) {
  return (
    <Button variant="primary" onClick={() => setCurrentPage(text)}>
      {text}
    </Button>
  )
}


Pagination_Button.propTypes = {
    text : PropTypes.any,
    setCurrentPage : PropTypes.func,
}