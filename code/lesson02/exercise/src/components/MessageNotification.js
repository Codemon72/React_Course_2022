
const MessageNotification = ({messageCounter}) => {
  return (
    <div>
      you have <strong>{messageCounter}</strong> unread messages.
      <br />
      <br />
      Please go to your inbox to read them.
    </div>
  )
}

export default MessageNotification