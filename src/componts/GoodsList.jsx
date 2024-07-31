import {GoodsItem} from "./GoodsItem";

function GoodsList(props) {
    const { goods = [], addToBasked = Function.prototype } = props;

    if(!goods.length){
        return <h3>Nothing here</h3>
    }
    return (
        <div className='goods'>
            {goods.map((item) => (
                <GoodsItem key={item.id} {...item} addToBasked={addToBasked}/>
            ))}
        </div>
    )
}

export { GoodsList };