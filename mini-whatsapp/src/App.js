import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Страницы Mini-WhatsApp
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Mini-WhatsApp */}
          <Route path='/chat/:userId' element={<HomePage />} />
          <Route path='/chatapp' element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// import React from 'react';