import logo from '../assets/images/logo.svg';
import iconMenu from '../assets/images/icon-menu.svg';
import Link from './Link';

const Navbar = ({ handleMenuClick }) => {
  return (
    <>
      <div className="flex items-center justify-between py-4 bg-off-white">
        <img src={logo} alt="logo" />
        <div className="hidden md:flex gap-5">
          <Link text={'Home'} />
          <Link text={'New'} />
          <Link text={'Popular'} />
          <Link text={'Trending'} />
          <Link text={'Categories'} />
        </div>
        <button onClick={handleMenuClick} className="md:hidden">
          <img src={iconMenu} alt="menu icon" />
        </button>
      </div>
    </>
  );
};

export default Navbar;
