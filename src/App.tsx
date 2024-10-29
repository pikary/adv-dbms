import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import Main from "./pages/Main";
import { AuthProvider } from "./context/userContext";

function App() {
    return (
        <Router>
            <AuthProvider>
                <Topbar></Topbar>
                <Navbar></Navbar>
                <hr />

                <main>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/login" element={<SignIn />} />
                        <Route path="/register" element={<SignUp />} />
                        <Route path="/profile" element={<></>} />
                    </Routes>
                </main>
                <Footer></Footer>
            </AuthProvider>

        </Router>
    )
}

export default App
