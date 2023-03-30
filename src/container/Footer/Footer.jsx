import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { FooterOverlay, Newsletter } from '../../components';
import {images} from '../../constants'

import './Footer.css';

const Footer = () => ( 
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>

    <div className='app__footer-links'>
      <div className='app__footer-links_content same-colum'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-344-1230</p>

      </div>
      <div className='app__footer-links_logo same-colum'>
        <img src={images.gericht} alt='footer image' />
        <p className='p__opensans'> The Best way to find yourself</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop: 15}} />
        <div className='app__footer-links_icons'>
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>

        </div>


      </div>
      <div className='app__footer-links_work same-colum'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday: </p>
        <p className='p__opensans'>07:00am - 12:00am</p>
        <p className='p__opensans'>Saturday-Sunday: </p>
        <p className='p__opensans'>07:pm - 11:00pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2021 Gericht. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
