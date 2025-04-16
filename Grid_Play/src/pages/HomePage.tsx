import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Game Hub</h1>
      <div className="home-container">
        <div className="card-container">
          <div className="card" onClick={() => navigate('./tictactoe')}>
            <h2>Tic Game ❌⭕</h2>
            <p>Click to play!</p>
          </div>
          <div className="card" onClick={() => navigate('./tictactoe')}>
            <h2>Tic Game ❌⭕</h2>
            <p>Click to play!</p>
          </div>
          <div className="card" onClick={() => navigate('./tictactoe')}>
            <h2>Tic Game ❌⭕</h2>
            <p>Click to play!</p>
          </div>
          <div className="card" onClick={() => navigate('./tictactoe')}>
            <h2>Tic Game ❌⭕</h2>
            <p>Click to play!</p>
          </div>
          <div className="card" onClick={() => navigate('./tictactoe')}>
            <h2>Tic Game ❌⭕</h2>
            <p>Click to play!</p>
          </div>
          <div className="card" onClick={() => navigate('./tictactoe')}>
            <h2>Tic Game ❌⭕</h2>
            <p>Click to play!</p>
          </div>
          <div className="card" onClick={() => navigate('./tictactoe')}>
            <h2>Tic Game ❌⭕</h2>
            <p>Click to play!</p>
          </div>
          <div className="card" onClick={() => navigate('./tictactoe')}>
            <h2>Tic Game ❌⭕</h2>
            <p>Click to play!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
