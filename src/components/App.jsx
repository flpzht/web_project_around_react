import { useState, useEffect } from 'react'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import api from '../utils/api'
import { CurrentUserContext } from '../contexts/CurrentUserContext'


function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [cards, setCards] = useState([]);
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

  useEffect(() => {
    api.getInitialCards()
      .then((cards) => {
        setCards(cards);
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

  const handleUpdateAvatar = (data) => {
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

  async function handleCardLike(card) {
    const isLiked = card.isLiked;

    await api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
      })
      .catch((error) => console.error(error));
  }

  function handleAddPlaceSubmit(card) {
    api.addCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  }


  return (
    <>
      <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar, handleCardLike, handleCardDelete, handleAddPlaceSubmit }}>

        <div className="page__content">
          <Header />
          <Main onOpenPopup={handleOpenPopup} onClosePopup={handleClosePopup} popup={popup} onCardLike={handleCardLike} onCardDelete={handleCardDelete} cards={cards} />
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </>
  )
}

export default App
