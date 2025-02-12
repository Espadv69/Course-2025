import { useState } from 'react'
import { useAuth } from '../auth/authContext'
import { productsData } from '../data/data'

const ProductsList = () => {
  const [products, setProducts] = useState(productsData)
  const { user } = useAuth()

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  return (
    <div>
      <h2>Product List</h2>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}€
            {user && user.role === 'admin' && (
              <button onClick={() => handleDeleteProduct(product.id)}>
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsList
