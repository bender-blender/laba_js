import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  // ✅ Стейт для управления показом ссылок
  const [showLinks, setShowLinks] = useState(false);

  // ✅ Функция, которая проверяет ширину окна
  const showMenu = () => {
    if (window.innerWidth > 800) {
      setShowLinks(true);
    } else {
      setShowLinks(false);
    }
  };

  // ✅ При загрузке и изменении размера окна вызываем showMenu
  useEffect(() => {
    showMenu();
    window.addEventListener("resize", showMenu);
    return () => window.removeEventListener("resize", showMenu);
  }, []);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          {/* ✅ Кнопка для открытия/закрытия меню */}
          <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>

        {/* ✅ Контейнер для ссылок */}
        <div className={`links-container ${showLinks ? "show-container" : ""}`}>
          <ul className="links">
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ Социальные иконки */}
        <ul className="social-icons">
          {social.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
