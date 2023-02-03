import { PlusCircle, Trash } from "phosphor-react";
import styles from "./todo.module.css";
import schedule from "../assets/schedule.svg";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoItem } from "./TodoItem";

export function Todo() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      content: "Estudar React JS",
      done: false,
    },
  ]);

  const [newTodoText, setNewTodoText] = useState("");

  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault();
    let newTodo = {
      id: uuidv4(),
      content: newTodoText,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setNewTodoText("");
  }

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTodoText(event.target.value);
  }

  function handleNewTodoInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é Obrigatório!");
  }

  function handleDeleteTodo(todoIdToDelete: string) {
    const todosWithoutDeletedOne = todos.filter((todo) => {
      return todo.id !== todoIdToDelete;
    });
    setTodos(todosWithoutDeletedOne);
  }

  function handleCheckTodo(todoIdToCheck: string) {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoIdToCheck) {
        todo.done = true;
      }
      return todo;
    });

    setTodos(newTodos);
  }

  return (
    <div className={styles.todo}>
      <form onSubmit={handleCreateNewTodo} className={styles.addTodo}>
        <input
          placeholder="Adicione uma nova tarefa"
          type="text"
          value={newTodoText}
          onChange={handleNewTodoChange}
          onInvalid={handleNewTodoInvalid}
          required
        />
        <button type="submit">
          Criar <PlusCircle size={24} />
        </button>
      </form>
      <div className={styles.todoBody}>
        <div className={styles.count}>
          <div>
            <strong className={styles.createdTasks}>Tarefas criadas</strong>
            <span>{todos.length}</span>
          </div>
          <div>
            <strong className={styles.finishedTasks}>Concluídas</strong>
            <span>
              {todos.filter((todo) => todo.done === true).length} de{" "}
              {todos.length}
            </span>
          </div>
        </div>
        <div className={styles.todoList}>
          {todos.length > 0 ? (
            todos.map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  onDeleteTodo={handleDeleteTodo}
                  onCheckTodo={handleCheckTodo}
                  todo={todo}
                />
              );
            })
          ) : (
            <div className={styles.emptyTodo}>
              <img src={schedule} alt="Agenda vazia" />
              <h4>Você ainda não tem tarefas cadastradas</h4>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
