import { Routes, Route } from 'react-router';
import Layout from './Components/Layout/Layout';
import Home from './Components/Page/Home';
import Search from './Components/Page/Search';
import Icon from './Components/Page/Icon';
import Exit from './Components/Page/Exit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" element={< Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/icon" element={<Icon />} />
          <Route path="/exit" element={<Exit />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
