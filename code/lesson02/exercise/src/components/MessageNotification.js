
const MessageNotification = ({messageCounter}) => {
  return (
    <div className="component" id="inbox">
      <h2>MessageNotification</h2>
      you have <strong>{messageCounter}</strong> unread messages.
      <br />
      <br />
      Please go to your inbox to read them.
    </div>
  )
}

export default MessageNotification