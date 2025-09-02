
let buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
  button.onmouseenter = function () {
    this.style.backgroundColor = "#007bffb6";
    this.style.color = "white";
    this.style.fontSize = "20px";
  };
  button.onmouseleave = function () {
    if (!this.classList.contains("active")) { 
      this.style.backgroundColor = "white";
      this.style.color = "black";
      this.style.fontSize = "15px";
    }
  };
});


function calci() {
  let get = document.querySelector("#income-input");
  let final = 0.01 * Number(get.value); 

  let label = document.querySelector("#donation-amount-display");
  label.innerText = `₹${final.toFixed(2)}`;
  label.style.display = "inline-block";
}


document.querySelector("#percentage-btn").addEventListener("click", function () {
  setActiveButton(this, ".amount-option");
  calci();
  document.querySelector("#custom-input").style.display = "none";
});

document.querySelector("#custom-btn").addEventListener("click", function () {
  setActiveButton(this, ".amount-option");
  document.querySelector("#custom-input").style.display = "block";
  document.querySelector("#donation-amount-display").style.display = "none";
});

document.querySelector("#custom-input").addEventListener("input", function () {
  let label = document.querySelector("#donation-amount-display");
  label.innerText = `₹${Number(this.value).toFixed(2)}`;
  label.style.display = "inline-block";
});


function setActiveButton(clicked, groupSelector) {
  document.querySelectorAll(groupSelector).forEach(btn => {
    btn.classList.remove("active");
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
    btn.style.fontSize = "15px";
  });

  clicked.classList.add("active");
  clicked.style.backgroundColor = "#17d34fff";
  clicked.style.color = "black";
  clicked.style.fontSize = "20px";
}

document.querySelectorAll(".selection-grid, .frequency-options").forEach(container => {
  container.querySelectorAll(".selectable-item").forEach(item => {
    item.addEventListener("click", function () {
      setActiveButton(this, ".selectable-item");
    });
  });
});
