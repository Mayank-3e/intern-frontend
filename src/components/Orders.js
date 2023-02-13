import { useEffect, useState } from "react"
import Card from './UI/Card'
import classes from './Orders.module.css'

const Orders = () =>
{
    const [orders,setOrders]=useState([])
    const [loading,setLoading]=useState(false)

    useEffect(()=>
    {
        async function loader()
        {
            setLoading(true)
            const response = await fetch(process.env.REACT_APP_API)
            const data=await response.json()
            // console.log(data)
            setLoading(false)
            setOrders(data.orders)
        }
        loader()
    },[])

    return (
    <section>
      <Card>
        {loading && <p>Loading...</p>}
        {!orders.length && <h3>No orders!</h3>}
        {orders.map(order =>
        <li className={classes.meal} key={order.id}>
            <div>
                <h3 className={classes.price}>
                    {order.discountAmount ? `Discounted Amount: $${order.discountAmount}` : `Total Amount: $${order.totalAmount}`}
                </h3>
                <p>{order.items.length} items purchased:</p>
                {order.items.map(item =>
                    <p key={item.id}>{item.amount} {item.name} for ${item.price*item.amount}</p>
                )}
            </div>
        </li>
        )}
      </Card>
    </section>
    )
}
export default Orders