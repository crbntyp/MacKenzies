import './App.scss';

import Navigation from './components/navigation/Navigation';
import Banner from './components/banner/Banner';
import Card from './components/card/Card';
import {navigation} from './data/siteData';

function App() {
  return (
    <div className="App">
      <Banner />
      <Navigation items={navigation} />
      <Card items={navigation} />
    </div>
  );
}

export default App;
