import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';

const Cart = (props) =>
{
  const dispatch=useDispatch()
  const cart=useSelector(state => state)

  const totalAmount = `$${cart.totalAmount}`;
  const hasItems = cart.items.length > 0;

  const cartItemRemoveHandler = id => dispatch(cartActions.removeItem(id))
  const cartItemAddHandler = item => dispatch(cartActions.addItem(item))

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cart.items.map((item) =>
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={()=>cartItemRemoveHandler(item.id)}
          onAdd={()=>cartItemAddHandler({...item, amount: 1})}
        />
      )}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {modalActions}
    </div>
  )

  return (
    <Modal onClose={props.onClose}>
      {cartModalContent}
    </Modal>
  );
};

export default Cart