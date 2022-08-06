const API_URL =
  "https://api.sheety.co/27b5b55a3388c846e87b53ccdb8b1ed0/toDoList/toDo";

// map get request
const getTasks = (data) => {
  data.map((task) => createTask(task));
  console.log("data", data);
};

//get data from API
axios
  .get(`${API_URL}`)
  .then((res) => getTasks(res.data.data), console.log(res))
  .catch((err) => console.error(err));

// axios.get(`${API_URL}`).then((res) => getTasks(res.data.data));

const createTask = (task) => {
  // Creating card content
  let newTaskInCard = document.getElementByClassName("card-drag");

  //date
  let dateTask = document.createElement("p");
  dateTask.innerHTML = `<h6>Dated for:</h6> ${dateFormat(task.date)}`;

  //asignee
  let asigneeTask = document.createElement("p");
  asigneeTask.innerHTML = `<h5">Asigned to </h5> ${task.asignee}`;

  let descriptionTask = document.createElement("p");
  descriptionTask.innerHTML = `<h6>Task:</h6> ${task.task} `;

  newTaskInCard.appendChild(dateTask);
  newTaskInCard.appendChild(asigneeTask);
  newTaskInCard.appendChild(descriptionTask);

  // calling board lists by id
  let listToDo = document.querySelector("#listToDoID");
  let listDoing = document.querySelector("#listDoingID");
  let listDone = document.querySelector("#listDoneID");

  // validation according to the state
  if (task.state === "to-do") {
    listToDo.appendChild(newTaskInCard);
  }
  if (task.state === "doing") {
    listDoing.appendChild(newTaskInCard);
  }
  if (task.state === "done") {
    listDone.appendChild(newTaskInCard);
  }
};
