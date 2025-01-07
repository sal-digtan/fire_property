import logo from './logo.svg';
import './App.css';
import NavBarComp from './components/NavBarComp';
import HomeBanner from './components/HeroBanner'
import MultiplyInvestments from './components/MultiplyInvestments';
import SearchBox from './components/SearchBox';
import WorldMap from './components/WorldMap';
import AwardWinning from './components/AwardWinning';
import GroupLisitng from './components/GroupLisitng';
import AffordableCities from './components/AffordableCities';
import Services from './components/Services';
import ShortLet from './components/ShortLet';
import InvestmentLandscape from './components/InvestmentLandscape';
import Maximize from './components/Maximize';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <NavBarComp />
      <HomeBanner />
      <MultiplyInvestments />
      <SearchBox />
      <WorldMap />
      <AwardWinning />
      <GroupLisitng />
      <AffordableCities />
      <Services />
      <ShortLet />
      <InvestmentLandscape />
      <Maximize />
      <Footer />
    </div>
  );
}

export default App;
