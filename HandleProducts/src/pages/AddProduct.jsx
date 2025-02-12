import { useState } from 'react'
import { productsData } from '../data/data'

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({ name: '', price: '' })

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price) {
      productsData.push({ ...newProduct, id: Date.now() })
      setNewProduct({ name: '', price: '' })
    }
  }
}
