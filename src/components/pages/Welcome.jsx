import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'
import styles from '../../styles/Welcome.module.css'

const Welcome = () => {
  const navigate = useNavigate()
  const viewProductsHandler = event => {
    navigate('/products')
  }

  return (
    <div className={styles.container}>
      <Button type="button" onClick={viewProductsHandler} >View Products</Button>
    </div>
  )
}

export default Welcome