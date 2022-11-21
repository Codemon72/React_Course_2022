import Greeting from "./Greeting"
import TestBoxComponents from "./TestBoxComponents"
import MessageNotification from "./MessageNotification"
import CounterBox from "./CounterBox"

const Article = ({userName, userLocation, messageCounter, setMessageCounter}) => {
  return (
    <article className='p-4'>
          <Greeting userLocation={userLocation} userName={userName} >
            <p>(Not Batman? Sign up here ->) <input type="text" placeholder="Name"/><input type="text" placeholder="Location"/></p>
          </Greeting>
          <CounterBox setMessageCounter={setMessageCounter} messageCounter={messageCounter}/>
          <MessageNotification messageCounter={messageCounter} />
          <br />
          <br />
          <TestBoxComponents />
        </article>
  )
}

export default Article
