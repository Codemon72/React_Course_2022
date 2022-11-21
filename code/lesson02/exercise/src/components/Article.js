import { useState } from "react"
import Greeting from "./Greeting"
import TestBoxComponents from "./TestBoxComponents"
import MessageNotification from "./MessageNotification"
import CounterBox from "./CounterBox"
import BatmanBox from "./BatmanBox"
import CountingContainer from "./TestBoxComponents/CountingContainer"

const Article = ({messageCounter, setMessageCounter}) => {

  const [user, setUser] = useState({userName: 'Batman', userLocation: 'Gotham'})

  return (
    <article className='p-4'>
          <Greeting user={user} >
            <BatmanBox user={user} setUser={setUser}/>
          </Greeting>
          <CounterBox setMessageCounter={setMessageCounter} messageCounter={messageCounter}/>
          <MessageNotification messageCounter={messageCounter} />
          <br />
          <br />
          <TestBoxComponents />
          <br /><br />
          <CountingContainer />
        </article>
  )
}

export default Article
