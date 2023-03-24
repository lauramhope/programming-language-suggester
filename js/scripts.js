

let form = document.querySelector("form");

function hideResults () {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("javascript").setAttribute("class", "hidden");
  document.getElementById("csharp").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("rust").setAttribute("class", "hidden");
}

function handleRadio(event) {
  event.preventDefault();
  const radioBev = document.querySelector("input[name='bev']:checked").value;
  const radioVacation = document.querySelector("input[name='vacation']:checked").value;
  const radioFlavor = document.querySelector("input[name='flavor']:checked").value;
  const radioPet = document.querySelector("input[name='pet']:checked").value;
  const radioColor = document.querySelector("input[name='color']:checked").value;
  const firstName = document.getElementById("firstName").value;

  hideResults();
  document.querySelector("span#firstName").innerText = firstName; 

  let result;
  if (radioBev === "tea" && radioVacation === "beach") {
    result = document.getElementById("ruby").removeAttribute("class");
  } else if (radioBev === "coffee" && radioVacation === "mountains") {
    result = document.getElementById("javascript").removeAttribute("class");
  } else if (radioBev === "water" && radioVacation === "desert") { 
    result = document.getElementById("csharp").removeAttribute("class");
  } else if (radioBev === "coffee" && radioVacation === "desert") {
    result = document.getElementById("python").removeAttribute("class");
  } else {
    result = document.getElementById("rust").removeAttribute("class");
  }

  let resetBtn = document.getElementById("reset");
  resetBtn.addEventListener("click", function() {
    document.getElementById("ruby").setAttribute("class", "hidden");
    document.getElementById("javascript").setAttribute("class", "hidden");
    document.getElementById("csharp").setAttribute("class", "hidden");
    document.getElementById("python").setAttribute("class", "hidden");
    document.getElementById("rust").setAttribute("class", "hidden");
    document.getElementById("firstName").value = null; 
    document.querySelector("span#firstName").innerText = null;
  });

} 

window.addEventListener("load", function() {
  const form = document.getElementById("survey");
  form.addEventListener("submit", handleRadio);
  
});