import Greeting from "./Greeting"
import TestBoxComponents from "./TestBoxComponents"
import MessageNotification from "./MessageNotification"
import CounterBox from "./CounterBox"
import BatmanBox from "./BatmanBox"

const Article = ({user, setUser, messageCounter, setMessageCounter}) => {
  return (
    <article className='p-4'>
          <Greeting user={user} >
            <BatmanBox setUser={setUser}/>
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
