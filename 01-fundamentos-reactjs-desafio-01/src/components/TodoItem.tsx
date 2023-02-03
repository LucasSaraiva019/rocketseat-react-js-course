import { Trash } from "phosphor-react";
import styles from "./todoItem.module.css";

interface TodoItem {
  id: string;
  content: string;
  done: boolean;
}

interface TodoItemProps {
  todo: TodoItem;
  onDeleteTodo: (content: string) => void;
  onCheckTodo: (todoId: string) => void;
}

export function TodoItem({ todo, onDeleteTodo, onCheckTodo }: TodoItemProps) {
  function handleDeleteTodo() {
    onDeleteTodo(todo.id);
  }

  function handleCheckTodo() {
    onCheckTodo(todo.id);
  }
  return (
    <div className={styles.todoItem}>
      <input
        type="checkbox"
        name=""
        id=""
        checked={todo.done}
        onChange={handleCheckTodo}
      />
      <span>{todo.content}</span>
      <button onClick={handleDeleteTodo} title="Deletar comentario">
        <Trash size={24} />
      </button>
    </div>
  );
}
