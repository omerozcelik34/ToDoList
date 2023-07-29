const txt = document.querySelector("#text-box");
const list = document.querySelector(".list");

function addTask() {
  if (txt.value === "") {
    alert("please fill the blanks");
  } else {
    let li = document.createElement("li");
    li.innerHTML = txt.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  txt.value = "";
  saveData()
}

list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData()
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData()
    }
  },
  false
);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showTask(){
    list.innerHTML = localStorage.getItem("data");
}

showTask()
