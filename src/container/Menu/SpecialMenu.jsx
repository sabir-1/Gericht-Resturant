import React, { useState } from 'react';

import { SubHeading, MenuItem } from '../../components';

import { images, data } from '../../constants';
import './SpecialMenu.css'; 
 
const SpecialMenu = () => {     
  const [full, setFull] = useState(null)  
  const sd = ()=>{
    return "dsd"
  } 
  console.log(sd)     
  return( 
  <div className='app__specialMenu flex__center section__padding'>   

  


  
    <div className="app__specialMenu-title"> 
      <SubHeading title="Menu that fits you palatte"/>   
      <h1 className='headtext__cormorant'>Today’s Special</h1>      

    </div> 
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'> 
        <p className='app__specialMenu-menu_heading'>wine & bear</p>
        <div className='app__specialMenu_menu_items'>
          {data.wines.map((wine, index) =>(
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>
      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt="menu image" />
      </div>
      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className='app__specialMenu_menu_items'>
          {data.wines.map((cocktail, index) =>(
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>

    </div>
    <div style={{marginTop: '15px'}}>
      <button type='button' className='custom__button'> Read Mre</button>
    </div>

    
  </div>
)
}

export default SpecialMenu;
