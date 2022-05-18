import './App.css';
import NewMessage from './components/NewMessage';
import AllMessages from './components/AllMessages';
import OneMessage from './components/OneMessage';
import {Router} from '@reach/router'

function App() {
  return (
    <div className="App">
      <Router>
        <AllMessages path="/" />
        <NewMessage path="/new" />
        <OneMessage path="/message/:id" />
      </Router>

    </div>
  );
}

export default App;
