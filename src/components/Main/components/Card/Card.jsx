import { CurrentUserContext } from "../../../../contexts/CurrentUserContext";
import ImagePopup from "../ImagePopup/ImagePopup";

export default function Card(props) {
    const { name, link, isLiked, onOpenPopup } = props.card;
    const { onCardLike, onCardDelete } = props;

    const imageComponent = {
        title: null,
        children: <ImagePopup card={props.card} />
    };

    const cardLikeButtonClassName = `card__like-button ${isLiked ? 'card__like-button_is-active' : ''}`;

    function handleLikeClick() {
        onCardLike(props.card);
    }

    function handleDeleteClick() {
        onCardDelete(props.card);
    }

    return (
        <li className="card" >
            <img src={link} alt={name} className="card__image" onClick={() => onOpenPopup(imageComponent)} />
            <button className="card__delete-button" aria-label="Delete card" type="button" onClick={handleDeleteClick} />
            <div className="card__description">
                <h2 className="card__title">{name}</h2>
                <button className={cardLikeButtonClassName} aria-label="Like card" type="button" onClick={handleLikeClick} />
            </div>
        </li>
    );
}