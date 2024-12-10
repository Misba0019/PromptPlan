let newTodo = [];
// We store the list items in an array, as an array is a collection of data.

function updateList() {
    // Function to update the displayed list of todo items.
    const ul = document.getElementById('todo-list');
    // Getting the unordered list element where todo items will be displayed.
    ul.innerHTML = '';
    // Clearing any existing items in the list.
    newTodo.forEach((item, index) => {
        // Iterating over each item in the todo array.
        const li = document.createElement('li');
        // Creating a new list item element.
        li.textContent = `${index + 1}: ${item}`;
        // Setting the text content of the list item to include the index and the item.
        li.addEventListener('click', () => deleteItem(index));
        // Adding a click event listener to each list item to enable deletion.
        ul.appendChild(li);
        // Appending the list item to the unordered list.
    });
}

function deleteItem(index) {
    // Function to delete a specific todo item by index.
    const removeItem = newTodo.splice(index, 1);
    // Removing the item from the array.
    updateList();
    // Updating the displayed list after deletion.
    console.log(`${removeItem[0]} has been removed from the list.`);
    // Logging a confirmation message to the console.
}

while (true) {
    let input = prompt("What would you like to do? (new, list, delete, or quit)");
    // Prompting the user to enter a command.

    if (input === "new") {
        // Adding a New To-Do Item
        let todoItem = prompt("Please enter a new todo:");
        if (todoItem) {
            newTodo.push(todoItem);
            updateList();
            console.log(`${todoItem} has been added to the list.`);
        }

    } else if (input === "list") {
        // Listing All To-Do Items
        console.log("***************");
        for (let i = 0; i < newTodo.length; i++) {
            console.log(`${i + 1}: ${newTodo[i]}`);
        }
        console.log("****************");
        updateList(); // Update the webpage list

    } else if (input === "delete") {
        // Deleting a Specific To-Do Item
        let index = parseInt(prompt("Please enter the number of the todo to delete:")) - 1;
        if (index >= 0 && index < newTodo.length) {
            let removeItem = newTodo.splice(index, 1);
            updateList();
            console.log(`${removeItem[0]} has been removed from the list.`);
        } else {
            console.log("Invalid Index");
        }

    } else if (input === "quit") {
        // Quitting the Application
        console.log("You Quit");
        break;

    } else {
        // Handling Invalid Input
        console.log("Invalid input. Please enter 'new', 'list', 'delete', or 'quit'.");
    }
}

// Explanation:
// - Starts an infinite loop that will keep running until the user decides to quit.
// - Prompts the user to enter a command (new, list, delete, or quit).

// - "new": Prompts to enter a new to-do item. Adds the item to the newTodo array, updates the displayed list, and logs a confirmation message if valid.
// - "list": Updates and logs all items in the newTodo array. Uses a for loop to display each item with its index in the console and on the webpage.
// - "delete": Prompts to enter the number of the to-do item to delete. Converts input to an index (subtracting 1). Checks if the index is valid, removes the item using splice(), updates the displayed list, and logs a confirmation message. Logs an error message if the index is invalid.
// - "quit": Logs a quit message and breaks out of the loop, ending the application.
// - Invalid commands: Logs an error message indicating invalid input.


