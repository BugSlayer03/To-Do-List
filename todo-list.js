const todoList = [];

renderTodoList();

function renderTodoList() {
    let todolistHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const todoName = todoObject.name;
        const todoDate = todoObject.date;
        // const html = `
        // // <p>
        // //     ${todoName} ${todoDate} 
        // //     <button onclick="
        // //         todoList.splice(${i},1);
        // //         renderTodoList();
        // //     ">Delete</button>
        // // </p>`
        //     ;

        const html = `
            <div>${todoName}</div>
            <div>${todoDate}</div>
            <button onclick="
                todoList.splice(${i},1);
                renderTodoList();
            ">Delete</button>
        `;
        todolistHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}

function add_todo() {
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;

    const dateElement = document.querySelector('.js-duedate');
    const date = dateElement.value;
    todoList.push({
        name: name,
        date: date
    });
    console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}