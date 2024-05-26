import  './CSS/main.css';
import logo from './IMGS/EarthGuardians.svg';

import { BrowserRouter, Routes, Route, Link, NavLink, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

//===========Pages==============
import Home from './Pages/home'
import About from './Pages/about'
import Blog from './Pages/blog'
import Contact from './Pages/contact'
import Educational from './Pages/educational'
import RootLayout from './Components/RootLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="blog" element={<Blog />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path='educational' element={<Educational />} />
        </Route>
    )
)


function App() {
  return (
    <RouterProvider router={router} />
   
  );
}

export default App;
