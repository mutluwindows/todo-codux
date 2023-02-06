import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className={styles['App-link']}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Mutlu was NOT here. ..{' '}
                </a>
            </header>
        </div>
    );
}

export default App;
