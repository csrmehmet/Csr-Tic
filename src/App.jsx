import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import ShopPage from './pages/ShopPage';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/product" component={ProductPage} />
            <Route path="/pricing" component={PricingPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/shop" component={ShopPage} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;