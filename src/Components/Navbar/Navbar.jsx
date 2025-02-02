import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx';
import "./Navbar.css";

const Navbar = () => {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isPublicationsDropdownOpen, setIsPublicationsDropdownOpen] = useState(false);
  const [isResearchDropdownOpen, setIsResearchDropdownOpen] = useState(false);
  const [isMobilityDropdownOpen, setIsMobilityDropdownOpen] = useState(false);
  const [isSeminarsDropdownOpen, setIsSeminarsDropdownOpen] = useState(false);
  const [isJournalsDropdownOpen, setIsJournalsDropdownOpen] = useState(false);
  const [isMoinkrDropdownOpen, setIsMoinkrDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Для гамбургера
  const [isMobile, setIsMobile] = useState(false); // Для определения мобильного устройства

  // Определяем, является ли устройство мобильным
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Установите breakpoint для мобильных устройств
    };

    handleResize(); // Проверка при загрузке
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Функция для переключения меню на мобильных устройствах
  const toggleDropdown = (setter, value) => {
    if (isMobile) {
      setter(!value);
    }
  };

  // Закрытие всех выпадающих меню при закрытии гамбургера
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsAboutDropdownOpen(false);
      setIsPublicationsDropdownOpen(false);
      setIsResearchDropdownOpen(false);
      setIsMobilityDropdownOpen(false);
      setIsSeminarsDropdownOpen(false);
      setIsJournalsDropdownOpen(false);
      setIsMoinkrDropdownOpen(false);
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
              <Link to="/" className="menu-link">
                ГЛАВНАЯ
              </Link>
            </li>
            <li
              className="menu-item dropdown"
              onMouseEnter={!isMobile ? () => setIsAboutDropdownOpen(true) : undefined}
              onMouseLeave={!isMobile ? () => setIsAboutDropdownOpen(false) : undefined}
              onClick={isMobile ? () => toggleDropdown(setIsAboutDropdownOpen, isAboutDropdownOpen) : undefined}
            >
              <Link className="menu-link">
                ОБО МНЕ
              </Link>
              {isAboutDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="resume" className="dropdown-link">
                      Резюме
                    </Link>
                  </li>
                  <li>
                    <Link to="obrazovanie" className="dropdown-link">
                      Образование
                    </Link>
                  </li>
                  <li>
                    <Link to="zvanie" className="dropdown-link">
                      Научная степень и звание
                    </Link>
                  </li>
                  <li>
                    <Link to="organization" className="dropdown-link">
                      Членство в различных организациях
                    </Link>
                  </li>
                  <li>
                    <Link to="awards" className="dropdown-link">
                      Награды
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="menu-item dropdown"
              onMouseEnter={!isMobile ? () => setIsPublicationsDropdownOpen(true) : undefined}
              onMouseLeave={!isMobile ? () => setIsPublicationsDropdownOpen(false) : undefined}
              onClick={isMobile ? () => toggleDropdown(setIsPublicationsDropdownOpen, isPublicationsDropdownOpen) : undefined}
            >
              <Link className="menu-link">
                ПУБЛИКАЦИИ
              </Link>
              {isPublicationsDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="nauchtrud" className="dropdown-link">
                      Научные статьи
                    </Link>
                  </li>
                  <li>
                    <Link to="scopus" className="dropdown-link">
                      Научные статьи Scopus
                    </Link>
                  </li>
                  <li>
                    <Link to="monograftion" className="dropdown-link">
                      Монографии
                    </Link>
                  </li>
                  <li>
                    <Link to="lessonbooks" className="dropdown-link">
                      Учебные книги и пособия
                    </Link>
                  </li>
                  <li>
                    <Link to="griffbooks" className="dropdown-link">
                      Учебные книги и пособия с грифом
                    </Link>
                  </li>
                  <li>
                    <Link to="avtorsvid" className="dropdown-link">
                      Авторские свидетельства
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="menu-item dropdown"
              onMouseEnter={!isMobile ? () => setIsResearchDropdownOpen(true) : undefined}
              onMouseLeave={!isMobile ? () => setIsResearchDropdownOpen(false) : undefined}
              onClick={isMobile ? () => toggleDropdown(setIsResearchDropdownOpen, isResearchDropdownOpen) : undefined}
            >
              <Link className="menu-link">
                ПРОВЕДЕНИЕ И РУКОВОДСТВО <br></br> В НАУЧНЫХ ИССЛЕДОВАНИЯХ
              </Link>
              {isResearchDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="dissertations" className="dropdown-link">
                      Руководство диссертаций
                    </Link>
                  </li>
                  <li>
                    <Link to="research/opponents" className="dropdown-link">
                      Оппоненство
                    </Link>
                  </li>
                  <li>
                    <Link to="tranings" className="dropdown-link">
                      Проведение гостевых лекций, семинаров и тренингов
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="menu-item dropdown"
              onMouseEnter={!isMobile ? () => setIsMobilityDropdownOpen(true) : undefined}
              onMouseLeave={!isMobile ? () => setIsMobilityDropdownOpen(false) : undefined}
              onClick={isMobile ? () => toggleDropdown(setIsMobilityDropdownOpen, isMobilityDropdownOpen) : undefined}
            >
              <Link className="menu-link">
                НАУЧНО-ИССЛЕДОВАТЕЛЬСКАЯ <br></br> ДЕЯТЕЛЬНОСТЬ
              </Link>
              {isMobilityDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="conferance" className="dropdown-link">
                      Участие в научных конференциях и форумах
                    </Link>
                  </li>
                  <li>
                    <Link to="mobility/conferences" className="dropdown-link">
                      Членство в научных журналах
                    </Link>
                  </li>
                  <li>
                    <Link to="dissertations" className="dropdown-link">
                      Научное руководство диссертации
                    </Link>
                  </li>
                  <li>
                  <Link to="opposition" className="dropdown-link">
                      Оппонирование диссертаций
                    </Link>
                  </li>
                  <li>
                    <Link to="nirs" className="dropdown-link">
                      Руководство НИРС
                    </Link>
                  </li>
                  <li>
                    <Link to="academymobile" className="dropdown-link">
                      Академическая мобильность
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="menu-item dropdown"
              onMouseEnter={!isMobile ? () => setIsSeminarsDropdownOpen(true) : undefined}
              onMouseLeave={!isMobile ? () => setIsSeminarsDropdownOpen(false) : undefined}
              onClick={isMobile ? () => toggleDropdown(setIsSeminarsDropdownOpen, isSeminarsDropdownOpen) : undefined}
            >
              <Link className="menu-link">
                УЧАСТИЕ В СЕМИНАРАХ <br></br> И ТРЕНИНГАХ
              </Link>
              {isSeminarsDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <a target="blank" href="https://edu.gov.kg/" className="dropdown-link">
                      МОиНКР
                    </a>
                  </li>
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