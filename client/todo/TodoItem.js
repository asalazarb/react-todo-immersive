import React from 'react'
import {string, bool, func} from 'prop-types'



class TodoItem extends React.Component {
  static propTypes = {
    onClickHandler: func,
    id: string,
    value: string,
    button: bool
  }

  static defaultProps = {
    onClickHandler: () => {},
    id: "",
    value: "",
    button: false
  }

  render() {
    if (this.props.button) {
      return (<li><label>{this.props.value}</label><button id={this.props.id} onClick={this.props.onClickHandler}>Delete</button></li>);
    }

    return (<li><label>{this.props.value}</label><input type="checkbox" id={this.props.id} onClick={this.props.onClickHandler} /></li>);
  }
}

export default TodoItem;
