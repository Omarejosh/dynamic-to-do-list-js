document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Function to add a new task
    function addTask(taskText = null, save = true) {
        const text = taskText || taskInput.value.trim();
        
        if (text === "") {
            alert("Please enter a task!");
            return;
        }

        // Create task list item
        const taskItem = document.createElement("li");
        taskItem.textContent = text;

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";
        
        // Remove task on button click
        removeButton.addEventListener("click", function () {
            taskList.removeChild(taskItem);
            removeTask(text);
        });

        // Append remove button to task item
        taskItem.appendChild(removeButton);
        
        // Append task item to the list
        taskList.appendChild(taskItem);

        // Save to Local Storage
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
            storedTasks.push(text);
            localStorage.setItem("tasks", JSON.stringify(storedTasks));
        }

        // Clear input field
        taskInput.value = "";
    }

    // Function to remove task from Local Storage
    function removeTask(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    // Event listener for Add Task button
    addButton.addEventListener("click", () => addTask());

    // Event listener for Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Load tasks when DOM is fully loaded
    loadTasks();
});
