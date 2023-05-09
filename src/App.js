import logo from './logo.svg';
import './App.css';
import Profile from './Component/Profile/ProfilePhoto';
import Name from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
function App() {
  return (
    <div className="App">
 <Profile />
 <Name />
 <Address />
    </div>
  );
}

export default App;
