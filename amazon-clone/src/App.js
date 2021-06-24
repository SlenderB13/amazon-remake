import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Checkout from './components/checkout/Checkout';
import Payment from './components/checkout/payment/Payment';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import { auth } from './firebase/firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{cart}, dispatch] = useStateValue();


  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if(authUser) {
          dispatch({
            type: 'SET_USER',
            user: authUser,
            email: authUser.email,
          })
          console.log(authUser);
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
          email: null
        })
      }
    })
  }, [])
  return (

      <Router>
        <div className="app">
          <Switch>
          <Route path="/payment">
              <Header />
              <Payment />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/">
              <Header />
              <Home />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
