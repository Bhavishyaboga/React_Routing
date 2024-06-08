import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import About from './components/About';
import UserProfile from './components/UserProfile';
import Settings from './components/Settings';
import User from './components/Users';
import Page404 from './components/Page404';

function App() {
  return (
    <div className="App">
  

    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/about' Component={About} />
      <Route path='/dashboard' Component={Dashboard}>
        <Route path='userprofile' Component={UserProfile}/>
        <Route path='settings' Component={Settings}/>
      </Route>
      <Route path='/users/:name' Component={User}/>
      <Route path='/*' Component={Page404}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
