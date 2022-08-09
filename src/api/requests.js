const API_URL =
  "https://api.sheety.co/a4fbca92ad5c559214e321be2413b0e8/infoData/todo";

// map get request
const getTasks = (data) => {
  console.log("data is", data);
  data.map((task) => createTask(task));
};

//get data from API
axios
  .get(`${API_URL}`)
  .then((res) => getTasks(res.data.todo))
  .catch((err) => console.error("error at getting data:", err));

const createTask = (task) => {
  //console.log(task.state)
  // Creating card content
  let containerTask = document.getElementById(task.state);
  let newTask = `<article id="task${
    task.id
  }" class="card-panel text-color blue-grey darken-2">
                    <p class="card-title"><i class="material-icons">assignment</i><h4>Task</h4></p>
                    <p><h6>  ${dateFormat(task.date)}</h6></p>
                    <p><h6>Asigned to ${task.asignee} </h6></p>
                    <p><h6>Task :  ${task.task} </h6></p>
                    
                    <button type="button" id="btndelete${task.id}" data-idd="${
    task.id
  }" class="btn-small waves-effect waves-light blue-grey darken-3 btn tooltipped" onclick="M.toast({html: 'Task has been deleted'})" data-position="bottom" data-tooltip="Click me twice" >delete</button>
                 </article>
  `;
  containerTask.innerHTML += newTask;
};

let containerLists = document.getElementById("containerLists");

containerLists.addEventListener("click", (e) => {
  let id = e.path[0].attributes[2].value;
  let idArticle = e.path[1].id;
  deleteTask(id, idArticle);
});

const deleteTask = async (id, idArticle) => {
  try {
    res = await axios.delete(`${API_URL}/${id}`);
    json = await res.data.tasks;
    document.getElementById(idArticle).remove();
  } catch (err) {
    console.log(err.statusText || "Unable to cancel");
  }
};
