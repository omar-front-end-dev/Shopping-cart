
import { Container } from 'react-bootstrap'
import { Hero_section } from '../../components/hero/Hero_section'
import { Product_list } from '../../components/product_list/Product_list'
import { useEffect, useState } from 'react'





export function Home() {
  const [products, setProducts] = useState([])

  useEffect(() =>{
    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => setProducts(data.products))
  }, [])
  return (
    <div className='home'>
      <Container>
        <Hero_section/>
        <div className="products py-5">
            <Product_list title='Latest Product' products ={products.slice(0, 4)} />
            <Product_list title='Offers' products ={products.slice(4, 8)} />
        </div>
      </Container>
    </div>
  )
}

