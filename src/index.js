import React from 'react';
import ReactDOM from 'react-dom';
import kenyaFlag from './images/kenya.png'
import tzFlag from './images/tanzania.png'
import rsaFlag from './images/southafrica.png'
import rwandaFlag from './images/rwanda.png'
import zambiaFlag from './images/zambia.png'

class CountryCard extends React.Component{
  constructor(props){
    super (props)
  }
  render ()
  {
    const {country} = this.props.country
    
    return(
      <card key={country}>
      <img src= {this.props.country.url}   />
      <p>{this.props.country.name}</p>
      <p>{this.props.country.capital}</p>
      <p>{this.props.country.population}</p>
      <p>{this.props.country.currency}</p>
      
    </card>
    )
    
  
  }
}

class App extends React.Component{  
  countries = [
    {
      name:"Kenya",
      url:kenyaFlag,
      capital:'Nairobi',
      population:50000,
      language:"English",
      currency:"KSH"
    },
    {
      name:"Tanzania",
      url:tzFlag,
      capital:'Dodoma',
      population:1000000,
      language:"English",
      currency:"TSH"
    },
    {
      name:"South Africa",
      url:rsaFlag,
      capital:' Cape Town',
      population:20000,
      language:"English",
      currency:" ZAR"
    },
    {
      name:"Zambia",
      url:zambiaFlag,
      capital:'Lusaka',
      population:30000,
      language:"English",
      currency:"ZMW"
    },
    {
      name:"Rwanda",
      url:rwandaFlag,
      capital:'Kigali',
      population:70000,
      language:"French",
      currency:"FRw"
    }
  ]        
  count = 0
  state = {
    country:this.countries[this.count]
  }
  
  nextCountry = () =>{
    let maxCountry = this.countries.length;
    if (this.count == maxCountry-1){
      this.count = 0
      
    }
    else {
      this.count +=1
    }

    this.setState({country:this.countries[this.count]})
  }
   render () 
       {
    
    return (
    <div>
      
    <CountryCard country = {this.state.country}/>
   
    <button onClick={this.nextCountry}> Next country</button>
    </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)