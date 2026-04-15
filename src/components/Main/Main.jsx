import { useState } from 'react';
import avatar from '../../../images/avatar.jpg'
import Popup from './components/Popup/Popup';
import NewCard from './components/Popup/components/NewCard/NewCard';
import EditAvatar from './components/Popup/components/EditAvatar/EditAvatar';
import EditProfile from './components/Popup/components/EditProfile/EditProfile';
import Card from './components/Card/Card';

const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

console.log(cards);

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