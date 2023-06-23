import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import UserAppBar from "./User/Layout";
import Home from "./User/Home/Home";
import About from "./User/About/About";
import SingleBlog from "./User/SingleBlog/SingleBlog";
import ResponsiveLayout from "./Admin/AdminLayout";
import AdminBlogs from "./Admin/Home/AdminBlogs";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserAppBar />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog/:id" element={<SingleBlog />} />
          </Route>

          <Route path="/admin/" element={<ResponsiveLayout/>}>
              <Route path="home" element={<AdminBlogs />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
