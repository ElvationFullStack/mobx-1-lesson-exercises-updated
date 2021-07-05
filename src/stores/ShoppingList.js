/* eslint-disable */
import { observable, action, makeObservable } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    constructor() {
        this.list = [];
        this.length=0;
      
        makeObservable(this, {
          list: observable,
          length: observable,
          checkItem:action,
          addItem:action,
          editItem:action,
          deleteItem:action
        })
    }
    checkItem = (name) => {
        let item =this.list.find(i=>i.name===name)
        item.completed=!item.completed
        // your code here
    }
    addItem = (name) => {
        const newItem=new Item(name)
        this.list.push(newItem)
        // your code here
    }
    editItem = (name,editName) => {
        let item =this.list.find(i=>i.name===name)
        item.name=editName
        // your code here
    }
    deleteItem = (name) => {
        this.list=this.list.filter(a=>a.name!=name)
        console.log(" new list ",this.list)
        // your code here
    }

  
}

