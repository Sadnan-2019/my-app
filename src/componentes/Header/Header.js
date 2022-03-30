import React from 'react';
import Navber from '../Navber/Navber';
import Pricing from '../Pricing/Pricing';
// import Navber from './componentes/Navber/Navber';


const Header = () => {
          return (
                    <div>
                              
                              <Navber></Navber>
                              <h3 className='text-6xl font-bold '> Welcome my tailwind</h3>
                              <p className='text-2xl '>Please review me</p>
                              <Pricing></Pricing>
                    </div>
          );
};

export default Header;