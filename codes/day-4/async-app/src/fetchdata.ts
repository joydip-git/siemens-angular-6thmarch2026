type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

async function getTodos() {
    try {
        const response: Response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const todos = (await response.json()) as Todo[]
        console.log(todos.slice(0, 5));
    } catch (error) {
        console.log(error);
    }
}

getTodos()