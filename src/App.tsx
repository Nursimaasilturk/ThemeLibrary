import SmButton from './ui-library/Button/Button'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  const handleClick = () => {
    alert('Button clicked');
  }
  return (
    <ThemeProvider>
      <div>
        <SmButton label={'İlk component !'} onClick={handleClick} variant="ghost" id="1"/>
        <SmButton label={'İlk component !'} onClick={handleClick} variant="default"/>
        <SmButton label={'İlk component !'} onClick={handleClick} variant="rounded"/>
      </div>
    </ThemeProvider>
  )
}
export default App;
