import logo from './holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from '../utils/utils';

function App(){
  return (
    <>
      <div className="App-header">
        <img src={logo} alt="logo"></img>
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">
          email:
          <input htmlFor="email" type="text"></input>
        </label>
        <label htmlFor="password">
          password:
          <input htmlFor="password" type="password"></input>
        </label>
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </>
  )
}

export default App;
