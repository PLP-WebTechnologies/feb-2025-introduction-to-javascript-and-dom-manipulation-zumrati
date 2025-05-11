function changeText() {
  document.getElementById("main-heading").textContent = "You clicked the button!";
  document.getElementById("description").textContent = "Text changed using JavaScript.";
}

function changeStyle() {
  document.body.style.backgroundColor = "#cfe3ff";
  document.getElementById("main-heading").style.color = "darkblue";
}

function addElement() {
  const article = document.getElementById("extra-content");
  const newPara = document.createElement("p");
  newPara.textContent = "This is a new paragraph added to the page.";
  newPara.id = "new-paragraph";
  article.appendChild(newPara);
}

function removeElement() {
  const para = document.getElementById("new-paragraph");
  if (para) {
    para.remove();
  }
}