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
import AboutPage from './components/AboutPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Features from './components/Features';
import Journey from './components/Journey';
import Connect from './components/Connect';
import Team from './components/Team';
import PartFireGroup from './components/PartFireGroup';
import FAQ from './components/FAQ';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<div>
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
          </div>}>
          </Route>
          <Route path='/about'
            element={<div>
              <AboutPage />
              <Features />
              <Journey />
              <Connect />
              <Team />
              <PartFireGroup />
              <FAQ />
              <Footer />
            </div>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
