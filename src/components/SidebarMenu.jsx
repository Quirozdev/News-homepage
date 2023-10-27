import iconMenuClose from '../assets/images/icon-menu-close.svg';
import Link from './Link';

const SidebarMenu = ({ shouldBeDisplayed, handleMenuClick }) => {
  return (
    <div
      className={`fixed transition-all ease-in-out duration-500 right-0 top-0 pl-6 bg-off-white h-screen w-[60%] max-w-xs z-20 grid grid-rows-[1fr,2fr] gap-2 ${
        shouldBeDisplayed ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button
        className={`z-30 self-start px-8 py-12 justify-self-end`}
        onClick={handleMenuClick}
      >
        <img src={iconMenuClose} alt="menu icon close" />
      </button>
      <div className="flex flex-col gap-5">
        <Link text={'Home'} />
        <Link text={'New'} />
        <Link text={'Popular'} />
        <Link text={'Trending'} />
        <Link text={'Categories'} />
      </div>
    </div>
  );
};

export default SidebarMenu;
