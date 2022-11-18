
const MessageNotification = (props) => {
  return (
    <div>
      you have <strong>{props.numberOfMessages}</strong> unread messages.
      <br />
      <br />
      Please go to your inbox to read them.
    </div>
  )
}

export default MessageNotification