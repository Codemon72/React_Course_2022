
const MessageNotification = ({numberOfMessages}) => {
  return (
    <div>
      you have <strong>{numberOfMessages}</strong> unread messages.
      <br />
      <br />
      Please go to your inbox to read them.
    </div>
  )
}

export default MessageNotification