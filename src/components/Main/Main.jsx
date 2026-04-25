import { useEffect, useState } from 'react';
import avatar from '../../../images/avatar.jpg'
import Popup from './components/Popup/Popup';
import NewCard from './components/Popup/components/NewCard/NewCard';
import EditAvatar from './components/Popup/components/EditAvatar/EditAvatar';
import EditProfile from './components/Popup/components/EditProfile/EditProfile';
import Card from './components/Card/Card';
import api from '../../utils/api';


function Main() {
    const [popup, setPopup] = useState(null);
    const [cards, setCards] = useState([]);

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

    function handleOpenPopup(popup) {
        setPopup(popup);
    };

    function handleClosePopup() {
        setPopup(null);
    };

    return (
        <main className="content">
            <section className="profile page__section">
                <div className="profile__avatar">
                    <img className="profile__image" src={avatar} alt="Avatar" />
                    <button aria-label="Edit avatar" className="profile__avatar-button" type="button" onClick={() => handleOpenPopup(editAvatarPopup)} />
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">Coustaeu</h1>
                    <button aria-label="Edit profile" className="profile__edit-button" type="button" onClick={() => handleOpenPopup(editProfilePopup)} />
                    <p className="profile__description">Explorer</p>
                </div>
                <button aria-label="Add card" className="profile__add-button" type="button" onClick={() => handleOpenPopup(newCardPopup)} />
            </section>
            <section className="cards page__section">
                <ul className="cards__list">
                    {cards.map((card) => (
                        <Card key={card._id} card={{...card, handleOpenPopup, handleClosePopup}} />
                    ))}
                </ul>
            </section>

            {popup && (
                <Popup onClose={handleClosePopup} title={popup.title}>
                    {popup.children}
                </Popup>
            )}            

        </main>
    );
};

export default Main;