// Creates a new task
const newTask = (title, description) => {
  const task = {
    title: title,
    description: description,
    complete: false,

    // Print the state of a task to the console in a nice readable way
    logState: function() {
      console.log(
        `${this.title} has${this.complete ? " " : " not "} been completed`
      );
    },

    // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
    markCompleted: function() {
      this.complete = true;
    },
  };
  return task;
};

// DRIVER CODE BELOW

let task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
); // task 0
let task2 = newTask("Do Laundry", "😨"); // task 1

const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks);
