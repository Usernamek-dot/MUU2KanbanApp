const sor = new Sortable.default(
  //calling task container
  document.querySelectorAll(".list-container"),
  //calling cards
  { draggable: "div", animation: 150 }
);
