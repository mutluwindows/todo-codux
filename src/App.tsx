import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <nav>
                <a href="/home">Home</a> | <a href="/projects">Projects</a> |{' '}
                <a href="/about">About</a> | <a href="/contact">Contact Us</a>
            </nav>
            <header className={styles['App-header']}>
                Mutlu was NOT here. ..
                <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className={styles['App-link']}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                ></a>
            </header>
        </div>
    );
}

export default App;
