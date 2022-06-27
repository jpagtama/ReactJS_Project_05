import { useState, useEffect, useCallback } from 'react'

const useProducts = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchProducts = useCallback(async () => {
    setIsLoading(true)
    try {
        const response = await fetch("https://practice-project-c0261-default-rtdb.firebaseio.com/products.json")
        if (!response.ok) { throw new Error("There seems to be a problem") }
        const data = await response.json()
        let list = []
        for (let item in data) {list.push({id:item, ...data[item]})}
        setProducts(list)
    } catch (error) {
        console.log('Error Encountered', error.message)
    }
    setIsLoading(false)
    
  }, [])

  useEffect(() => {
    fetchProducts()
  },[fetchProducts])

  return { products, isLoading }
}

export default useProducts