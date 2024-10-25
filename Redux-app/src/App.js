import { useSelector } from 'react-redux';

import Counter from './components/Counter';
import Auth from "./components/Auth"
import Header from "./components/Header"
import UserProfile from "./components/UserProfile"



function App() {

  const isAuthenticated = useSelector(state => state.authentication.isAuthenticated)

  return (
    <>
      <Header />
      {isAuthenticated? <UserProfile />: <Auth />}
      <Counter />
    </>
    
  );
}

export default App;
