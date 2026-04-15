export default function NewCard() {
    return (
        <form className="popup__form" name="card-form" id="new-card-form" noValidate>
            <label className="popup__field">
            <input id="card-name" className="popup__input popup__input_type_card-name" name="card-name" placeholder="Title" type="text" minlength="1" maxlength="30" required />
            <span className="popup__error" id="card-name-error"></span>
            </label>
            <label className="popup__field">
            <input id="card-link" className="popup__input popup__input_type_url" name="link" placeholder="Image Link" type="url" required />
            <span className="popup__error" id="card-link-error"></span>
            </label>
            <button className="button popup__button" type="submit">Salvar</button>
        </form>
    );
}