//Access form through id
const form = document.getElementById("formID");

form.addEventListener("submit", async (ev) => {
  //avoid reloading the page
  ev.preventDefault();
  const formData = ev.target;

  // get data to send to API
  const data = {
    //sheet
    todo: {
      date: formData.dateInputID.value,
      asignee: formData.asigneeInputID.value,
      task: formData.taskInputID.value,
      state: "to-do",
    },
  };
  console.log("data new task is", data);

  await axios
    .post(`${API_URL}`, data) //passing data to api
    .then((res) => {
      createTask(res.data.todo);
      formData.reset();
    })
    .catch((err) => console.error("This is an error with post request" + err));
});
