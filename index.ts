import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/1';

interface Todo {
  title: string;
  userId: number;
  id: number;
  body: string;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  console.log(todo.id);
  console.log(todo.userId);
  console.log(todo.title);
  console.log(todo.body);
});
