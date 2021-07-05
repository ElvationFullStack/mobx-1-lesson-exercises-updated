import React, { Component } from 'react';
import { observer } from 'mobx-react'

class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
    //your code here
  }
  editItem = () => {
    const edit=prompt("enter name to change")
    console.log(" reseved",edit,"original",this.props.item.name)
    this.props.store.editItem(this.props.item.name,edit)
    //your code here
  }
  deleteItem = () => {
    //your code here
    this.props.store.deleteItem(this.props.item.name)

  }

  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? "crossed" : null}>
        <input type="checkbox"
          onClick= {this.checkItem}
          value={item.name} />
        {item.name}  {item.location}
        <button onClick={this.editItem}> edit Button </button>
        <button onClick={this.deleteItem}> delete Button </button>

      </div>)

  }
}

export default observer(Item)