import { useEffect, useState, useContext } from 'react';
import Popup from './components/Popup/Popup';
import NewCard from './components/Popup/components/NewCard/NewCard';
import EditAvatar from './components/Popup/components/EditAvatar/EditAvatar';
import EditProfile from './components/Popup/components/EditProfile/EditProfile';
import Card from './components/Card/Card';
import api from '../../utils/api';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Main(props) {
    const { popup, onOpenPopup, onClosePopup } = props;
    const [cards, setCards] = useState([]);
    const { currentUser } = useContext(CurrentUserContext);

    useEffect(() => {
        api.getInitialCards()
            .then((cards) => {
                setCards(cards);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const newCardPopup = {
        title: 'New Card',
        children: <NewCard />
    };

    const editAvatarPopup = {
        title: 'Edit Avatar',
        children: <EditAvatar />
    };

    const editProfilePopup = {
        title: 'Edit Profile',
        children: <EditProfile />
    };

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

    return (
        <main className="content">
            <section className="profile page__section">
                <div className="profile__avatar">
                    <img className="profile__image" src={currentUser?.avatar} alt="Avatar" />
                    <button aria-label="Edit avatar" className="profile__avatar-button" type="button"  onClick={() => onOpenPopup(editAvatarPopup)}/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{currentUser?.name}</h1>
                    <button aria-label="Edit profile" className="profile__edit-button" type="button" onClick={() => onOpenPopup(editProfilePopup)} />
                    <p className="profile__description">{currentUser?.about}</p>
                </div>
                <button aria-label="Add card" className="profile__add-button" type="button" onClick={() => onOpenPopup(newCardPopup)} />
            </section>
            <section className="cards page__section">
                <ul className="cards__list">
                    {cards.map((card) => (
                        <Card key={card._id} card={{ ...card, onOpenPopup, onClosePopup }} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
                    ))}
                </ul>
            </section>

            {popup && (
                <Popup onClose={onClosePopup} title={popup.title}>
                    {popup.children}
                </Popup>
            )}

        </main>
    );
};

export default Main;