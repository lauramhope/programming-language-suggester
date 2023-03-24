let form = document.querySelector("form");

function hideResults () {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("javascript").setAttribute("class", "hidden");
  document.getElementById("csharp").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("rust").setAttribute("class", "hidden");
  document.getElementById("error").setAttribute("class", "hidden"); 
}

function handleRadio(event) {
  event.preventDefault();
  const radioBev = document.querySelector("input[name='bev']:checked");
  const radioVacation = document.querySelector("input[name='vacation']:checked");
  const radioFlavor = document.querySelector("input[name='flavor']:checked");
  const radioPet = document.querySelector("input[name='pet']:checked");
  const radioColor = document.querySelector("input[name='color']:checked");
  const firstName = document.getElementById("firstName").value;
  const error = document.getElementById("error").value;

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
  } else if (!radioBev || !radioVacation || !radioFlavor || !radioColor || !radioPet) {
    result = document.getElementById("error").removeAttribute("class");
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
    document.getElementById("error").setAttribute("class", "hidden");
    document.getElementById("firstName").value = null; 
    document.querySelector("span#firstName").innerText = null;
    document.querySelector("input[name='bev']:checked").checked = false;
    document.querySelector("input[name='vacation']:checked").checked = false;
    document.querySelector("input[name='flavor']:checked").checked = false;
    document.querySelector("input[name='pet']:checked").checked = false;
    document.querySelector("input[name='color']:checked").checked = false;
  });

} 

window.addEventListener("load", function() {
  const form = document.getElementById("survey");
  form.addEventListener("submit", handleRadio);
  
});