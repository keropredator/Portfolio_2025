import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TicTacToe from './pages/TicTacToe';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tictactoe" element={<TicTacToe />} />
    </Routes>
  );
}

export default App;
