import { useState } from 'react'
import Button from './ui-library/Button/Button'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  const handleClick = () => {
    alert('Button clicked');
  }
  return (
    <ThemeProvider>
      <div>
        <Button label={'İlk component !'} onClick={handleClick} />
      </div>
    </ThemeProvider>
  )
}
export default App;
