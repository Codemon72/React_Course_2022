import { useState } from "react"
import Greeting from "./Greeting"
import TestBoxComponents from "./TestBoxComponents"
import MessageNotification from "./MessageNotification"
import CounterBox from "./CounterBox"
import BatmanBox from "./BatmanBox"
import CountingContainer from "./CountingContainer"
import ExampleForm from "./ExampleForm"
import FormAndProfile from "./FormAndProfile"
import CallApiExercise from "./CallApiExercise"
import RouterExample from "./RouterExample"
import DynamicRouting from "./DynamicRouting"
import StylingWithCSSModules from "./StylingWithCSSModules"

const Article = ({ messageCounter, setMessageCounter }) => {
  const [user, setUser] = useState({
    userName: 'Batman',
    userLocation: 'Gotham',
  });

  return (
    <article className='p-4 article'>
      <DynamicRouting />
      <RouterExample />
      <StylingWithCSSModules />
      <CallApiExercise />
      <Greeting user={user}>
        <BatmanBox user={user} setUser={setUser} />
      </Greeting>
      <MessageNotification messageCounter={messageCounter} />
      <CounterBox
        setMessageCounter={setMessageCounter}
        messageCounter={messageCounter}
      />
      <TestBoxComponents />
      <CountingContainer />
      <ExampleForm />
      <FormAndProfile />
    </article>
  );
};

export default Article
