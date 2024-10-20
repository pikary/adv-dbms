import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";

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
                        <Route path="/register" element={<></>}/>
                        <Route path="/profile" element={<></>}/>
                    </Routes>
                </main>
            </Router>
        </>
    )
}

export default App
