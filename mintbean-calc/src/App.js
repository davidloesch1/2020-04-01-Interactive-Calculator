import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      payment: null,
      amount: null,
      inputRate: null,
      rate: null,
      periods: null
    }
  }
  handleChange = e => {
    if(e.target.name === "inputRate"){
      this.setState({
         rate: e.target.value/100/12
      })
    }
    this.setState({
      [e.target.name]: parseInt(e.target.value)
    })
  }
  componentDidUpdate = e => {
    
  }
  calculate = e => {
    let p = this.state.amount
    let r = this.state.rate
    let n = this.state.periods
    let a = 0
    a = (p)*[r*((1+r)**n)]/[((1+r)**n) - 1]
    this.setState({
      payment: a
    })
  }
  render() {
    return (
      <>
        <form>
          <div class="form-group">
            <label for="amount">Loan Amount:</label>
            <input
              name="amount"
              type="number"
              class="form-control"
              id="amount"
              placeholder="100000"
              onChange={this.handleChange}
              value={this.state.amount}
            />
          </div>
          <div class="form-group">
            <label for="rate">Interest Rate % per year:</label>
            <input
              name="inputRate"
              type="number"
              class="form-control"
              id="rate"
              placeholder="4"
              onChange={this.handleChange}
              value={this.state.inputRate}
            />
          </div>
          <div class="form-group">
            <label for="months">Loan Term:</label>
            <br />
            Number of Payments:
            (ex: Monthly payments for 5 years would be 5 X 12 = 60 payments)
            <input
              name="periods"
              type="number"
              class="form-control"
              id="months"
              placeholder="# of payments"
              onChange={this.handleChange}
              value={this.state.periods}
            />
          </div>
          
        </form>
        <button onClick={this.calculate}> Submit</button>
        <h1>{this.state.payment}</h1>
      </>
    );
  }
}

export default App;
