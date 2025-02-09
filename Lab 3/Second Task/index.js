const input = document.querySelector(".task-input");
const btn = document.querySelector(".add-btn");
const tasksList = document.querySelector(".tasks-list");

let currId = 0;
let tasks = [];

btn.addEventListener("click", () => {
  const trimmedText = input.value.trim();

  if (trimmedText == "") return;

  tasks.push({ id: currId++, text: input.value, done: false });

  render();
});

render();

function setDoneState(id, state) {
  tasks.forEach((task) => {
    if (task.id == id) {
      task.done = state;
    }
  });

  render();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id != id);

  render();
}

function render() {
  tasksList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    const doneCheckbox = document.createElement("input");
    doneCheckbox.setAttribute("type", "checkbox");
    doneCheckbox.checked = task.done ? "checked" : null;

    doneCheckbox.addEventListener("click", (e) => {
      setDoneState(task.id, e.target.checked);
    });

    const taskText = document.createElement("span");
    taskText.className = task.done ? "done" : null;
    taskText.innerHTML = task.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "X";

    deleteBtn.addEventListener("click", () => deleteTask(task.id));

    const wrapper = document.createElement("div");
    wrapper.className = "task-item__left";

    wrapper.append(doneCheckbox);
    wrapper.append(taskText);

    li.append(wrapper);
    li.append(deleteBtn);
    tasksList.append(li);
  });
}
