// import './index.css';
import './App.css';
import { customRouter } from './customRouter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/login.jsx";
import SignUp from "./pages/signUp.jsx";
import Layout from './layout.jsx';
import ForgotPassword from "./pages/forgotPassword.jsx";
import EmailSent from "./pages/emailSent.jsx";


function App() {
  return (
    
    <div className='App'>
      <Router>
        <Routes>
          <Route element={<Layout/>}>
          {
            customRouter.map((item, index) => <Route key ={index} {...item} /> )
          }
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/emailSent" element={<EmailSent />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
