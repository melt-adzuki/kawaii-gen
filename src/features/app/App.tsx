import Gradient from "rgt"
import Config from "../config/Config"
import styles from "./App.module.css"

const App = (): JSX.Element => (
	<main className={styles.wrapper}>
		<header className={styles.jumbotron}>
			<h1>
				<Gradient dir="left-to-right" from="#00ccff" to="#f500c0">○○かわいいジェネレーター</Gradient>
			</h1>
		</header>

		<section className={styles.container}>
			<Config />
		</section>

		<footer className={styles.footer}>
			<div>
				<p>This project is licensed under MIT.</p>
				<p>
					The source code is available on
					<a href="https://github.com/melt-adzuki/kawaii-gen" target="_blank" rel="noreferrer"> the project in GitHub</a>
					.
				</p>
				<br />
				<p><small>Copyright © 2022 melt_adzuki</small></p>
			</div>
		</footer>
	</main>
)

export default App
