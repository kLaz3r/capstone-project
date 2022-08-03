import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Authentication from './routes/authentication/Authentication';
import { Routes, Route } from 'react-router-dom';
import Checkout from './routes/checkout/Checkout';
import Shop from './routes/shop/Shop';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='shop' element={<Shop />}></Route>
        <Route path='auth' element={<Authentication />}></Route>
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
