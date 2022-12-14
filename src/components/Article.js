import { useState } from "react"
import Greeting from "./Greeting"
import TestBoxComponents from "./TestBoxComponents"
import MessageNotification from "./MessageNotification"
import BatmanBox from "./BatmanBox"
import CountingContainer from "./CountingContainer"
import ExampleForm from "./ExampleForm"
import FormAndProfile from "./FormAndProfile"
import CallApiExercise from "./CallApiExercise"
import RouterExample from "./RouterExample"
import DynamicRouting from "./DynamicRouting"
import StylingWithCSSModules from "./StylingWithCSSModules"
import StylingWithStyledComponents from "./StylingWithStyledComponents"
import ApiCallWithLocalStorage from "./ApiCallWithLocalStorage"

const Article = ({ messageCounter, setMessageCounter }) => {
  const [user, setUser] = useState({
    userName: 'Batman',
    userLocation: 'Gotham',
  });

  return (
    <article className='p-4 article'>
      <MessageNotification messageCounter={messageCounter} setMessageCounter={setMessageCounter}/>
      <DynamicRouting />
      <ApiCallWithLocalStorage />
      <RouterExample />
      <StylingWithCSSModules />
      <StylingWithStyledComponents />
      <CallApiExercise />
      <CountingContainer />
      <Greeting user={user}>
        <BatmanBox user={user} setUser={setUser} />
      </Greeting>
      <ExampleForm />
      <FormAndProfile />
      <TestBoxComponents />
    </article>
  );
};

export default Article
