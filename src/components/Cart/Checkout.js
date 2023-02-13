import { useRef, useState } from 'react'
import classes from './Checkout.module.css'

const Checkout = props =>
{
  const couponRef = useRef()
  const [submitting,setSubmitting]=useState(false)
  const [invalidCoupon,setInvalidCoupon]=useState(false)

  const confirmHandler = (e) =>
  {
    e.preventDefault()
  }

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Apply Coupon</label>
        <input type='text' id='coupon' ref={couponRef} />
        {invalidCoupon && <p>Coupon code is expired or invalid.</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={submitting}>
          {submitting ? 'Submitting...' : 'Confirm'}
        </button>
      </div>
    </form>
  );
};

export default Checkout