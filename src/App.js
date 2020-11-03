import React, { useState } from 'react';
import './App.css';
import AuthorizationPage from './components/authorization/authorization-page.js';
import MainPage from './components/main-page/main-page.js';

function App() {
  const [authorized, setAuthorizationStatus] = useState(false);

  return (
    <div className="App">
      {authorized ?
        <MainPage handleClickLogout={setAuthorizationStatus}/> : <AuthorizationPage handleClickAuthorize={setAuthorizationStatus}/>
      }
    </div>
  );
}

export default App;
