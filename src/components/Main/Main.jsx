import { useState } from 'react';
import avatar from '../../../images/avatar.jpg'
import Popup from './components/Popup/Popup';
import NewCard from './components/Popup/components/NewCard/NewCard';
import EditAvatar from './components/Popup/components/EditAvatar/EditAvatar';
import EditProfile from './components/Popup/components/EditProfile/EditProfile';

function Main() {
    const [popup, setPopup] = useState(null);

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
                    <button aria-label="Editar foto de perfil" className="profile__avatar-button" type="button"></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">Coustaeu</h1>
                    <button aria-label="Editar perfil" className="profile__edit-button" type="button" />
                    <p className="profile__description">Explorer</p>
                </div>
                <button aria-label="Add card" className="profile__add-button" type="button" onClick={() => handleOpenPopup(newCardPopup)}/>
            </section>
            <section className="cards page__section">
                <ul className="cards__list">
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