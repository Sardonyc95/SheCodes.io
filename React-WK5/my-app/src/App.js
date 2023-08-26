import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is coded by Amavic.{" "}
          <a href="https://github.com/Sardonyc95/SheCodes.io" rel="noreferrer" target="_blank">
            Open source on github
          </a>
        </footer>
      </div>
    </div>
  );
}
