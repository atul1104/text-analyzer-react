import React, { useState } from 'react';

import Header from './components/Header';
import TextArea from './components/TextArea';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#495057';
      showAlert('Dark mode has been enabled!', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled!', 'success');
    }
  };
  return (
    <>
      <Header mode={mode} toggleMode={toggleMode} alert={alert} />
      <TextArea mode={mode} showAlert={showAlert} />
    </>
  );
}

export default App;
