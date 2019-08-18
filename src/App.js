import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {decrementasync,decrement,increment,incrementasync} from "./actions/actions";

class App extends React.Component{
  render(){
      return(
        <div>
          <h1>{this.props.counter}</h1>
          <button onClick={this.props.increment}>+</button>
          <button onClick={this.props.decrement}>-</button>
          <button onClick={this.props.incrementasync}>+A</button>
          <button onClick={this.props.decrementasync}>-A</button>
        </div>
      );
  }
}
const mapDispatchToProps=(dispatch)=>
{
    return bindActionCreators({decrement,increment,incrementasync,decrementasync},dispatch);
}
const mapStateToProps=(store)=>
{
  return{counter:store.counter}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);