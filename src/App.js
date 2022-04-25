import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn';
import LogIn from './LogIn';
import HomePage from './HomePage';
import EmployerDetails from './EmployerDetails';
import Manage from './Manage';

function App() {
  return (
    <div>
      <Manage/>
      <HomePage/>
      <SignIn/>
      <LogIn/>
      <EmployerDetails/>
    </div>
  );
}

export default App;
