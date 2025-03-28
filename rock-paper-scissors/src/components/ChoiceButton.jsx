const ChoiceButton = ({ choice, onClick }) => {
  return (
    <button
      className="cursor-pointer bg-blue-600 text-white border-gray-100 rounded p-3.5 lg:w-48 md:w-32 w-full lg:text-4xl md:text-3xl text-xl"
      onClick={() => onClick(choice)}
    >
      {choice}
    </button>
  )
}

export default ChoiceButton
