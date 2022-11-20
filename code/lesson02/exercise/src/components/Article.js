import Greeting from "./Greeting"
import TestBoxComponents from "./TestBoxComponents"
import MessageNotification from "./MessageNotification"
import CounterBox from "./CounterBox"

const Article = ({name, location, messageCounter, setMessageCounter}) => {
  return (
    <article className='p-4'>
          <Greeting location={location} name={name} >
            <strong>This is a child.</strong>
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
