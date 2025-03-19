document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create task list item
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";
        
        // Remove task on button click
        removeButton.addEventListener("click", function () {
            taskList.removeChild(taskItem);
        });

        // Append remove button to task item
        taskItem.appendChild(removeButton);
        
        // Append task item to the list
        taskList.appendChild(taskItem);

        // Clear input field
        taskInput.value = "";
    }

    // Event listener for Add Task button
    addButton.addEventListener("click", addTask);

    // Event listener for Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
