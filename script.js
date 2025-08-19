

let boutton = document.getElementById("add");
let list = document.getElementById("list");




// --- LocalStorage: Sauvegarde et restauration des tâches ---
function saveTasksToLocalStorage() {
    // Sauvegarde toutes les tâches actuelles dans le localStorage
    const tasks = [];
    document.querySelectorAll('#list .task-text').forEach(span => {
        tasks.push(span.textContent);
    });
    localStorage.setItem('todo-tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
    // Restaure les tâches depuis le localStorage au chargement de la page
    const tasks = JSON.parse(localStorage.getItem('todo-tasks') || '[]');
    tasks.forEach(val => {
        addTask(val);
    });
}
// --- Fin LocalStorage ---

function addTask(val) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = val;
    span.addEventListener("click", () => {
        
        let status = span.style.textDecoration 
        if(status=="line-through")
        {
            span.style.textDecoration="none"
        }else{
            span.style.textDecoration="line-through"
        }
    });
    const deletebou = document.createElement("button");
    deletebou.textContent = "delete";
    deletebou.style.marginLeft = "10px";
    deletebou.addEventListener("click", () => {
        li.remove();
        saveTasksToLocalStorage(); // Met à jour le localStorage après suppression
    });
    li.appendChild(span);
    li.appendChild(deletebou);
    list.appendChild(li);
}

 const val = document.getElementById("todo").value.trim();
 const input = document.getElementById("todo")
 


boutton.addEventListener("click", () => {
   
    if (val === "") {
        alert("Veuillez remplir le champ svp !!");
    } else {
        addTask(val);
        saveTasksToLocalStorage(); // Met à jour le localStorage après ajout
        document.getElementById("todo").value = "";
    }
   
});



// Restaure les tâches au chargement de la page
window.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage);