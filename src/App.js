import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddPropertyPage from "./pages/addProperty";
import ForgotPasswordPage from "./pages/auth/forgotPassword";
import SignInPage from "./pages/auth/signIn";



function App() {
  return (
    <>
      {/* <SignInPage />
      <div style={{marginBottom: "500px"}} />
      <ForgotPasswordPage /> */}
      {/* <Home />
      <AddPropertyPage /> */}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/add-property" element={<AddPropertyPage />} />
      </Routes>

    </>
  );
}

export default App;
