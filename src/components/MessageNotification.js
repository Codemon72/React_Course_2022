import CounterBox from "./CounterBox"

const MessageNotification = ({messageCounter, setMessageCounter}) => {
  return (
    <div className="component" id="inbox">
      <h2>MessageNotification</h2>
      you have <strong>{messageCounter}</strong> unread messages.
      <br />
      <br />
      Please go to your inbox to read them.
      <CounterBox
        setMessageCounter={setMessageCounter}
        messageCounter={messageCounter}
      />
    </div>
  )
}

export default MessageNotification