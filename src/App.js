import logo from './logo.svg';
import './App.css';
import AddEmployee from './Components/AddEmployee';
import { HeaderComponent } from './Components/HeaderComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddComponent from './Components/AddComponent';
import UpdateComponent from './Components/UpdateComponent';

function App() { 
  return (
    <div>
         <HeaderComponent/>
      <Router>
      <div className='container'>
        <Routes>
          <Route  path='/employees' element={<AddEmployee/>}></Route>
          <Route  path='/add-employees' element={<AddComponent/>}></Route>
          <Route path='/edit-employee/:id' element={<UpdateComponent/>}></Route>
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
