// Array to store to-do items
let newTodo = [];


// Render the to -do list items on the page.
// Called after every update(add / delete).
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

// Remove a task from the list based on index.
function deleteItem(index) {
    const removeItem = newTodo.splice(index, 1);
    updateList();
    alert(`${removeItem[0]} has been removed from the list.`);
}

// Show the full to-do list in an alert box.
function showList() {
    if (newTodo.length === 0) {
        alert('Your to-do list is empty.');
    } else {
        alert('Your To-Do List:\n' + newTodo.map((item, index) => `${index + 1}: ${item}`).join('\n'));
    }
}

// Main interaction loop using prompt()
while (true) {
    let input = prompt("What would you like to do?\n- Type 'new' to add a task\n- Type 'list' to view tasks\n- Type 'delete' to remove a task\n- Type 'quit' to exit");

    if (input === "new") { // Add a New To-Do Item
        let todoItem = prompt("Please enter a new todo:");
        if (todoItem) {
            newTodo.push(todoItem);
            updateList();
            alert(`${todoItem} has been added to the list.`);
        } else {
            alert("Task cannot be empty. Please enter a valid task.");
        }
        
    } else if (input === "list") { // Display the to-do list.
        showList();

    } else if (input === "delete") { // Delete a Specific To-Do Item
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

    // Quit Prompt
    } else if (input === "quit") {
        alert("Goodbye! Here's your final to-do list:\n" + newTodo.map((item, index) => `${index + 1}: ${item}`).join('\n'));
        break;

    // Handling Invalid Input
    } else {
        alert("Invalid input. Please enter 'new', 'list', 'delete', or 'quit'.");
    }
}