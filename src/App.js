import logo from './logo.svg';
import './App.css';
import Addfisat from './components/Addfisat';
import SearchStudent from './components/SearchStudent';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Addfisat/>}/>
<Route path='/search' element={<SearchStudent/>}/>
<Route path='/viewall' element={<ViewAll/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
