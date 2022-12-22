import React from 'react';
import Main from './pages/Main';
import './App.css';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <div>
      <ContextProvider>
      <Main/>
      </ContextProvider>
    </div>
  );
}

export default App;
