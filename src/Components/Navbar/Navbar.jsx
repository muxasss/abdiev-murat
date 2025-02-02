import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx';
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Гамбургер-меню
  const [isMobile, setIsMobile] = useState(false); // Определение мобильного устройства
  const [activeDropdown, setActiveDropdown] = useState(null); // Какое меню открыто

  // Проверяем тип устройства
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Переключение выпадающего меню
  const toggleDropdown = (menu) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === menu ? null : menu);
    }
  };

  // Закрытие всех меню при закрытии гамбургера
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setActiveDropdown(null);
    }
  };

  return (
    <div className="menu-all">
      <nav className="navbar">
        <div className="all-textmenu">
          <img src="/logo-ma.png" alt="Logo" />
          <div className="hamburger" onClick={toggleMenu}>
            <RxHamburgerMenu size={60} color="#fff" />
          </div>

          <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <Link to="/" className="menu-link">ГЛАВНАЯ</Link>
            </li>

            {/* ОБО МНЕ */}
            <li
              className="menu-item dropdown"
              onMouseEnter={!isMobile ? () => setActiveDropdown("about") : undefined}
              onMouseLeave={!isMobile ? () => setActiveDropdown(null) : undefined}
            >
              <Link 
                className="menu-link"
                onClick={isMobile ? (e) => { e.preventDefault(); toggleDropdown("about"); } : undefined}
              >
                ОБО МНЕ
              </Link>
              {activeDropdown === "about" && (
                <ul className="dropdown-menu">
                  <li><Link to="resume" className="dropdown-link">Резюме</Link></li>
                  <li><Link to="obrazovanie" className="dropdown-link">Образование</Link></li>
                  <li><Link to="zvanie" className="dropdown-link">Научная степень и звание</Link></li>
                  <li><Link to="organization" className="dropdown-link">Членство в организациях</Link></li>
                  <li><Link to="awards" className="dropdown-link">Награды</Link></li>
                </ul>
              )}
            </li>

            {/* ПУБЛИКАЦИИ */}
            <li
              className="menu-item dropdown"
              onMouseEnter={!isMobile ? () => setActiveDropdown("publications") : undefined}
              onMouseLeave={!isMobile ? () => setActiveDropdown(null) : undefined}
            >
              <Link 
                className="menu-link"
                onClick={isMobile ? (e) => { e.preventDefault(); toggleDropdown("publications"); } : undefined}
              >
                ПУБЛИКАЦИИ
              </Link>
              {activeDropdown === "publications" && (
                <ul className="dropdown-menu">
                  <li><Link to="nauchtrud" className="dropdown-link">Научные статьи</Link></li>
                  <li><Link to="scopus" className="dropdown-link">Статьи Scopus</Link></li>
                  <li><Link to="monograftion" className="dropdown-link">Монографии</Link></li>
                  <li><Link to="lessonbooks" className="dropdown-link">Учебные книги</Link></li>
                  <li><Link to="griffbooks" className="dropdown-link">Книги с грифом</Link></li>
                  <li><Link to="avtorsvid" className="dropdown-link">Авторские свидетельства</Link></li>
                </ul>
              )}
            </li>

            {/* ПРОВЕДЕНИЕ ИССЛЕДОВАНИЙ */}
            <li
              className="menu-item dropdown"onMouseEnter={!isMobile ? () => setActiveDropdown("research") : undefined}
              onMouseLeave={!isMobile ? () => setActiveDropdown(null) : undefined}
            >
              <Link 
                className="menu-link"
                onClick={isMobile ? (e) => { e.preventDefault(); toggleDropdown("research"); } : undefined}
              >
                НАУЧНЫЕ ИССЛЕДОВАНИЯ
              </Link>
              {activeDropdown === "research" && (
                <ul className="dropdown-menu">
                  <li><Link to="dissertations" className="dropdown-link">Руководство диссертаций</Link></li>
                  <li><Link to="research/opponents" className="dropdown-link">Оппоненство</Link></li>
                  <li><Link to="tranings" className="dropdown-link">Семинары и тренинги</Link></li>
                </ul>
              )}
            </li>

            {/* МОБИЛЬНОСТЬ */}
            <li
              className="menu-item dropdown"
              onMouseEnter={!isMobile ? () => setActiveDropdown("mobility") : undefined}
              onMouseLeave={!isMobile ? () => setActiveDropdown(null) : undefined}
            >
              <Link 
                className="menu-link"
                onClick={isMobile ? (e) => { e.preventDefault(); toggleDropdown("mobility"); } : undefined}
              >
                АКАДЕМИЧЕСКАЯ МОБИЛЬНОСТЬ
              </Link>
              {activeDropdown === "mobility" && (
                <ul className="dropdown-menu">
                  <li><Link to="conferance" className="dropdown-link">Конференции</Link></li>
                  <li><Link to="mobility/conferences" className="dropdown-link">Журналы</Link></li>
                  <li><Link to="nirs" className="dropdown-link">НИРС</Link></li>
                </ul>
              )}
            </li>

            {/* СЕМИНАРЫ */}
            <li
              className="menu-item dropdown"
              onMouseEnter={!isMobile ? () => setActiveDropdown("seminars") : undefined}
              onMouseLeave={!isMobile ? () => setActiveDropdown(null) : undefined}
            >
              <Link 
                className="menu-link"
                onClick={isMobile ? (e) => { e.preventDefault(); toggleDropdown("seminars"); } : undefined}
              >
                СЕМИНАРЫ И ТРЕНИНГИ
              </Link>
              {activeDropdown === "seminars" && (
                <ul className="dropdown-menu">
                  <li><a target="_blank" href="https://edu.gov.kg/" className="dropdown-link">МОиНКР</a></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;