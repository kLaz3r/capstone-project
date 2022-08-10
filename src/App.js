import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { Route, Routes } from 'react-router-dom';
import Authentication from './routes/authentication/Authentication';
import Checkout from './routes/checkout/Checkout';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Shop from './routes/shop/Shop';
import { checkUserSession } from './store/user/user-action';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='shop/*' element={<Shop />}></Route>
        <Route path='auth' element={<Authentication />}></Route>
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
