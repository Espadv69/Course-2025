const ChoiceButton = ({ choice, onClick }) => {
  return <button onClick={() => onClick(choice)}>{choice}</button>
}

export default ChoiceButton
