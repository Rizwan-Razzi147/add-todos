let btnOne = document.getElementById("add_btn")
let modals = document.getElementById("todo_form")
let closer = document.getElementsByClassName("btn")[0]
// console.log(closer, "asssss");
btnOne.addEventListener("click", function() {
        modals.classList.toggle("active")
        closer.addEventListener("click", function() {
        modals.classList.remove("active")
        })
})
todo_submit.addEventListener("click", function() {
  let print = document.createElement("div")
  print.innerHTML= todo_input.value
  print.classList.add("todo")  
  all_status[0].append(print)
  let spans = document.createElement("i")
  spans.innerHTML="&times"
  spans.classList.add("close")
  print.append(spans)
})
















let todos = document.querySelectorAll(".todo");
let clo = document.querySelectorAll(".close")
// console.log(clo, "aaaa");
// clo.forEach(function(e) {
//   e.addEventListener("click", function() {
//     todos.classList.remove()
//     e.target.parentNode.style.display="none"
//   })
  
// })












// const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");
let draggableTodo = null;

todos.forEach((todo) => {
  todo.addEventListener("dragstart", dragStart);
  todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
  draggableTodo = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 500);
  console.log("dragStart");
}

function dragEnd() {
  draggableTodo = null;
  setTimeout(() => {
    this.style.display = "block";
  }, 1000);
  console.log("dragEnd");
}

all_status.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragleave", dragLeave);
  status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();
    console.log("dragOver");
}

function dragEnter() {
  this.style.border = "1px dashed #ccc";
  console.log("dragEnter");
}

function dragLeave() {
  this.style.border = "none";
  console.log("dragLeave");
}

function dragDrop() {
  this.style.border = "none";
  this.appendChild(draggableTodo);
  console.log("dropped");
}










// let statuss = document.querySelectorAll(".status")
// let pizza = document.querySelector(".todo")

// pizza.addEventListener('dragstart', dragStart)
// pizza.addEventListener('dragend', dragEnd)

// for(const pizza of statuss) {
//     pizza.addEventListener('dragover', dragOver)
//     pizza.addEventListener('dragenter', dragEnter)
//     pizza.addEventListener('dragleave', dragLeave)
//     pizza.addEventListener('drop', dragDrop)
// }
// function dragStart() {
//     // this.className += ' hold' 
// }
// function dragEnd() {
//     // this.className = 'pizza'
// }
// function dragOver(e) {
//     e.preventDefault()
// }

// function dragEnter(e) {
//     e.preventDefault()
//     // this.className += ' hovered'
// }

// function dragLeave() {
//     // this.className = 'pizza'
// }

// function dragDrop() {
//     // this.className = 'pizza'
//     this.append(pizza)
// }