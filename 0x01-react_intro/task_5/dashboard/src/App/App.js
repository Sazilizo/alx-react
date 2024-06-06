import logo from '../assets/holberton-logo.jpg';
import './App.css';
import ".././Notifications/Notifications"
import { getFooterCopy, getFullYear } from '../utils/utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>School dashboard</p>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>
          email:
          <input htmlFor="email" type="email"></input>
        </label>
        <label htmlFor='password'>
          password:
          <input htmlFor="password" type="password"></input>
        </label>
        <button type="submit">OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </div>
  );
}

export default App;
