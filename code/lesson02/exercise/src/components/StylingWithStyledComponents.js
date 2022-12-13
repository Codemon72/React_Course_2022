import styled from 'styled-components'

const StyledDiv = styled.div`
  margin: 2rem 0;
  padding: 1.5rem 1rem;
  border: 3px dotted #008080;
  border-radius: 1rem;
  box-shadow: 8px 16px 32px rgba(0, 0, 0, 0.3);
`

const ExampleButton = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
`

const StylingWithStyledComponents = () => {
  return (
    <StyledDiv>
      <h2>StylingWith styled-components</h2>
      <ExampleButton>ExampleButton</ExampleButton>
    </StyledDiv>
  )
}

export default StylingWithStyledComponents
