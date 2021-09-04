//import logo from './logo.svg';
//import './App.css';
// Import react-router components
import { Route } from 'react-router-dom';
// Import components
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import data from "./countries.json"


function App() {
  const countries = data;
  return (
    <div className="container">
      {/* {console.log(countries)} */}
      <Navbar />
        <div className="row">
          <div className="col-4">
            <CountriesList countries={countries} />
          </div>
          <div className="col-8">
            <Route path="/:countryName" component={CountryDetails} />
          </div>  
        </div>
    </div>
  );
}

export default App;
