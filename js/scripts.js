function hideResults () {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("javascript").setAttribute("class", "hidden");
  document.getElementById("csharp").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("rust").setAttribute("class", "hidden");
}



document.querySelector("span#firstName").innerText = firstName; 

function handleRadio(event) {
  event.preventDefault();
  const radioBev = document.querySelector("input[name='bev']").value;
  const radioVacation = document.querySelector("input[name='vacation']").value;
  const radioFlavor = document.querySelector("input[name='flavor']").value;
  const radioPet = document.querySelector("input[name='pet']").value;
  const radioColor = document.querySelector("input[name='color']").value;
  const firstName = document.getElementById("firstName").value;

  let result;
  if (radioBev === "tea" && radioVacation === "beach" && radioFlavor === "vanilla") {
    document.getElementById("ruby").removeAttribute("class");
  } else if (radioBev === "coffee" && radioVacation === "mountain" && radioFlavor === "chocolate") {
    document.getElementById("javascript").removeAttribute("class");
  } else if (radioBev === "water" && radioVacation === "desert" && radioFlavor === "strawberry") { 
    document.getElementById("csharp").removeAttribute("class");
  } else if (radioBev === "coffee" && radioVacation === "desert" && radioFlavor === "strawberry") {
    document.getElementById("python").removeAttribute("class");
  } else {
    document.getElementById("rust").removeAttribute("class");
  }

  document.querySelector("span#firstName").innerText = firstName; 

  hideResults();

} 

window.addEventListener("load", function() {
  const form = document.getElementById("survey");
  form.addEventListener("submit", handleRadio);
});