import { Download, Features, SectionWrapper } from './components';
import assets from './assets'
import styles from './styles/Global';
const App = () => {
  return (
    <>
    <SectionWrapper 
      title="Your own store of nifty NFTs. Start selling this & growing"
      description = "Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people already using ProNef marketplace"
      showBtn
      mockupImg={assets.homeHero}
      banner="banner"
    />
    <SectionWrapper 
      title="Smart user interface marketplace"
      description = "Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
      mockupImg={assets.homeCards}
      reverse
    />
    <Features />
    <SectionWrapper 
      title="Deployment"
      description = "ProNef is built on expo which runs natively on users devices, you can easily get your apps in people's hands"
      mockupImg={assets.feature}
      reverse
    />
    <SectionWrapper 
      title="Creative way to showcase the store"
      description = "The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT"
      mockupImg={assets.mockup}
      banner="banner02"
    />
    <Download />
    <div className='px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04'>
      <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
      <span className='bold'>Aarush</span>
      </p>
    </div>
    </>
  );
}

export default App;
