import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) =>
{
  return (
      <header className={classes.header}>
        <NavLink to="/" className={({ isActive }) => isActive ? classes.active : undefined} end>
          Home
        </NavLink>
        <NavLink to="/orders" className={({ isActive }) => isActive ? classes.active : undefined}>
          Order History
        </NavLink>
        <NavLink to="/coupons" className={({ isActive }) => isActive ? classes.active : undefined}>
          Your Coupons
        </NavLink>
        <HeaderCartButton onClick={props.onShowCart} />
        <div className={classes.hamburger}>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
        </div>
      </header>
  );
}

export default Header