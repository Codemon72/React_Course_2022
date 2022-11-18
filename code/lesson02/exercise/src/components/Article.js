import Greeting from "./Greeting"
import TestBoxComponents from "./TestBoxComponents"
import MessageNotification from "./MessageNotification"

const Article = (props) => {
  return (
    <article className='p-4'>
          <Greeting location={'Bangkok'} name={'Clemens'} >
            <strong>This is a child.</strong>
            </Greeting>
          <br />
          <br />
          <MessageNotification numberOfMessages={props.numberOfMessages} />
          <br />
          <br />
          <TestBoxComponents />
        </article>
  )
}

export default Article
