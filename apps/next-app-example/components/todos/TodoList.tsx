'use client';
import type { TodoItem } from '@/app/todos/page';
import * as stylex from '@stylexjs/stylex';

type Props = {
  todos: TodoItem[];
};

const styles = stylex.create({
  list: {

  },
  item: {
    padding: 10,
  },
});

export default function TodoList({ todos = [] }: Props) {
  const handleChange = (target: TodoItem) => {
    target.completed = true;
  };

  const handleClick = () => {
    console.log('todos', todos);
  };

  return (
    <>
      <button onClick={handleClick}>제출</button>
      <ul>
        {
          todos.map(item => (
            <li key={item.id} {...stylex.props(styles.item)}>
              &nbsp;
              <input type="checkbox" value={item.id} onChange={() => handleChange(item)} />
              {item.title}
            </li>
          ))
        }
      </ul>
    </>
  )
}
