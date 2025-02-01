import React, { useState } from "react";
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
        <div className="menu-all">
      <nav className="navbar">
        <div className="all-textmenu">

          <img src="/logo-ma.png" />   
          
      <div className="hamburger" onClick={toggleMenu}>
      <RxHamburgerMenu size={60} color="#fff" />
        
        
      </div>

      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" className="menu-link">
            Главная
          </Link>
        </li>
        <li
          className="menu-item dropdown"
          onMouseEnter={() => setIsAboutDropdownOpen(true)}
          onMouseLeave={() => setIsAboutDropdownOpen(false)}
        >
          <Link className="menu-link">
            Обо мне
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
          onMouseEnter={() => setIsPublicationsDropdownOpen(true)}
          onMouseLeave={() => setIsPublicationsDropdownOpen(false)}
        >
          <Link className="menu-link">
            Публикации
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
          onMouseEnter={() => setIsResearchDropdownOpen(true)}
          onMouseLeave={() => setIsResearchDropdownOpen(false)}
        >
          <Link className="menu-link">
            Проведение и руководство <br></br> в научных исследованиях
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
          onMouseEnter={() => setIsMobilityDropdownOpen(true)}
          onMouseLeave={() => setIsMobilityDropdownOpen(false)}
        >
          <Link className="menu-link">
          Научно-исследовательская <br></br> деятельность 
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
          onMouseEnter={() => setIsSeminarsDropdownOpen(true)}
          onMouseLeave={() => setIsSeminarsDropdownOpen(false)}
        >
          <Link className="menu-link">
            Участие в семинарах <br></br> и тренингах
          </Link>
          {isSeminarsDropdownOpen && (
            <ul className="dropdown-menu">
              <li
                className="menu-item dropdown"
                onMouseEnter={() => setIsMoinkrDropdownOpen(true)}
                onMouseLeave={() => setIsMoinkrDropdownOpen(false)}
              >

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
