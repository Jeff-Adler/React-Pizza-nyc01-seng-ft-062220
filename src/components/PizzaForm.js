import React from "react"

class PizzaForm extends React.Component {

  render () {
    return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" onChange={event => this.props.changeTopping(event)} className="form-control" placeholder="Pizza Topping" 
            value={
                this.props.selectedPizza.topping
              }/>
        </div>
        <div className="col">
          <select onChange={event => this.props.changeSize(event)} value={this.props.selectedPizza.topping} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" onChange={event => this.props.changeVegetarian(event)} type="radio" value="Vegetarian" checked={this.props.selectedPizza.vegetarian === true ? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={event => this.props.changeVegetarian(event)} type="radio" value="Not Vegetarian" checked={this.props.selectedPizza.vegetarian === false ? true : false}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.props.updatePizza}>Submit</button>
        </div>
      </div>
    )
  }
}

PizzaForm.defaultProps = {
  selectedPizza : {
        topping: "",
        size: "Small",
        vegetarian: null
  }
}

export default PizzaForm
