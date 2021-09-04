import React from 'react';
import { Link } from 'react-router-dom'
import countries from '../countries.json'

class CountryDetails extends React.Component {
    state = {
        name: "",
        capitals: [],
        area: "",
        borders: []
    }

    searchCca3 = (borderCountry) => {
        
        return countries.filter((countriesObj) => {
                return countriesObj.cca3 === borderCountry
        })[0].name.common
    }
        
    

    searchCountriesData = () => {
        if (!this.state.name) {
            const foundCountry = countries.find((countryObj) => {
                return countryObj.cca3 === this.props.match.params.countryName
            })
            if (foundCountry) {
                this.setState({
                    name: foundCountry.name.common,
                    capitals: foundCountry.capital,
                    area: foundCountry.area,
                    borders: foundCountry.borders
                })
            }   
        } else if(this.state.name !== this.searchCca3(this.props.match.params.countryName)) {
            const foundCountry = countries.find((countryObj) => {
                return countryObj.cca3 === this.props.match.params.countryName
            })
            if (foundCountry) {
                this.setState({
                    name: foundCountry.name.common,
                    capitals: foundCountry.capital,
                    area: foundCountry.area,
                    borders: foundCountry.borders
                })
            }
        }
    }
    
    render() {
        this.searchCountriesData();
        return (
            <div>
                <h1>{this.state.name}</h1>
                <table className="table">
                    <thead></thead>
                        <tbody>
                                {this.state.capitals.map((capital) => {
                                    return(
                                        <tr key={capital}>
                                            <td style={{width: "30%"}}>Capital</td>
                                            <td>{capital}</td>
                                        </tr>
                                    );
                                })}
                            <tr>
                                <td>Area</td>
                                <td>
                                    {this.state.area} km
                                    <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                        {this.state.borders.map((borderCountry) => {
                                            return (
                                                <li key={borderCountry}><Link to={`/${borderCountry}`}>{this.searchCca3(borderCountry)}</Link></li>
                                            );
                                        })}
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                </table>
          </div>
        );

    }
}

export default CountryDetails;