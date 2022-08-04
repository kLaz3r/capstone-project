import { Outlet } from 'react-router-dom';

import Directory from '../../components/Directory/Directory';
const Home = () => {
  
  return (
    <div>
      <Directory />
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
