const TestBox = ({backgroundColor, color}) => {
  return (
    <div style={{ backgroundColor, color, marginTop: '1rem', padding: '1rem' }}>
      This is my Testbox.
      <br />
      Styling passed as direct props.
    </div>
  )
}

export default TestBox
