const input = document.getElementById("favchap");

const button = document.getElementById("button");

const list = document.getElementById("list");

function buttonFunction() {
    if (input.value.trim() !== '') {

        // Valor de input
        const chapter = input.value;
        
        // Crear un nuevo elemento de lista (li)
        const listItem = document.createElement('li');
        
        // Crear botón Delete
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        
        // input = li
        listItem.textContent = chapter;
        
        // Agregar Delete al li
        listItem.appendChild(deleteButton);
        
        // Agregar el elemento li a la lista
        list.appendChild(listItem);
        
        // Agregar event listener a Delete para borrar al hacer clic
        deleteButton.addEventListener('click', () => {
            list.removeChild(listItem);
        });
        
        // Enfocar input
        input.focus();
        
        // Clean input
        input.value = '';
    }
}

button.addEventListener("click", buttonFunction);
