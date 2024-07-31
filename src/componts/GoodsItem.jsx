function GoodsItem(props) {
    const {mainId,displayName, displayDescription, price, full_background, addToBasked= Function.prototype
    } = props;
    return (
        <div className="card">
        <div className="card-image">
            <img src={full_background} alt={displayName}/>
            <span className="card-title">{displayName}</span>
        </div>
        <div className="card-content">
            <p>{displayDescription}</p>
        </div>
        <div className="card-action">
            <button className='btn' onClick={() => addToBasked({
                mainId,
                displayName,
                price
                }

            )}>Купить</button>
            <span className='right' style={{fontSize: '1.8rem'}}>
                {price} руб.
            </span>
        </div>
    </div>
    )
}
export {GoodsItem}



