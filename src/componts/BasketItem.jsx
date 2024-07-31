function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasked = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
    return <li className="collection-item">
        {name} <i className='material-icons basket-quantity' onClick={() =>  incQuantity(id)}>remove</i> x{quantity}{' '}
        <i className='material-icons basket-quantity' onClick={() =>  decQuantity(id)}>add</i> = {price * quantity} руб.
        <span
            className="secondary-content"
            onClick={() => removeFromBasked(id)}
        >
            <i className="material-icons basket-delete">close</i>
        </span>
    </li>

}

export {BasketItem};