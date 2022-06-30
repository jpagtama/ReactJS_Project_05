import React from 'react'
import Card from '../ui/Card'
import ProductItem from '../Products/ProductItem'
import useProducts from '../../hooks/useProducts'
import styles from '../../styles/Products.module.css'

const Products = () => {
  const {products, isLoading} = useProducts()
  const productItems = products.map(item => <ProductItem key={item.id} {...item} />)
  return (
    <Card className={styles.products}>
      <ul className={styles.productsList}>
        {isLoading && <h1>Loading...</h1>}
        {productItems}
      </ul>
    </Card>
  )
}

export default Products