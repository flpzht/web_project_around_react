export default function EditAvatar() {
    return (
        <form className="popup__form" name="edit-avatar-form" id="edit-avatar-form">
            <label className="popup__field">
            <input id="avatar-link" className="popup__input popup__input_type_url" name="avatar-link" placeholder="Link to new profile picture" type="url" required />
            <span className="popup__error" id="avatar-link-error"></span>
            </label>
            <button className="button popup__button" type="submit">Salvar</button>
        </form>
    );
}