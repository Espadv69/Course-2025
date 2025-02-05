import { useState } from 'react'

import '../css/Pucharses.css'

const Pucharses = () => {
  const [day, setDay] = useState('')
  const [item, setItem] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')

  const [rows, setRows] = useState([])

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Weekly Pucharses Record</h2>
      <table className="table_pucharses">
        <thead>
          <tr>
            <th>Day</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="tbody"></tbody>
      </table>
    </div>
  )
}

export default Pucharses
