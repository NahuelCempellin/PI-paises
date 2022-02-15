import './App.css';
import {React} from 'react';
import {Route,Routes} from 'react-router-dom';
import LandingPage from './Modules/Landingpage/LandingPage.jsx';
import {Form} from './Modules/Form/Form';
import CountryDetail from './Modules/Countries/CountryDetail';
import Home from './Modules/Countries/index'


function App() {
 
 
  
  
  return (
    <div className="App">
     
      <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/countries" element={<Home/>} />
      <Route exact path='/form' element={<Form/>}/>
      <Route exact path='/countries/:idL' element={<CountryDetail/>}/>
    </Routes>

    

    </div>
    
  );
}

export default App;
