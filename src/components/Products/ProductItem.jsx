import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cartSlice'
import Button from '../ui/Button'
import styles from '../../styles/ProductItem.module.css'
const ProductItem = props => {
  const [amount, setAmount] = useState(1)
  const dispatch = useDispatch()
  const amountHandler = event => {
    setAmount(event.target.value)
  }
  const addHandler = () => {
    dispatch(cartActions.addToCart({id: props.id, title: props.title ,price: +props.price ,quantity: +amount}))
  }
  return (
    <li className={styles.listItem}>
      <section className={styles.itemDetails} >
        <h2>{props.title}</h2>
        <small>Release: {props.release}</small>
        <p>{props.desc}</p>
        <p>${props.price.toFixed(2)}</p>
      </section>
      <section className={styles.itemControls}>
        <form >
          <div className={styles.itemInputsPanel}>
            <label htmlFor={`amount_${props.id}`}>Amount:</label>
            <input id={`amount_${props.id}`} type="number" min="1" max="10" step="1" size="2" value={amount} onChange={amountHandler} />
          </div>
          <div className={styles.itemControlsPanel}>
            <Button onClick={addHandler} >+</Button>
          </div>
        </form>
      </section>
    </li>
  )
}

export default ProductItem