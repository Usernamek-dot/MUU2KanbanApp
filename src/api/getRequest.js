const API_URL =
  "https://api.sheety.co/103de493a1c840af7c640b7baaa08f1f/infoData/toDo";

// map get request
const getTasks = (data) => {
  console.log("data is", data);
  data.map((task) => createTask(task));
};

//get data from API
axios
  .get(`${API_URL}`)

  .then((res) => getTasks(res.data.toDo))
  .catch((err) => console.error("error at getting data:", err));

const createTask = (task) => {
  // Creating card content
  let newTaskInCard = document.createElement("article");
  newTaskInCard.classList.add("card-panel");
  newTaskInCard.classList.add("text-color");
  newTaskInCard.classList.add("blue-grey");
  newTaskInCard.classList.add("darken-2");

  //title
  let titleTask = document.createElement("p");
  titleTask.classList.add("card-title");
  titleTask.innerHTML = `<i class="material-icons">assignment</i><h4>Task</h4> `;

  //date
  let dateTask = document.createElement("p");
  dateTask.innerHTML = `<h6>  ${dateFormat(task.date)}</h6>`;

  //asignee
  let asigneeTask = document.createElement("p");
  asigneeTask.innerHTML = `<h6>Asigned to ${task.asignee} </h6> `;

  let descriptionTask = document.createElement("p");
  descriptionTask.innerHTML = `<h6>Task :  ${task.task} </h6> `;

  //buttons
  let buttonEdit = document.createElement("button");
  buttonEdit.classList.add("btn-floating");
  buttonEdit.classList.add("waves-effect");
  buttonEdit.classList.add("btn-small");
  buttonEdit.classList.add("blue-grey");
  buttonEdit.classList.add("darken-3");
  buttonEdit.innerHTML = "<i class='material-icons'>edit</i>";

  let buttonDelete = document.createElement("button");
  buttonDelete.classList.add("btn-floating");
  buttonDelete.classList.add("waves-effect");
  buttonDelete.classList.add("btn-small");
  buttonDelete.classList.add("blue-grey");
  buttonDelete.classList.add("darken-3");
  buttonDelete.innerHTML = "<i class='material-icons'>delete</i>";

  //Appending to card
  newTaskInCard.appendChild(titleTask);
  newTaskInCard.appendChild(dateTask);
  newTaskInCard.appendChild(asigneeTask);
  newTaskInCard.appendChild(descriptionTask);
  newTaskInCard.appendChild(buttonEdit);
  newTaskInCard.appendChild(buttonDelete);

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
