import './App.css';
import './components/Style.css';
import Employe from './components/Employe'; 
// import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
// import Display from './components/Display';

function App() {
  return (
    <div className="App">
    {/* <Router>
      <Routes>
        <Route path='/' element={<Employe/>}/>
        <Route path=':display' element={<Display/>}/>
      </Routes>

    </Router> */}
    <Employe/>
    </div>
  );
}

export default App;
