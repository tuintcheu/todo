let boutton = document.getElementById("add");

// Ajoute un écouteur d'événement au clic sur le bouton
boutton.addEventListener("click", () => {
    // Récupère la valeur du champ texte et retire les espaces inutiles
    const val = document.getElementById("todo").value.trim();
    // Vérifie si le champ est vide
    if (val === "") {
        alert("Veuillez remplir le champ svp !!");
    } else {
        // Crée un nouvel élément de liste
        const li = document.createElement("li");
        li.textContent = val;

        // Crée le bouton de suppression
        const deletebou = document.createElement("button");
        deletebou.textContent = "delete";
        deletebou.style.marginLeft = "10px";

        // Ajoute l'événement de suppression au bouton
        deletebou.addEventListener("click", () => {
            li.remove();
        });

        // Ajoute le bouton de suppression à l'élément de liste
        li.appendChild(deletebou);

        // Ajoute l'élément de liste à la liste ordonnée
        document.getElementById("list").appendChild(li);

        // Réinitialise le champ texte
        document.getElementById("todo").value = "";
    }
});