/*Craig Bergmeyer
Script.js
INFO 2134
Thoendel
April 3, 2020*/




window.addEventListener('load', ()=> {
    const todoList = [];
    const actionDisplayList = document.getElementById("actionDisplayList");
    const actionAddListItem = document.getElementById("actionAddListItem");
    const actionPrintList = document.getElementById("actionPrintList");
    const listHolder = document.getElementById("listHolder");
    
    actionDisplayList.addEventListener('click', ()=>{
        todoList.push("Wash car");
        todoList.push("Wash dog");
        todoList.push("Get groceries");
        todoList.push("Do INFO 2134 homework");
        rebuildList(todoList);

    });
    actionAddListItem.addEventListener('click', ()=> {
        let newItem = prompt("Please enter a new list item");
        todoList.push(newItem);
        rebuildList(todoList);
    });
    actionPrintList.addEventListener('click', ()=>{
        'use strict';
        //try to call the print function, if it throws an error write to the console
        try {
            printToDoList();
        } catch(error) {
        return console.log ('printToDoList() has not been implemented');
        }
    });

    function rebuildList(listItems) {
        listHolder.innerHTML = '';
        //Added -1 to list length to line up with 0 starting number
        for(let i = 0; i <= listItems.length - 1; i++) {
            let listItem = document.createElement('li');
            listItem.innerHTML = listItems[i];
            listHolder.appendChild(listItem);
        }
    }

});

