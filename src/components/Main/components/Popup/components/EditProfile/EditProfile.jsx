export default function EditProfile() {
    return (
        <form className="popup__form" name="edit-profile-form" id="edit-profile-form" noValidate>
            <label className="popup__field">
            <input id="profile-name" className="popup__input popup__input_type_profile-name" name="profile-name" placeholder="Name" type="text" minlength="1" maxlength="40" required />
            <span className="popup__error" id="profile-name-error"></span>
            </label>
            <label className="popup__field">
            <input id="profile-description" className="popup__input popup__input_type_profile-description" name="profile-description" placeholder="About me" type="text" minlength="1" maxlength="200" required />
            <span className="popup__error" id="profile-description-error"></span>
            </label>
            <button className="button popup__button" type="submit">Salvar</button>
        </form>
    );
}