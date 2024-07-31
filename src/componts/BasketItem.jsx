function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasked = Function.prototype
    } = props;
    return <li className="collection-item">
        {name} x{quantity} = {price * quantity} руб.
        <span
            className="secondary-content"
            onClick={() => removeFromBasked(id)}
        >
            <i className="material-icons basket-delete">close</i>
        </span>
    </li>

}

export {BasketItem};