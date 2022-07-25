import Home from './routes/home/Home';
import Navigation from './routes/home/navigation/Navigation';
import { Routes, Route } from 'react-router-dom';

const Shop = () => {
  return <h2>le shop</h2>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='shop' element={<Shop />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
