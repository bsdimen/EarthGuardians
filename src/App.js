import React, { Suspense, lazy } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Loader from './Components/loader';
import Root from './Pages/root';

//========== Pages ==============
const Home = lazy(() => import('./Pages/User/home'));
const About = lazy(() => import('./Pages/User/about'));
const Blog = lazy(() => import('./Pages/User/blog'));
const Contact = lazy(() => import('./Pages/User/contact'));
const Educational = lazy(() => import('./Pages/User/educational'));
const Article = lazy(() => import('./Pages/User/article'));



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

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

    </QueryClientProvider>
  );
}

export default App;

