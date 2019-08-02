import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUp from './pages/sign-in-and-signup/sign-in-and-signup.component'
import Header from './components/header/header.component'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
function App() {
  return (
   <div>
     <Header />
     <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
     </Switch>
   </div>
  );
}

export default App;
