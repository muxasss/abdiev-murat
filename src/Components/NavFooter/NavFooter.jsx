import React from 'react'
import './NavFooter.css';
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { IoSearch, IoLogoWhatsapp } from 'react-icons/io5';



const NavFooter = () => {
  return (
    <div>
 <footer className="footer">
      <div className="footer-content">
        <h3>КОНТАКТЫ</h3>
        <div className='full'>

        <ul className="contact-list">
          <li>
            <FaLocationDot  className="icona" />
            <a target='blank' href='https://www.google.com/maps/place/%D0%9E%D1%88%D1%81%D0%BA%D0%B8%D0%B9+%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D0%A3%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82+%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8+%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D0%BA%D0%B0+%D0%9C.+%D0%9C.+%D0%90%D0%B4%D1%8B%D1%88%D0%B5%D0%B2%D0%B0/@40.4875114,72.8321974,582m/data=!3m2!1e3!4b1!4m6!3m5!1s0x38bdae4097a292ad:0x8567fbd6260a879f!8m2!3d40.4875114!4d72.8321974!16s%2Fm%2F0cpbj1n?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D'>ул. Исанова 81, Ош, Кыргызстан</a>
          </li>
          <li>
            <FaPhoneAlt  className="icona" />
            <a target='blank' href='tel:+996772456100'>+996772456100</a>
          </li>
          <li>
            <MdEmail className="icona" />
            <a target='blank' href='https://mabdiev1977@mail.ru/'>mabdiev1977@mail.ru</a>
          </li>
        </ul>
      
      </div>
        <div className='alls'>

          <a href='https://www.facebook.com/people/%D0%9C%D1%83%D1%80%D0%B0%D1%82-%D0%90%D0%B1%D0%B4%D0%B8%D0%B5%D0%B2/pfbid0u53et5mM3Yq1Da2q6tqDraHcxWGkLVkbj8bh18zH4qPPoFQxqN5yo4MHuvZ1vKrpl/'><FaFacebookF className='logo-facebook'/></a>
          <a href='https://www.instagram.com/mabdiev1977/'><FaInstagram className='logo-insta' /></a>
          <a href='https://wa.me/+996772456100'><IoLogoWhatsapp className='logo-whatsapp' /></a>
          <a href='https://t.me/Abdiev_Murat'><FaTelegramPlane className='logo-telegram' /></a>
        </div>
        
        </div>
        <div className='poloska'></div>
        <p className='name-2025'>© Murat Abdiev 2025</p>
        <a className='link-pixart' href='https://t.me/pixelcraft_me'>Сайт разработал PixelCraft</a>
    </footer>
    </div>
  )
}

export default NavFooter