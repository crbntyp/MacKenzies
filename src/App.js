import './app.scss';

import {
  Banner,
} from './components/'

import {
  Footer,
  Header,
  Home,
  Services
} from './containers/'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner 
        heading="Truck Delights"
        subHeading="Helping all of Scotland truck safely"
        buttonText="Find out how"
      />
      <Home />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
