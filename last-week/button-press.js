var btn = document.querySelector(".press");

document.body.style.backgroundColor = "yellow";
checking();

function checking(event) {
  btn.addEventListener("change", function (event) {
    if (event.target.checked) {
      document.body.style.backgroundColor = "green";
    } else {
      document.body.style.backgroundColor = "red";
    }
  });
}
