const todolist = []

function addTodo() {
    const inputElement = document.querySelector('.js-name-input'); //this is basically adding the input value to our js
    const name = inputElement.value; //we are storing the input element value into this variable
    
    todolist.push(name); //to actually add the values to our array, we use push
    console.log(todolist); //we simply print the array to our console now

    inputElement.value = ''; //when we now click add, the box text gets reset. 
}