import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddService from './components/AddService/AddService';
import AuthContextProvider from './components/AuthContextProvider/AuthContextProvider';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import MyService from './components/MyService/MyService';
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
                  <ProtectedRoute exact path='/myOrders'>
                     <MyService />
                  </ProtectedRoute>
                  <ProtectedRoute exact path='/addService'>
                     <AddService />
                  </ProtectedRoute>
                  <ProtectedRoute exact path='/manageOrders'>
                     <ManageAllOrders />
                  </ProtectedRoute>
               </Switch>
               <Footer />
            </div>
         </BrowserRouter>
      </AuthContextProvider>
   );
}

export default App;
