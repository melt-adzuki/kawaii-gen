import Gradient from "rgt"
import Config from "../config/Config"
import styles from "./App.module.css"

const App = (): JSX.Element => {
  return (
    <main>
      <header className={styles.jumbotron}>
        <h1>
          <Gradient dir="left-to-right" from="#00ccff" to="#f500c0">○○かわいいジェネレーター</Gradient>
        </h1>
      </header>

      <section className={styles.container}>
        <Config />
      </section>

      <footer className={styles.footer}>
        <small>
          <p>Copyright © 2022 melt_adzuki</p>
          <p>This project is provided under MIT license.</p>
          <p>The source code is available on <a href="https://github.com/hijiki02/kawaii-gen" target="_blank" rel="noreferrer">the project in GitHub</a>.</p>
        </small>
      </footer>
    </main>
  )
}

export default App
