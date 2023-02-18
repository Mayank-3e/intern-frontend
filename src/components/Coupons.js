import Card from './UI/Card'
import classes from './Orders.module.css'
import { useLoaderData } from "react-router-dom"

const Coupons = () =>
{
    const coupons=useLoaderData().coupons

    return (
    <section>
      <Card>
        {!coupons.length && <h3>No Coupons!</h3>}
        {coupons.map(coupon =>
        <li className={classes.meal} key={coupon.id}>
            <div>
                <h3>{coupon.coupon}</h3>
            </div>
        </li>
        )}
      </Card>
    </section>
    )
}
export default Coupons