import { ask } from "../utils/input.js";

function findTask(tasks, taskName) {
  return tasks.indexOf(taskName);
}

async function main() {
  const tasks = ["Do the cooking", "Clean the room", "Do the Laundry"];
  const completedTasks = [];

  console.log("\n*********Welcome to your TODO LIST*********");

  let running = true;
  while (running) {
    console.log(
      "\n-Menu-\n1. View tasks\n2. Add a task\n3. Remove a task\n4. Find a task\n5. Complete a task\n6. Exit\n",
    );
    const menuInput = Number(
      await ask("Enter the Menu Choice in number(1,2,3,4,5,6): "),
    );

    if (menuInput >= 1 && menuInput <= 6) {
      if (menuInput === 1) {
        console.log("\n--- Your Tasks ---\n");
        if (tasks.length === 0) {
          console.log("No tasks yet");
        } else {
          tasks.forEach((task, index) => {
            console.log(`${index + 1}: ${task}`);
          });
        }

        console.log("\n--- Completed Tasks ---\n");
        if (completedTasks.length === 0) {
          console.log("No completed tasks yet");
        } else {
          completedTasks.forEach((task, index) => {
            console.log(`${index + 1}: ${task}`);
          });
        }
      } else if (menuInput === 2) {
        const newTask = await ask("Enter the new task: ");
        if (newTask === "") {
          console.log("Task name can't be empty");
        } else {
          tasks.push(newTask);
          console.log(`Added: ${newTask}`);
        }
      } else if (menuInput === 3) {
        const trashTask = Number(
          await ask("Enter the task number to remove: "),
        );
        if (
          Number.isInteger(trashTask) &&
          trashTask >= 1 &&
          trashTask <= tasks.length
        ) {
          console.log(`Removed: ${tasks[trashTask - 1]}`);
          tasks.splice(trashTask - 1, 1);
        } else {
          console.log("Invalid task number");
        }
      } else if (menuInput === 4) {
        const taskToFind = await ask("Enter the task you are looking for: ");
        const taskFoundAt = findTask(tasks, taskToFind);
        if (taskFoundAt !== -1) {
          console.log(`This task is found at ${taskFoundAt + 1}`);
        } else {
          console.log("The task was not found");
        }
      } else if (menuInput === 5) {
        const taskNumber = Number(
          await ask("Enter the task number to mark completed: "),
        );
        if (
          Number.isInteger(taskNumber) &&
          taskNumber >= 1 &&
          taskNumber <= tasks.length
        ) {
          console.log(`Moved: ${tasks[taskNumber - 1]} to Completed`);
          completedTasks.push(tasks[taskNumber - 1]);
          tasks.splice(taskNumber - 1, 1);
        } else {
          console.log("Invalid task number");
        }
      } else if (menuInput === 6) {
        console.log("Exiting from the App");
        running = false;
      }
    } else {
      console.log("Invalid option");
    }
  }
}

main();