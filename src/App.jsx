// import './App.scss';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/Main/Main';
function App() {
  return (
    <BrowserRouter>
        <div className="app">
        <Main/>
      </div>
    </BrowserRouter>


  );
}

export default App;
