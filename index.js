// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];

// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// function newTask(title) {
//   taskTitles.push(title);
//   taskComplete.push(false);
// }

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// // DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed

//USING OBJECTS

// function newTask(title, description) {
//   const task = {
//     title: title,
//     description: description,
//     complete: false
//   };
//   return task;
// }

// const task1 = newTask("Clean Cat Litter", "Empty the litter box.");
// const task2 = newTask("Do laundry", "well yea");
// const tasks = [task1, task2];

// console.log(tasks);


//REFACTOR FUNCTIONS

// function newTask(title, description) {
//   const task = {
//     title: title,
//     description: description,
//     complete: false
//   };
//   return task;
// }



// function logTaskState(task){
//   console.log(`${task.title} has ${task.complete ? " " : "not"} been completed`);
// }

// function completeTask(task) {
//   task.complete = true;
// }

// const task1 = newTask('clean cat litter', 'empty the litter box');
// const task2 = newTask('do laundry', 'yea');
// const tasks = [task1, task2];

// logTaskState(task1);
// completeTask(task1);
// logTaskState(task1);

// console.log(tasks);

//USING METHODS


function newTask(title, description){
  const task = {
    title: title,
    description: description,
    complete:false,

    logstate: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "} been completed`);
    },

    markCompleted: function(){
      this.complete = true;
    }
  };
  return task;
}


const task1 = newTask('clean cat litter', 'empty the litter box');
const task2 = newTask('do laundry', 'yea');
const tasks = [task1, task2];

task1.logstate();
task1.markCompleted();
task1.logstate();
