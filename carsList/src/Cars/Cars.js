import React, {Component} from 'react'
import Car from './Car/Car'

export default class Cars extends Component {
  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010}
    ]
  }

  goToHomePage = () => {
    this.props.history.push({
      pathname: '/'
    })
  }

  render() {
    return (
      <React.Fragment>
             <div style={{
                 width: 400,
                 margin: 'auto',
                 paddingTop: '20px',
                 textAlign: 'center'
               }}>
               <button onClick={this.goToHomePage}>Go Home Page</button>

               {this.state.cars.map((car, index) => {
                   return (
                     <Car
                       key={index}
                       name={car.name}
                       year={car.year}
                     />
                   )
                 })}
             </div>
          </React.Fragment>
    )
  }
}
