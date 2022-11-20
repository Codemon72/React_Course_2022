import React from 'react'

const CounterBox = ({messageCounter, setMessageCounter}) => {

  const increaseMessage = () => {
    setMessageCounter(messageCounter +1)
  }
  const decreaseMessageNumber = () => {
    setMessageCounter(messageCounter -1)
  }
  const resetMessageNumber = () => {
    setMessageCounter(0)
  }

  return (
    <div className='counterbox'>
      <h3>CounterBox</h3>
      <button onClick={increaseMessage}>Number of Messages +1</button>
      <button onClick={decreaseMessageNumber}>Number of Messages -1</button>
      <button onClick={resetMessageNumber}>reset Number of Messages to 0</button>
    </div>
  )
}

export default CounterBox