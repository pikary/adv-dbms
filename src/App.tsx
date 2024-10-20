import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<></>}/>
                    <Route path="/login" element={<></>}/>
                    <Route path="/register" element={<></>}/>
                    <Route path="/profile" element={<></>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App
