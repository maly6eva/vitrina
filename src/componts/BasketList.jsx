import {BasketItem} from './BasketItem'

function BasketList(props) {
    const {order = [],
        handleBasketShow = Function.prototype,
        removeFromBasked = Function.prototype
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    })

    return (
    <ul className="collection basket-list">
        <li className="collection-item">Корзина</li>
        {
            order.length ? order.map(item => (
                <BasketItem key={item.id} {...item}  removeFromBasked={removeFromBasked} />
            )) : <li  className="collection-item">Корзина пуста</li>
        }

        <li className="collection-item active">Общая стоимость: {totalPrice}руб.</li>
        <i className='material-icons basket-close' onClick={handleBasketShow}></i>
    </ul>
    )
}

export {BasketList}