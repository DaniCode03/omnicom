import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import 'animate.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;