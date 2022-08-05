//Access form through id
const form = document.querySelector("#formID");

form.addEventListener("submit", (ev) => {
  //avoid reloading the page
  ev.preventDefault();
  const formData = ev.target;

  // get data to send to API
  const data = {
    date: formData.dateTask.value,
    // date: Number(moment().add(formData.deadLineTask.value, 'days').format('X')),

    asignee: formData.asigneeTask.value,
    task: formData.taskTask.value,
    state: "to-do",
  };
  //post data to API
  axios
    .post(`${API_URL}/tasks`, data)
    .then((res) => {
      createTask(res.data);
      formData.reset();
    })
    .catch((err) => console.error("this is an erro with post request" + err));
});
