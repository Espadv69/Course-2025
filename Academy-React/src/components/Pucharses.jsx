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
      <h2 style={{ textAlign: 'center', marginTop: '1rem' }}>
        Weekly Pucharses Record
      </h2>

      {/* Form */}
      <div className="form">
        <select value={day} onChange={(e) => setDay(e.target.value)}>
          <option value="" disabled>Select Day</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <select value={item} onChange={(e) => setItem(e.target.value)}>
          <option value="" disabled>Select Course</option>
          <option value="JavaScript Basics">JavaScript Basics</option>
          <option value="React Fundamentals">React Fundamentals</option>
          <option value="Node.js & Express">Node.js & Express</option>
          <option value="HTML & CSS Mastery">HTML & CSS Mastery</option>
          <option value="Full-Stack Development">Full-Stack Development</option>
          <option value="Python for Beginners">Python for Beginners</option>
          <option value="SQL & Databases">SQL & Databases</option>
          <option value="Data Structures & Algorithms">
            Data Structures & Algorithms
          </option>
          <option value="Cybersecurity Basics">Cybersecurity Basics</option>
          <option value="Artificial Intelligence & Machine Learning">
            Artificial Intelligence & Machine Learning
          </option>
        </select>
        <div className="form_input">
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
        </div>
        <button onClick={addRow}>Add</button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Course</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{row.day}</td>
                <td>{row.item}</td>
                <td>{row.quantity}</td>
                <td>{row.price}</td>
                <td>{row.total}</td>
                <td>
                  <button onClick={() => deleteRow(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Pucharses
