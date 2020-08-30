import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
var URL = 'http://localhost:3000/pizzas/'


class App extends Component {

  constructor () {
    super()
    this.state = {
      isLoaded : false,
      selectedPizza : null
    }
  }

  componentDidMount () {
    fetch(URL)
      .then(response => response.json())
      .then(pizzas => {
        this.setState({
          pizzas:pizzas,
          isLoaded:true
        })
      })
  }

  fillForm = (id) => {
    const pizza = this.state.pizzas.find(pizza => {
      return (
        pizza.id === parseInt(id,10)
      )
    })

    this.setState({selectedPizza : pizza})
  }

  changeTopping = (event) => {
    this.setState(
      {selectedPizza: {
        ...this.state.selectedPizza, 
        topping: event.target.value
      }
    })
  }

  changeSize = (event) => {
    this.setState(
      {selectedPizza: {
        ...this.state.selectedPizza, 
        size: event.target.value
      }
    })
  }

  changeVegetarian = (event) => {
    if (event.target.value === "Vegetarian") {
      this.setState(
        {selectedPizza: {
          ...this.state.selectedPizza, 
          vegetarian: true
        }
      })
    } else {
      this.setState(
        {selectedPizza: {
          ...this.state.selectedPizza, 
          vegetarian: false
        }
      })
    }
  }

  patchPizzas = () => {

    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.selectedPizza)
    }

    fetch(URL + (this.state.selectedPizza.id),configObj)
      .then(response => response.json())
      .then(pizza => console.log(pizza))
  }

  updatePizza = () => {
    this.state.pizzas[this.state.selectedPizza.id - 1] = this.state.selectedPizza

    this.patchPizzas()

    this.setState({pizzas: this.state.pizzas,
                  selectedPizza:null})
  }

  render() {
    return (
      <Fragment>
        <Header/>
        {this.state.selectedPizza !== null ? <PizzaForm updatePizza={this.updatePizza} selectedPizza={this.state.selectedPizza} changeTopping={this.changeTopping}
          changeSize={this.changeSize} changeVegetarian={this.changeVegetarian}  />
        : <PizzaForm/>}
        {this.state.isLoaded === true ? <PizzaList fillForm={this.fillForm} pizzas={this.state.pizzas}/> : "Loading!"}
      </Fragment>
    );
  }
}

export default App;
