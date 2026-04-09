type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// async function getTodos() {
//     try {
//         const response: Response = await fetch('https://jsonplaceholder.typicode.com/todos')
//         const todos = (await response.json()) as Todo[]
//         console.log(todos.slice(0, 5));
//     } catch (error) {
//         console.log(error);
//     }
// }

// getTodos()

function getTodos() {
    const request = new XMLHttpRequest()
    request.onreadystatechange = function () {
        console.log(request.readyState);
    }
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos', true)
    request.send()
}

getTodos()