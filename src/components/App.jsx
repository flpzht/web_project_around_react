import { useState, useEffect } from 'react'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import api from '../utils/api'
import { CurrentUserContext } from '../contexts/CurrentUserContext'


function App() {

  const [currentUser, setCurrentUser] = useState(null);

  const [popup, setPopup] = useState(null);

  useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleOpenPopup(popup) {
    setPopup(popup);
  };

  function handleClosePopup() {
    setPopup(null);
  };

  const handleUpdateUser = (data) => {
    (async () => {
      await api.setUserInfo(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }

  function handleUpdateAvatar(data) {
    (async () => {
      await api.changeAvatar(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }


  return (
    <>
      <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}>
        <div className="page__content">
          <Header />
          <Main onOpenPopup={handleOpenPopup} onClosePopup={handleClosePopup} popup={popup} />
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </>
  )
}

export default App
