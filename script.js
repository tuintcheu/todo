let boutton = document.getElementById("add");


boutton.addEventListener("click", () => {
    
    const val = document.getElementById("todo").value.trim();
    
    if (val === "") {
        alert("Veuillez remplir le champ svp !!");
    } else {
        
        const li = document.createElement("li");
        li.textContent = val;

    
        const deletebou = document.createElement("button");
        deletebou.textContent = "delete";
        deletebou.style.marginLeft = "end";

        
        deletebou.addEventListener("click", () => {
            li.remove();
        });

        
        li.appendChild(deletebou);

        // Ajoute l'élément de liste à la liste ordonnée
        document.getElementById("list").appendChild(li);

        
        document.getElementById("todo").value = "";
    }
});