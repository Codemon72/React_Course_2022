
const Greeting = (props) => {
  return (
    <>
    <h1>Hello, {props.name} from {props.location}</h1>
    {props.children}
    </>
  )
}

export default Greeting
