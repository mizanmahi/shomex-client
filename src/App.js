import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
   return (
      <BrowserRouter>
         <div className='App'>
            <Home />
         </div>
      </BrowserRouter>
   );
}

export default App;
