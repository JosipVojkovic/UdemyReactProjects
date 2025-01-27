import { useDispatch, useSelector } from 'react-redux';
import { authenticationActions } from '../store/authentication.js';

import classes from './Header.module.css';

const Header = () => {

  const isAuthenticated = useSelector(state => state.authentication.isAuthenticated)
  const dispatch = useDispatch()

  function handleLogout(){
    dispatch(authenticationActions.logout())
  }


  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>

      {isAuthenticated && 
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
      }
      
    </header>
  );
};

export default Header;
