import styles from "./App.module.scss";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.centerSection}>
        <header className={styles.header}>
          <h1>Tired of boring Lorem Ispum?</h1>
        </header>
        <Form />
      </div>
    </div>
  );
}

export default App;
