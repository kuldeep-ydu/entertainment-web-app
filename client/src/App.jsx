import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import AuthLayout from './layouts/AuthLayout';
import HomeLayout from './layouts/HomeLayout';
import RootLayout from './layouts/RootLayout';

import Login, { action as loginAction } from './pages/Login';
import Signup, { action as signupAction } from './pages/Signup';

import Home, { loader as homeLoader } from './pages/Home';
import Movies, { loader as moviesLoader } from './pages/Movies';
import TvSeries, { loader as tvSeriesLoader } from './pages/TvSeries';
import Bookmarks, { loader as bookmarksLoader } from './pages/Bookmarks';

import UserProvider from './context/userProvider';
import NotFound from './pages/NotFound';
import { Toaster } from 'react-hot-toast';

import './globals.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} loader={homeLoader} />
        <Route path="movies" element={<Movies />} loader={moviesLoader} />
        <Route
          path="tv-series"
          element={<TvSeries />}
          loader={tvSeriesLoader}
        />
        <Route
          path="bookmarks"
          element={<Bookmarks />}
          loader={bookmarksLoader}
        />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} action={loginAction} />
        <Route path="signup" element={<Signup />} action={signupAction} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  return (
    <UserProvider>
      <div className="justify-content-stretch grid min-h-screen bg-primary font-outfit text-[15px] font-light text-white">
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </UserProvider>
  );
}

export default App;
