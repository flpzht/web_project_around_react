import avatar from '../../../images/avatar.jpg'

function Main() {
    return (
        <main className="content">
            <section className="profile page__section">
                <div className="profile__avatar">
                    <img className="profile__image" src={avatar} alt="Avatar" />
                    <button aria-label="Editar foto de perfil" className="profile__avatar-button" type="button"></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">Coustaeu</h1>
                    <button aria-label="Editar perfil" className="profile__edit-button" type="button"></button>
                    <p className="profile__description">Explorer</p>
                </div>
                <button aria-label="Adicionar cartão" className="profile__add-button" type="button"></button>
            </section>
            <section className="cards page__section">
                <ul className="cards__list">
                </ul>
            </section>
        </main>
    );
};

export default Main;