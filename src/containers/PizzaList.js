import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  mapPizzas = () => {
    return (
      this.props.pizzas.map(pizza => {
        return (
          <Pizza key={pizza.id} pizza={pizza} fillForm={this.props.fillForm}/>
        )
      })
    )
  }

  render() {

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.mapPizzas()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
