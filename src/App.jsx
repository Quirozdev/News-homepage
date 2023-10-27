import webImageDesktop from './assets/images/image-web-3-desktop.jpg';
import webImageMobile from './assets/images/image-web-3-mobile.jpg';
import retroPcImg from './assets/images/image-retro-pcs.jpg';
import laptopKeyboardImg from './assets/images/image-top-laptops.jpg';
import gamingGrowthImg from './assets/images/image-gaming-growth.jpg';
import NewArticles from './components/NewArticles';
import Article from './components/Article';
import Navbar from './components/Navbar';
import SidebarMenu from './components/SidebarMenu';
import { useEffect, useState } from 'react';
import Overlay from './components/Overlay';

function App() {
  const [isMobileMenuDisplayed, setIsMobileMenuDisplayed] = useState(false);

  useEffect(() => {
    function hide(e) {
      if (e.key === 'Escape' && isMobileMenuDisplayed) {
        setIsMobileMenuDisplayed(false);
      }
    }

    document.addEventListener('keydown', hide);

    return () => {
      document.removeEventListener('keydown', hide);
    };
  }, [isMobileMenuDisplayed]);

  return (
    <div className="px-8 py-4 font-inter max-w-6xl m-auto">
      <Navbar
        isMobileMenuDisplayed={isMobileMenuDisplayed}
        handleMenuClick={() => setIsMobileMenuDisplayed(!isMobileMenuDisplayed)}
      />
      <SidebarMenu
        shouldBeDisplayed={isMobileMenuDisplayed}
        handleMenuClick={() => setIsMobileMenuDisplayed(false)}
      />
      <Overlay shouldOverlay={isMobileMenuDisplayed} />
      <main className="grid gap-8 md:grid-cols-[2fr,1fr]">
        <section className="grid gap-8">
          <img
            src={webImageMobile}
            srcSet={`${webImageMobile} 686w, ${webImageDesktop} 1460w`}
            alt="web image"
          />
          <div className="grid gap-4 lg:grid-cols-2">
            <h1 className="text-5xl font-extrabold text-very-dark-blue">
              The bright Future of Web 3.0?
            </h1>
            <div className="grid gap-6">
              <p className="text-[15px] text-dark-grayish-blue">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="justify-self-start py-3 text-base tracking-[0.2rem] px-9 bg-soft-red text-off-white">
                READ MORE
              </button>
            </div>
          </div>
        </section>
        <NewArticles />
        <section className="grid gap-6 lg:grid-cols-3 lg:col-span-2">
          <Article
            index="01"
            imgSrc={retroPcImg}
            title="Reviving Retro PCs"
            summary="What happens when old PCs are given modern upgrades?"
          />
          <Article
            index="02"
            imgSrc={laptopKeyboardImg}
            title="Top 10 Laptops of 2022"
            summary="Our best picks for various needs and budgets."
          />
          <Article
            index="03"
            imgSrc={gamingGrowthImg}
            title="The Growth of Gaming"
            summary="How the pandemic has sparked fresh opportunities."
          />
        </section>
      </main>
    </div>
  );
}

export default App;
