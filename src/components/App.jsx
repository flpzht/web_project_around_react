import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import { useState, useEffect } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import api from '../utils/api'

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">
        <Header />
        <Main />
        <Footer />
      </div>
      </CurrentUserContext.Provider>
    </>
  )
}

export default App
