import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "../src/components/Login"
import Signup from './components/Signup';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import ProjectDetail from './ProjectDetail';
function App() {
  return <BrowserRouter>
  <Routes>
  <Route path="/" element={<Login/>} />
  <Route path="/signup" element={<Signup/>} />
  <Route path="/projects" element={<Projects/>} />
  <Route path="/addprojects" element={<AddProject/>} />
  <Route path="/addprojects/:productId" element={<AddProject/>} />
  <Route path="/projectdetail/:productDetail" element={<ProjectDetail/>} />
  </Routes>
  </BrowserRouter>
}

export default App;
