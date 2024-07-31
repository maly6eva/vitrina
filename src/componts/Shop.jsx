import {useState, useEffect} from 'react'
import {API_KEY, API_URL} from '../config'
import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList";
import {Card} from "./Card";

function Shop() {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    console.log(order)


    const addToBasked = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === orderItem.id)

        if (itemIndex < 0) {
            const newItem = {
                ...item, quantity: 1,
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem, quantity: orderItem.quantity + 1,
                    }
                } else {
                    return item;
                }
            })

            setOrder(newOrder)
        }
    }

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.shop && setGoods(data.shop);
                setLoading(false)
            })
    }, [])

    return (<main className='container content'>
            <Card quantity={order.length}/>
            {loading ? (
                <Preloader/>
                ) : (
                    <GoodsList goods={goods} addToBasked={addToBasked}/>
            )}
        </main>)
}

export {Shop}