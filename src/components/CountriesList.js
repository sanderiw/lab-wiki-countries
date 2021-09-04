import React from 'react';
import { Link } from 'react-router-dom'
//import countries from '../countries.json'

class CountriesList extends React.Component {


    render() {
        //console.log(this.props.countries[0])
        return(
            // Bootstrap container wrapper div
            <div className="container">
                    {/* Countries List (Bootstrap column) */}
                    <div style={{maxHeight: "90vh", overflow: "scroll"}}>
                        <div className="list-group">
                            {this.props.countries.map(countryObj => {
                                return (
                                    <Link key={countryObj.name.common} className="list-group-item list-group-item-action" to={`/${countryObj.cca3}`}>{countryObj.flag} {countryObj.name.common}</Link>
                                );
                            })}    
                        </div>
                    </div>
                {/* </div> */}
            </div>
        );
    }
}

export default CountriesList;