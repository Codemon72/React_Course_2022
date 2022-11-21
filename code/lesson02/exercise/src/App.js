import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';
import Article from './components/Article';
import Footer from './components/Footer';
import { useState } from 'react'

function App() {

  const [messageCounter, setMessageCounter] = useState(0)
  const [userName, setUserName] = useState('Batman')
  const [userLocation, setUserLocation] = useState('Gotham')

  return (
    <main className='flex flex-col w-full h-full'>
      <Header messageCounter={messageCounter} />
      <div className='flex h-full'>
        <Aside messageCounter={messageCounter}/>
        <Article 
          userName={userName} 
          userLocation={userLocation}
          messageCounter={messageCounter} 
          setMessageCounter={setMessageCounter}/>
      </div>
      <Footer />
    </main>
  );
}

export default App;
