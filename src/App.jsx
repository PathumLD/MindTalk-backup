import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import ClientCounselorProfile from './pages/client/ClientCounselorProfile'
import CounsellorProfile from './pages/counsellor/CounsellorProfile'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="counsellorProfile" element={<CounsellorProfile />} />
                    <Route path="clientcounselorprofile" element={<ClientCounselorProfile />} />
                </Route>
                <Route path="login" element={<div>this is login page</div>}/>
            </Routes>
        </Router>
    )
}

export default App