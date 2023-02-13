import { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import classes from './Checkout.module.css'
import { cartActions } from '../../store/cart';

const Checkout = props =>
{
  const couponRef = useRef()
  const [submitting,setSubmitting]=useState(false)
  const [invalidCoupon,setInvalidCoupon]=useState(false)
  const dispatch=useDispatch()
  const cart=useSelector(state => state)

  const confirmHandler = async(e) =>
  {
    e.preventDefault()
    setSubmitting(true)
    const sendData={ ...cart }
    const couponVal=couponRef.current.value.trim()
    if(couponVal) sendData.coupon=couponVal

    const response = await fetch(process.env.REACT_APP_API+'/order',
    {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(sendData)
    });
    const data=await response.json()
    
    // console.log(data)
    setSubmitting(false)
    // check for coupon validity
    if(data.error)
    {
      setInvalidCoupon(true)
      return
    }
    // to show after submit message in the Modal
    props.setDidSubmit(true)
    dispatch(cartActions.clearCart())
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