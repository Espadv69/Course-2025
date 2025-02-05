import '../css/Pucharses.css'

const Pucharses = () => {
  return (
    <div>
      <h2>Weekly Pucharses</h2>
      <table className="table_pucharses">
        <thead>
          <tr>
            <th>Date</th>
            <th>Concept</th>
            <th>Unity</th>
            <th>Cost</th>
            <th>Amount</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody className="tbody"></tbody>
      </table>
    </div>
  )
}

export default Pucharses
