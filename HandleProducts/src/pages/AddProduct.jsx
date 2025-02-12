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

  return (
    <div>
      <h2>Add Product</h2>

      <input
        type="text"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        placeholder="Product Name"
      />
      <input
        type="number"
        value={newProduct.price}
        onChange={(e) =>
          setNewProduct({ ...newProduct, price: e.target.value })
        }
        placeholder="Product Price"
      />
      <button onClick={handleAddProduct}>Add</button>
    </div>
  )
}

export default AddProduct
