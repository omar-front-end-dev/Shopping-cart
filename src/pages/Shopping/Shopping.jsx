import { useState } from "react";
import { Category_list } from "../../components/category_list/Category_list";
import { Product_Shop_List } from "../../components/product_shop_list/Product_Shop_List";
import { Container } from "react-bootstrap";




export function Shopping() {
  const [currentCategory, setCurrentCategory] = useState("");
  

  return (
    <div className="shopping">
      <Container>
        <div className="shopping__category mt-3 text-center">
          <Category_list setCurrentCategory={setCurrentCategory}/>
        </div>
        <div className="py-5">
          <Product_Shop_List currentCategory={currentCategory}/>
        </div>
      </Container>
    </div>
  )
}
