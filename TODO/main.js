addToDoButton = document.getElementById('addToDo');
toDoContainer = document.getElementById('toDoContainer');
inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('click', function(){
        toDoContainer.removeChild(paragraph);
    })
})