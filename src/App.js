
import Main from './components/Home/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cv from './components/Content/CV/Cv';
import './App.css'
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/cv" element={<Cv/>} />

    </Routes>
    </Router>
   
   );
}

export default App;
