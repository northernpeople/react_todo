class Todo{
  constructor(description){
    this.id = Math.random()+"_";
    this.description = description;
    this.done = false;
  }
}

export {Todo};
