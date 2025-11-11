import { RouterProvider } from 'react-router-dom';
import './App.css'
import { router } from './routes/router';
import { ThemeProvider } from './contexts/theme-provider';

const App = () => {

  return (
    <ThemeProvider defaultTheme="system" storageKey='theme'>
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App
