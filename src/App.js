import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthContextProvider from './components/AuthContextProvider/AuthContextProvider';
import Header from './components/Header/Header';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
   return (
      <AuthContextProvider>
         <BrowserRouter>
            <div className='App'>
               <Header />
               <Switch>
                  <Route exact path='/'>
                     <Home />
                  </Route>
                  <Route exact path='/home'>
                     <Home />
                  </Route>
                  <Route exact path='/login'>
                     <Login />
                  </Route>
                  <ProtectedRoute exact path='/serviceDetails/:id'>
                     <ServiceDetails />
                  </ProtectedRoute>
               </Switch>
            </div>
         </BrowserRouter>
      </AuthContextProvider>
   );
}

export default App;
