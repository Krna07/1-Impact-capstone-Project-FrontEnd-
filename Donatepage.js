let buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
  button.onmouseenter = function () {
    this.style.backgroundColor = "#007bffb6";
    this.style.color = "white";
    this.style.fontSize = "20px";
  };
});

buttons.forEach(button => {
  button.onmouseleave = function () {
    this.style.backgroundColor = "white";
    this.style.color = "black";
    this.style.fontSize = "15px";
  };
});


function calci() {
  let get = document.querySelector("input");
  let final = 0.01 * Number(get.value);
  
  let label = document.querySelector("label");
  label.innerText = final.toFixed(2);
  label.style.display = "inline-block";
}

function donationtype(button) {
  // Reset all "green" buttons to default
  document.querySelectorAll(".green").forEach(btn => {
    btn.style.backgroundColor = "";
    btn.style.color = "";
  });

  // Highlight the clicked button
  button.style.backgroundColor = "#17d34fff";
  button.style.color = "white";
  button.style.fontSize="20px";
}


