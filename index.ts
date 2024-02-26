import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/1';

interface Todo {
  title: string;
  id: number;
  body: string;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const body = todo.body;

  logTodo(id, title, body);
});

const logTodo = (id: number, title: string, body: string) => {
  console.log(
    `The post with ID: ${id}
    The post with title: ${title}
    The post with body: ${body}`,
  );
};
