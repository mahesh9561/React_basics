import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext, ThemeProvider } from './Context/thememode'
import ThemeBtn from './Components/ThemeBtn';
import Card from './Components/Card';

function App() {
  // const { themeMode, darkTheme, lightTheme } = useContext(ThemeContext);

  const [themeMode, setThemeMode] = useState('light');

  const darkTheme = () => {
    setThemeMode("dark")
  }
  const lightTheme = () => {
    setThemeMode("light")
  }

  //Actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove('light','dark');
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])


  return (

    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme Btn COmponents */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;