import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn';
import LogIn from './LogIn';
import HomePage from './HomePage';
import EmployerDetails from './EmployerDetails';

function App() {
  return (
    <div>
      <HomePage/>
      <SignIn/>
      <LogIn/>
      <EmployerDetails/>
    </div>
  );
}

export default App;
