import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, tags}) => (    
  <div className='app__menuitem'>  
    <div className='app__menuitem-head'> 
      <div className='app__menuitem-name'>
        <p className='p__cormorant tailwind-props' style={{color: '#DCCA87'}}>{title}</p> 
      </div>
    </div>  
  </div>
);

export default MenuItem;
