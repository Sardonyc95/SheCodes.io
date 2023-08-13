import logo from './logo.svg';
import './App.css';

import Search from './Search';

function App() {
  return (
    <div className="App">
      <Search />
      <div className="weatherInfo">
        <h1>London</h1>
        <p>Last updated: Wednesday 01:55</p>
        <p>Cloudy</p>
      </div>
      <div className="weatherForecast">
        <div className="weatherTemp">
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="weather photo" />
          <div className="tempDetails">
            <span className="temperature">19</span>
            <div className="tempIcon">
              <span className="celsuis">°C</span> | <span className="fahrenheit">°F</span>
            </div>
          </div>
        </div>
        <div className="weatherDetails">
          <p>Humidity: 80%</p>
          <p>Wind: 10km/h</p>
        </div>
      </div>
    </div>
  );
}

export default App;
