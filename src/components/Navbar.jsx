import logo from '../assets/images/logo.svg';
import iconMenu from '../assets/images/icon-menu.svg';
import iconMenuClose from '../assets/images/icon-menu-close.svg';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuDisplayed, setIsMobileMenuDisplayed] = useState(false);

  function handleMenuClick() {
    setIsMobileMenuDisplayed(!isMobileMenuDisplayed);
  }

  return (
    <>
      <div
        className={`fixed top-0 left-0  ${
          isMobileMenuDisplayed ? 'block' : 'hidden'
        } w-screen h-screen opacity-50 bg-very-dark-blue`}
      ></div>
      <div className="flex items-center justify-between py-4 bg-off-white">
        <img src={logo} alt="logo" />
        <div className="flex">
          {!isMobileMenuDisplayed && (
            <button className="z-30" onClick={handleMenuClick}>
              <img src={iconMenu} alt="menu icon" />
            </button>
          )}
          <div
            className={`fixed transition-all ease-in-out duration-500 right-0 top-0 pl-6 bg-off-white h-screen w-[60%] max-w-xs z-20 grid grid-rows-[1fr,2fr] gap-2 ${
              isMobileMenuDisplayed ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <button
              className={`z-30 self-start px-8 py-12 justify-self-end ${
                !isMobileMenuDisplayed ? 'invisible' : ''
              }`}
              onClick={handleMenuClick}
            >
              <img src={iconMenuClose} alt="menu icon close" />
            </button>
            <div className="flex flex-col gap-5">
              <a href="#" className="text-xl text-very-dark-blue">
                Home
              </a>
              <a href="#" className="text-xl text-very-dark-blue">
                New
              </a>
              <a href="#" className="text-xl text-very-dark-blue">
                Popular
              </a>
              <a href="#" className="text-xl text-very-dark-blue">
                Trending
              </a>
              <a href="#" className="text-xl text-very-dark-blue">
                Categories
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
