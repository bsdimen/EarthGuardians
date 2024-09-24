import React, { Suspense, lazy } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Loader from './Components/loader';
import Root from './Pages/root';

//========== Pages ==============
const Home = lazy(() => import('./Pages/home'));
const About = lazy(() => import('./Pages/about'));
const Blog = lazy(() => import('./Pages/blog'));
const Contact = lazy(() => import('./Pages/contact'));
const Educational = lazy(() => import('./Pages/educational'));
const Article = lazy(() => import('./Pages/article'));



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route
        index
        element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="/blog"
        element={
          <Suspense fallback={<Loader />}>
            <Blog />
          </Suspense>
        }
      />
      <Route
        path="/blog/article/:id"
        element={
          <Suspense fallback={<Loader />}>
            <Article />
          </Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        }
      />
      <Route
        path="/educational"
        element={
          <Suspense fallback={<Loader />}>
            <Educational />
          </Suspense>
        }
      />
      <Route path="loader"
        element={
          <Suspense fallback={<Loader />}>
            <Loader />
          </Suspense>
        } />

    </Route>


  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

