/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Toaster } from 'sonner';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { verifyToken } from './store/actions/clientActions';
import CategoriesPage from './pages/CategoryPage'; // İsim değişti
import CategoryPage from './pages/CategoryPage'; // Yeni eklenen sayfa
import ShopPage from './pages/ShopPage';
import TeamPage from './pages/TeamPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Uygulama başladığında token kontrolü yap
    dispatch(verifyToken());
  }, [dispatch]);

  return (
    <>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/categories" component={CategoriesPage} />
            <Route path="/shop/:gender/:category" component={CategoryPage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route path="/product" component={ProductPage} />
            <Route path="/pricing" component={PricingPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/team" component={TeamPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/product-detail/:id" component={ProductPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
      <Toaster />
    </>
  );
};

export default App;