import './App.css';
import Calcultor from './Calculator/Calculator';
import './index.css';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Sharedlayout from './SharedLayout';
import Currency from './CurrencyConverter/Currency';
import Weather from './Weather/Weather';

function App() {
  return (
    <div className='tt'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Sharedlayout />} >
      <Route index element = {<Calcultor />} />
      <Route path='/currency' element = { <Currency />   } />
      <Route path = '/weather' element = { <Weather /> } />
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
