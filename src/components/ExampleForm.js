import {useState} from 'react'

const ExampleForm = () => {

  const [nameArray, setNameArray] = useState(["Agustina", "Andi", "Celine"])

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleEnter = (event) => {
    if (event.key === 'Enter'){
      setNameArray([...nameArray, inputValue])
      setInputValue('')
    }
  }

  return (
    <div className='component'>
      <h2>ExampleForm</h2>
      <hr />
      <ul>
        {nameArray.map((arrayItem, index) => {
          return (<li key={index}>{arrayItem}</li>)
        })}
      </ul>
      <br />
      <input 
        type="text" 
        placeholder='Enter a Name'
        onChange={handleInputChange}
        value={inputValue}
        onKeyPress={handleEnter}
        />
            
    </div>
  )
}

export default ExampleForm
