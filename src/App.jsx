import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import ClientCounsellorProfile from './pages/client/ClientCounsellorProfile'
import CounsellorProfile from './pages/counsellor/CounsellorProfile'
import Blogs from './pages/Blogs'
import PostBlog from './pages/PostBlog'
import VerifyBlogs from './pages/moderator/VerifyBlogs'



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="counsellorProfile" element={<CounsellorProfile />} />
                    <Route path="clientcounsellorprofile" element={<ClientCounsellorProfile />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="/postblog" element={<PostBlog />} />
                    <Route path="/verifyblogs" element={<VerifyBlogs />} />



                </Route>
                <Route path="login" element={<div>this is login page</div>}/>
                </Routes>
        </Router>
        
    )
}

export default App