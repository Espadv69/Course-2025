const Result = ({ userChoice, computerChoice, result }) => {
  return (
    <div className="">
      <h2>Your choice: {userChoice}</h2>
      <h2>Computer choice: {computerChoice}</h2>
      <h2>{result}</h2>
    </div>
  )
}

export default Result
