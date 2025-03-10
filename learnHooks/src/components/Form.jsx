import { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    alert(`Name: ${name} and Age: ${age}`)
    setName('')
    setAge('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-yellow-300 text-black p-4 w-full h-screen flex flex-col justify-center items-center gap-4"
    >
      <input
        type="text"
        className="p-2 border-2 border-black"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        className="p-2 border-2 border-black"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button className="p-4 border-2 rounded">Submit</button>
    </form>
  )
}

export default Form
