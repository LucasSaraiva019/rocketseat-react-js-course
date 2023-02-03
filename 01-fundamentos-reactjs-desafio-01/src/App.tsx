import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./global.css";

import { PlusCircle, Trash } from "phosphor-react";
import { Todo } from "./components/Todo";

interface Todo {
  id: string;
  done: boolean;
  content: string;
}

const todoList: Todo[] = [
  // {
  //   id: 1,
  //   content: "Caminhar as 18",
  //   done: true,
  // },
  // {
  //   id: 2,
  //   content: "Estudar Ignite",
  //   done: false,
  // },
  // {
  //   id: 3,
  //   content: "Estudar Ignite",
  //   done: false,
  // },
  // {
  //   id: 4,
  //   content: "Estudar Ignite",
  //   done: false,
  // },
  // {
  //   id: 5,
  //   content: "Estudar Ignite",
  //   done: false,
  // },
  // {
  //   id: 6,
  //   content: "Estudar Ignite",
  //   done: false,
  // },
];

function App() {
  return (
    <div>
      <Header />
      <main>
        <Todo />
      </main>
    </div>
  );
}

export default App;
