import ImagePopup from "../ImagePopup/ImagePopup";

export default function Card(props) {
    const { name, link, isLiked, handleOpenPopup } = props.card;

    const imageComponent = {
        title: name,
        children: <ImagePopup card={props.card} />
    };

    return (
        <li className="card">
            <img src={link} alt={name} className="card__image" onClick={() => handleOpenPopup(imageComponent)} />
            <button className="card__delete-button" aria-label="Delete card" type="button" />
            <div className="card__description">
                <h2 className="card__title">{name}</h2>
                <button className="card__like-button" aria-label="Like card" type="button" />
            </div>
        </li>
    );
}