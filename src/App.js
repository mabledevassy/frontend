import logo from './logo.svg';
import './App.css';
import Student from './Components/student/Student';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Studentdetails from './Components/student/Studentdetails';

function App() {
  return (
    <div>
      <BrowserRouter>

      <Routes>
        <Route path='/student' element={<Student method='post'/>}/>
        <Route path='/studentdetails' element={<Studentdetails method='get'/>}/>
      </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
