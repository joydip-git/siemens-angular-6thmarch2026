function getTodos() {
    const request = new XMLHttpRequest()
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText)
            console.log(data.slice(0,5));
        }
    }
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos', true)
    request.send()
}

getTodos()