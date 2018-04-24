import {Todo} from "./Todo";

class TodoRepo{
  constructor(){
    this.store = [];
    this.store.push(new Todo("buy milk"));
    this.store.push(new Todo("sell cow"));
  }

  save(todo){
    this.store.push(todo);
  }

  getAll(){
    return this.store.map( e => e);
  }

  delete(toDelete){
    this.store = this.store.filter( td => td.id !== toDelete.id);
  }

  findById(id){
    return this.store.filter(td => td.id === id)[0];
  }
}

export {TodoRepo};
