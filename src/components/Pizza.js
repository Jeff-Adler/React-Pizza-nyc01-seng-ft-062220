import React from "react"

class Pizza extends React.Component {

  clickHandler = (event) => {
    this.props.fillForm(event.target.value)
  }

  render () {
    return(
      <tr>
        <td>{this.props.pizza.topping}</td>
        <td>{this.props.pizza.size}</td>
        <td>{this.props.pizza.vegetarian === true ? "Yes" : "No"}</td>
        <td><button 
              type="button" 
              className="btn btn-primary" 
              value={this.props.pizza.id}
              onClick={event => this.clickHandler(event)}
            >
            Edit Pizza
            </button>
        </td>
      </tr>
    )
  }
}

export default Pizza
