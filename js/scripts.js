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
  } else {
    document.getElementById("rust").removeAttribute("class");
  }
  
} 

window.addEventListener("load", function() {
  const form = document.getElementById("survey");
  form.addEventListener("submit", handleRadio);
});