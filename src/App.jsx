import webImageDesktop from './assets/images/image-web-3-desktop.jpg';
import webImageMobile from './assets/images/image-web-3-mobile.jpg';
import retroPcImg from './assets/images/image-retro-pcs.jpg';
import laptopKeyboardImg from './assets/images/image-top-laptops.jpg';
import gamingGrowthImg from './assets/images/image-gaming-growth.jpg';
import NewArticles from './components/NewArticles';
import Article from './components/Article';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="flex flex-col gap-8 p-8 font-inter">
      <Navbar />
      <img
        src={webImageMobile}
        srcSet={`${webImageMobile} 686w, ${webImageDesktop} 1460w`}
        alt="web image"
      />
      <h1 className="text-5xl font-extrabold text-very-dark-blue">
        The bright Future of Web 3.0?
      </h1>
      <p className="text-[15px] text-dark-grayish-blue">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button className="self-start py-3 text-base tracking-[0.2rem] px-9 bg-soft-red text-off-white">
        READ MORE
      </button>
      <NewArticles />
      <section className="flex flex-col gap-6">
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
    </div>
  );
}

export default App;
