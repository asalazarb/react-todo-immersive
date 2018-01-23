import React, { Component } from 'react'
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';



class TodoItem extends React.Component {


  render() {
    if(this.props.button){
      return (<li><label>{this.props.value}</label><button id={this.props.id} onClick={this.props.onClickHandler}>Delete</button></li>)
    }

    return (<li><label>{this.props.value}</label><input type="checkbox" id={this.props.id} onClick={this.props.onClickHandler}/></li>)
  }
}

export default TodoItem