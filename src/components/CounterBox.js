import React from 'react'

const CounterBox = ({messageCounter, setMessageCounter}) => {

  const increaseMessage = () => {
    setMessageCounter(messageCounter +1)
  }
  const decreaseMessageNumber = () => {
    if (messageCounter >=1){
      setMessageCounter(messageCounter -1)
    }
  }
  const resetMessageNumber = () => {
    setMessageCounter(0)
  }

  return (
    <div className='counterbox'>
      <h2>CounterBox</h2>
      <button onClick={increaseMessage}>+1 Message</button>
      <button onClick={decreaseMessageNumber}>-1 Messages</button>
      <button onClick={resetMessageNumber}>reset Number of Messages to 0</button>
    </div>
  )
}

export default CounterBox