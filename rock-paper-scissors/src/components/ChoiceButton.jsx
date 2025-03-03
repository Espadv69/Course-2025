const ChoiceButton = ({ choice, onClick }) => {
  return (
    <button
      className="cursor-pointer bg-blue-600 text-white border-gray-100 rounded p-3.5"
      onClick={() => onClick(choice)}
    >
      {choice}
    </button>
  )
}

export default ChoiceButton
