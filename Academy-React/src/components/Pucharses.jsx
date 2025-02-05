import { useState } from 'react'

import '../css/Pucharses.css'

const Pucharses = () => {
  const [day, setDay] = useState('')
  const [item, setItem] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')

  const [rows, setRows] = useState([])

  const addRow = () => {
    if (day && item && quantity && price) {
      const total = parseFloat(quantity) * parseFloat(price)
      setRows([...rows, { day, item, quantity, price, total }])

      // Clean up
      setDay('')
      setItem('')
      setQuantity('')
      setPrice('')
    }
  }

  const deleteRow = (index) => {
    setRows(rows.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Weekly Pucharses Record</h2>

      {/* Form */}
      <div className="form">
        <select value={day} onChange={(e) => setDay(e.target.value)}>
          <option value="">Select Day</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Item"
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Unit Price"
        />
        <button onClick={addRow}>Add</button>
      </div>

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
