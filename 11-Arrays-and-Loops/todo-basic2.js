/*
const todoList = [
    'make dinner',
    'take shower',
    'pack bag'
]

for (let i=0; i <= todoList.length; i++) {
    const value = todoList[i]
    console.log(value)
}
*/


/*
const numbers = [1, 1, 3]


let sum = 0
for (let i=0; i<numbers.length; i++) {
    const nums = numbers[i]
    sum = sum + nums;
}
console.log(sum)
/*
This is a prime example of the accumulator pattern. So we create a variable to store the result.
And then loop through the array and update. We are looping through the array and then adding values
to the sum which was initially set at 0.
*/


//Numbers Doubled in Array Example//
/*
const numbers_doubled = []
for (let i=0; i<numbers.length; i++) {
    let nums_doubled = numbers[i]
    numbers_doubled.push(nums_doubled* 2)
}
console.log(numbers_doubled)
*/

const todolist = ["make dinner", "wash dishes"];
renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todolist.length; i++) {
    const todo = todolist[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector(".js-todo-list")
  .innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input'); //this is basically adding the input value to our js
    const name = inputElement.value; //we are storing the input element value into this variable
    
    todolist.push(name); //to actually add the values to our array, we use push
    console.log(todolist); //we simply print the array to our console now

    inputElement.value = ''; //when we now click add, the box text gets reset. 
    renderTodoList();
}