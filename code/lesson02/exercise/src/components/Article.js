import Greeting from "./Greeting"
import TestBoxComponents from "./TestBoxComponents"
import MessageNotification from "./MessageNotification"

const Article = ({name, location, numberOfMessages}) => {
  return (
    <article className='p-4'>
          <Greeting location={location} name={name} >
            <strong>This is a child.</strong>
            </Greeting>
          <br />
          <br />
          <MessageNotification numberOfMessages={numberOfMessages} />
          <br />
          <br />
          <TestBoxComponents />
        </article>
  )
}

export default Article
