const Result = ({ userChoice, computerChoice, result }) => {
  return (
    <div className="py-8 px-2 flex flex-col gap-4 mt-4 bg-blue-400 text-white lg:text-4xl md:text-3xl text-2xl m-auto max-w-2xl">
      <h2>Your choice: {userChoice}</h2>
      <h2>Computer choice: {computerChoice}</h2>
      <h2>{result}</h2>
    </div>
  )
}

export default Result
