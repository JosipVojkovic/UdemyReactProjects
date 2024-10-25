import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {

  const itemsQuantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch()

  function handleShowCart() {
    dispatch(uiActions.showCart())
  }

  return (
    <button onClick={handleShowCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsQuantity}</span>
    </button>
  );
};

export default CartButton;
