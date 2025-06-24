import { useState } from 'react';
import GooeyNav from '../effects/GooeyNav';

const items = [
  { label: "Home", href: "#home" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      {/* Menu para desktop/tablet */}
      <div className="desktop-nav">
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>

      {/* Menu para mobile */}
      <div className="mobile-menu-container">
        <div className="hamburger-menu">
          <a href="#">
            <img
              src="/public/Logo.png"
              alt="Logo"
              className="mobile-logo"
            />
          </a>
          <div onClick={toggleMenu}>
            {menuActive ? (
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        </div>

        <div className="gooey-nav-container">
          <nav>
            <ul className={menuActive ? 'active' : ''}>
              {items.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={() => setMenuActive(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
