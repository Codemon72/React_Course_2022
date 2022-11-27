import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';
import Article from './components/Article';
import Footer from './components/Footer';
import { useState } from 'react'

function App() {

  const [messageCounter, setMessageCounter] = useState(0)

  return (
    <main>
      <Header messageCounter={messageCounter} />
      <div className='flex'>
        <Aside messageCounter={messageCounter}/>
        <Article 
          messageCounter={messageCounter} 
          setMessageCounter={setMessageCounter}/>
      </div>
      <Footer />
    </main>
  );
}

export default App;
