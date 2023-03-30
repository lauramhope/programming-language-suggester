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
  const radioFlavor = document.querySelector("input[name='flavor']:checked");
  const radioPet = document.querySelector("input[name='pet']:checked");
  const radioColor = document.querySelector("input[name='color']:checked");
  const firstName = document.getElementById("firstName").value;

  hideResults();
  document.querySelector("span#nameDisplay").innerText = firstName; 

  if (radioBev === "tea" && radioVacation === "beach") {
    document.getElementById("ruby").removeAttribute("class");
  } else if (radioBev === "coffee" && radioVacation === "mountains") {
    document.getElementById("javascript").removeAttribute("class");
  } else if (radioBev === "water" && radioVacation === "desert") { 
    document.getElementById("csharp").removeAttribute("class");
  } else if (radioBev === "coffee" && radioVacation === "desert") {
    document.getElementById("python").removeAttribute("class");
  } else if (!radioBev || !radioVacation || !radioFlavor || !radioColor || !radioPet) {
    document.getElementById("error").removeAttribute("class");
  } else {
    document.getElementById("rust").removeAttribute("class");
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
    document.querySelector("span#nameDisplay").innerText = null;
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