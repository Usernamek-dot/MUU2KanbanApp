const dateFormat = (time, format = "MMM Do YY") => moment(time).format(format);

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".datepicker");
  var instances = M.Datepicker.init(elems);
});
