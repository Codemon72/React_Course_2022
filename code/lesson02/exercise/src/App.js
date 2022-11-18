import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';
import Article from './components/Article';
import Footer from './components/Footer';

function App() {

  const numberOfMessages = 26

  // const userName = 'Clemens'

  // const userLocation = 'Hamburg'

  return (
    <main className='flex flex-col w-full h-full'>
      <Header numberOfMessages={numberOfMessages} />
      <div className='flex h-full'>
        <Aside numberOfMessages={numberOfMessages}/>
        <Article numberOfMessages={numberOfMessages} />
      </div>
      <Footer />
    </main>
  );
}

export default App;
