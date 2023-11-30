import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from './Components/Home'
import Contact from "./Components/Contact";
import About from "./Components/About";
import NotFound from "./Components/NotFound";
import BlogItemDetails from "./Components/BlogItemDetails";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path = "/" element = {<Home/>} /> 
        <Route path="/about" element = {<About/>} />
        <Route path = "/contact" element = {<Contact/>} />
        <Route path = "/blogs/:id" element = {<BlogItemDetails/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App