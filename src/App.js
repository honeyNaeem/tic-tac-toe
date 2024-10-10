import { Routes, Route } from 'react-router-dom';
import './App.css';

import Board from './TicTacToeGame/Board';
import Start from './TicTacToeGame/Start';

function App() {
  return (
    <>
         <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/game" element={<Board />} />
         </Routes>
      </>

  );
};

export default App;
