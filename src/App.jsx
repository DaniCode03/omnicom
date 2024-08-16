import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import 'animate.css';
import About_us from './pages/About_us';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="About_us" element= {<About_us/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;