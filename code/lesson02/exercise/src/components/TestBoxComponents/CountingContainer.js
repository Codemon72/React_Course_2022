import {useState} from 'react'

const CountingContainer = () => {

  const [count, setCount] = useState(0)

  const handlePlusOne = () => {
    setCount(count +1)
  }
  const handleMinusOne = () => {
    setCount(count -1)
  }
  const handleMultiplyByThree = () => {
    setCount(count *3)
  }


  return (
    <div>
      <h3>Counter</h3>
      We are at: {count}
      <button onClick={handlePlusOne}>add +1</button><br />
      <button onClick={handleMinusOne}>subtract -1</button><br />
      <button onClick={handleMultiplyByThree}>multiply *3</button><br />

    </div>
  )
}

export default CountingContainer