import { Route, Routes } from 'react-router';
import './App.css';
import Books from './components/Books';
import Catagories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App-bg">
      <div className="App">
        <Routes>
          <Route element={<Navbar />} path="/">
            <Route element={<Books />} path="/" />
            <Route element={<Catagories />} path="/categories" />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
