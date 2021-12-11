import NavBar from './NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Blog from './Blog';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/welcome" element={<Blog/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/blogs/:id" element={<BlogDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
   </Router>
  );
}

export default App;




