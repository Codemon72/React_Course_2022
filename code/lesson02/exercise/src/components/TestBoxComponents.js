import BlackBox from './TestBoxComponents/BlackBox';
import RedBox from './TestBoxComponents/RedBox';
import TestBox from './TestBoxComponents/TestBox';

const TestBoxComponents = () => {

  const divStyle = {
    backgroundColor: 'black',
    color: 'white',
    width: '350px',
    height: '150px',
    padding: '1rem',
  };
  
  return (
    <div className='component'>
      <h2>TestBoxComponents</h2>
      <BlackBox divStyle={divStyle} />
      <RedBox divStyle={{ color: 'white', backgroundColor: 'red', height: '150px', width: '300px', marginTop: '1rem', padding: '1rem' }} />
      <TestBox backgroundColor='purple' color='white' />
    </div>
  )
}

export default TestBoxComponents
