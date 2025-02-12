import { useState } from 'react'
import { useAuth } from '../auth/authContext'
import { productDatas } from '../data/data'

const ProductsList = () => {
  const [products, setProducts] = useState(productDatas)
  const { user } = useAuth()

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }
}
