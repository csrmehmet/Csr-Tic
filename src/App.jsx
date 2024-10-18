import { BrowserRouter as Router } from 'react-router-dom';

import Header from './layout/Header';

import Footer from './layout/Footer';


const App = () => {
  return (
    <Router>
    <div>
      <Header />
      
      <Footer />
    </div>
  </Router>
  );
};

export default App;