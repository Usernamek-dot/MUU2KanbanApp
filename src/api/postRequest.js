//Access form through id
const form = document.getElementById("formID");

form.addEventListener("submit", (ev) => {
  //avoid reloading the page
  ev.preventDefault();
  const formData = ev.target;

  // get data from form to API
  const data = {
    //sheet
    toDo: {
      date: formData.dateInputID.value,
      asignee: formData.asigneeInputID.value,
      task: formData.taskInputID.value,
      state: "to-do",
    },
  };
  //post data to API
  console.log("this is data", data);
  axios
    .post(`${API_URL}`, data)
    .then((res) => {
      createTask(res.data);
      formData.reset();
    })
    .catch((err) => console.error("this is an erro with post request" + err));
});
