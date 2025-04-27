let newTodo = [];
// We store the list items in an array, as an array is a collection of data.

function updateList() {
    const ul = document.getElementById('todo-list');
    ul.innerHTML = ''; // Clear the list

    newTodo.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}: ${item}`;
        li.addEventListener('click', () => deleteItem(index));
        ul.appendChild(li);
    });
}

// Function to delete a specific todo item by index.
function deleteItem(index) {
    const removeItem = newTodo.splice(index, 1);
    updateList();
    alert(`${removeItem[0]} has been removed from the list.`);
}

// Function to display the list in a cleaner format.
function showList() {
    if (newTodo.length === 0) {
        alert('Your to-do list is empty.');
    } else {
        alert('Your To-Do List:\n' + newTodo.map((item, index) => `${index + 1}: ${item}`).join('\n'));
    }
}

while (true) {
    let input = prompt("What would you like to do?\n- Type 'new' to add a task\n- Type 'list' to view tasks\n- Type 'delete' to remove a task\n- Type 'quit' to exit");
    // Prompting the user to enter a command.

    // Adding a New To-Do Item
    if (input === "new") {
        let todoItem = prompt("Please enter a new todo:");
        if (todoItem) {
            newTodo.push(todoItem);
            updateList();
            alert(`${todoItem} has been added to the list.`);
        } else {
            alert("Task cannot be empty. Please enter a valid task.");
        }

    // Displaying the to-do list.
    } else if (input === "list") {
        showList();
        // Using a for loop to display the list items with their index in the console and on the webpage.

    // Deleting a Specific To-Do Item
    } else if (input === "delete") {
        if (newTodo.length === 0) {
            alert("Your to-do list is empty. Nothing to delete.");
        } else {
        let index = parseInt(prompt("Please enter the number of the todo to delete:")) - 1;
        if (index >= 0 && index < newTodo.length) {
            let removeItem = newTodo.splice(index, 1);
            updateList();
            console.log(`${removeItem[0]} has been removed from the list.`);
        } else {
            alert("Invalid task number.");
        }
    }

    // Quitting the Application
    } else if (input === "quit") {
        alert("Goodbye! Here's your final to-do list:\n" + newTodo.map((item, index) => `${index + 1}: ${item}`).join('\n'));
        break;

    // Handling Invalid Input
    } else {
        alert("Invalid input. Please enter 'new', 'list', 'delete', or 'quit'.");
    }
}