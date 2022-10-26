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
      <Banner />
      <Home />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
