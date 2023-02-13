import { useEffect, useState } from "react"
import Card from './UI/Card'
import classes from './Orders.module.css'

const Coupons = () =>
{
    const [coupons,setCoupons]=useState([])
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
            setCoupons(data.coupons)
        }
        loader()
    },[])

    return (
    <section>
      <Card>
        {loading && <p>Loading...</p>}
        {!coupons.length && <h3>No coupons!</h3>}
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