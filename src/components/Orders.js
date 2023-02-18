import Card from './UI/Card'
import classes from './Orders.module.css'
import { useLoaderData } from 'react-router-dom'

const Orders = () =>
{
    const orders=useLoaderData().orders

    return (
    <section>
      <Card>
        {!orders.length && <h3>No Orders!</h3>}
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

export const loader= ()=> fetch(process.env.REACT_APP_API)