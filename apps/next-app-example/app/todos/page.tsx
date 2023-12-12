import TodoList from '@/components/todos/TodoList';

export type TodoItem = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function getData(): Promise<TodoItem[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Todo() {
  const data = await getData();
  return (
    <div>
      <TodoList todos={data} />
    </div>
  );
}
