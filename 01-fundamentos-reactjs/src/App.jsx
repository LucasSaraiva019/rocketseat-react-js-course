import { Post } from './Post';
import { Header } from './components/Header';

import './global.css';
import styles from './app.module.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Lucas Saraiva"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam sed fugiat omnis perferendis quis numquam obcaecati velit facilis reiciendis aspernatur, vitae odio, consequatur officiis minus esse non! Officia, voluptatum tempora."
          />
          <Post
            author="Lucas Saraiva"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam sed fugiat omnis perferendis quis numquam obcaecati velit facilis reiciendis aspernatur, vitae odio, consequatur officiis minus esse non! Officia, voluptatum tempora."
          />
        </main>
      </div>
    </div>
  )
}

