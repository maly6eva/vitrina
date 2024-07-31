function Card(props) {
    const {quantity = 0} = props;
    return (
        <div className='card blue darken-4white-text'>
            <i className='material-icons'>shopping_basket</i>
            {quantity ? <span className='card-quantity'>{quantity}</span> : null}
        </div>
    )
}

export {Card}