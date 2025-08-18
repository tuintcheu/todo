

let boutton = document.getElementById("add");
let list = document.getElementById("list");



boutton.addEventListener("click", () => {
    const val = document.getElementById("todo").value.trim();
    if (val === "") {
        alert("Veuillez remplir le champ svp !!");
    } else {
  
        const li = document.createElement("li");

        
        const span = document.createElement("span");
        span.className = "task-text";
        span.textContent = val;

       
        span.addEventListener("click", () => {
            span.style.textDecoration = "line-through";
        });

        
        const deletebou = document.createElement("button");
        deletebou.textContent = "delete";
        deletebou.style.marginLeft = "10px";

        
        deletebou.addEventListener("click", () => {
            li.remove();
        });

        
        li.appendChild(span);
        li.appendChild(deletebou);
        list.appendChild(li);

       
        document.getElementById("todo").value = "";
    }
});