addToDoButton = document.getElementById('addToDo');
toDoContainer = document.getElementById('toDoContainer');
inputField = document.getElementById('inputField');
added_button = document.getElementById("added");
done_button = document.getElementById('done_button')
clear_button = document.getElementById('clear_button')
body = document.getElementById("body");
list_of_paragraphs = []
done = []

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    var todo_paragraph = paragraph.textContent
    list_of_paragraphs.push(todo_paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('click', function(){
        toDoContainer.removeChild(paragraph);
        var done_paragraph = paragraph.textContent
        done.push(done_paragraph)
    })
})
added_button.addEventListener('click', function(){
    console.clear()
    // console.log("Added: "+list_of_paragraphs)
    var paragraph = document.createElement('p');
    paragraph.innerText = list_of_paragraphs
    local_added_paragraph = localStorage.setItem("added_item",paragraph.innerText);
    console.log("Added in local storage: "+localStorage.getItem("added_item"))
})
done_button.addEventListener('click', function(){
    localStorage.removeItem("added_item")
})
clear_button.addEventListener('click', function(){
    localStorage.clear()
})
