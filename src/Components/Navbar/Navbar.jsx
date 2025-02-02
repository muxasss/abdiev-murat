import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx';
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdowns((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="menu-all">
      <nav className="navbar">
        <div className="all-textmenu">
          <img src="/logo-ma.png" alt="Logo" />
          <div className="hamburger" onClick={toggleMenu}>
            <RxHamburgerMenu size={60} color="#fff" />
          </div>
          <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
            <li>
              <Link to="/" className="menu-link">ГЛАВНАЯ</Link>
            </li>
            <li className="menu-item dropdown" onClick={() => toggleDropdown("about")}> 
              <Link className="menu-link">ОБО МНЕ</Link>
              {openDropdowns["about"] && (
                <ul className="dropdown-menu">
                  <li><Link to="resume" className="dropdown-link">Резюме</Link></li>
                  <li><Link to="obrazovanie" className="dropdown-link">Образование</Link></li>
                  <li><Link to="zvanie" className="dropdown-link">Научная степень и звание</Link></li>
                  <li><Link to="organization" className="dropdown-link">Членство в организациях</Link></li>
                  <li><Link to="awards" className="dropdown-link">Награды</Link></li>
                </ul>
              )}
            </li>
            <li className="menu-item dropdown" onClick={() => toggleDropdown("publications")}> 
              <Link className="menu-link">ПУБЛИКАЦИИ</Link>
              {openDropdowns["publications"] && (
                <ul className="dropdown-menu">
                  <li><Link to="nauchtrud" className="dropdown-link">Научные статьи</Link></li>
                  <li><Link to="scopus" className="dropdown-link">Научные статьи Scopus</Link></li>
                  <li><Link to="monograftion" className="dropdown-link">Монографии</Link></li>
                  <li><Link to="lessonbooks" className="dropdown-link">Учебные книги</Link></li>
                  <li><Link to="griffbooks" className="dropdown-link">Книги с грифом</Link></li>
                  <li><Link to="avtorsvid" className="dropdown-link">Авторские свидетельства</Link></li>
                </ul>
              )}
            </li>
            <li className="menu-item dropdown" onClick={() => toggleDropdown("research")}> 
              <Link className="menu-link">НАУЧНО-ИССЛЕДОВАТЕЛЬСКАЯ ДЕЯТЕЛЬНОСТЬ</Link>
              {openDropdowns["research"] && (
                <ul className="dropdown-menu">
                  <li><Link to="dissertations" className="dropdown-link">Руководство диссертаций</Link></li>
                  <li><Link to="opposition" className="dropdown-link">Оппонирование</Link></li>
                  <li><Link to="tranings" className="dropdown-link">Лекции и семинары</Link></li>
                  <li><Link to="nirs" className="dropdown-link">Руководство НИРС</Link></li>
                  <li><Link to="conferance" className="dropdown-link">Конференции</Link></li>
                  <li><Link to="journals" className="dropdown-link">Членство в журналах</Link></li>
                </ul>
              )}
            </li>
            <li className="menu-item"> 
              <Link to="academymobile" className="menu-link">АКАДЕМИЧЕСКАЯ МОБИЛЬНОСТЬ</Link>
            </li>
            <li className="menu-item"> 
              <Link to="seminar" className="menu-link">СЕМИНАРЫ И ТРЕНИНГИ</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
