import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";


function App() {
    return (
        <>
            <Router>
                <Topbar></Topbar>
                <Navbar></Navbar>
                <hr/>
                <main>
                    <Routes>
                        <Route path="/" element={<></>}/>
                        <Route path="/login" element={<></>}/>
                        <Route path="/register" element={<SignUp/>}/>
                        <Route path="/profile" element={<></>}/>
                    </Routes>
                </main>
                <Footer></Footer>
            </Router>
        </>
    )
}

export default App
