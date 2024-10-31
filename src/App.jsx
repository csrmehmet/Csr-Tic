// App.jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

import ShopPage from './pages/ShopPage';
import TeamPage from './pages/TeamPage';

import SignupPage from './pages/SignupPage';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/product" component={ProductPage} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/signup" component={SignupPage}/>
          <Route path="/product-detail/:id" component={ProductPage} />
          
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;