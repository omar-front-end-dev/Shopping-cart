import { categories } from "../../categories"
import { Category_btn } from "../category/Category_btn"
import { PropTypes } from "prop-types";

export function Category_list(props) {
  const { setCurrentCategory } = props;

  return (
    <div className="d-flex gap-2 justify-content-center flex-wrap">
      <Category_btn key={"All"} valueBtn={"All"} setCurrentCategory={setCurrentCategory}/>
      {
        categories.map((item) =>{
          return <Category_btn key={item} valueBtn={item} setCurrentCategory={setCurrentCategory}/>
      })
      }
    </div>
  )
}



Category_list.propTypes = {
  setCurrentCategory : PropTypes.func,
}