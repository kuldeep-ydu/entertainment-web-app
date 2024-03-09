import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Login, { action as loginAction } from './pages/Login';
import Signup, { action as signupAction } from './pages/Signup';
import AuthLayout from './components/AuthLayout';
import HomeLayout from './components/HomeLayout';
import Home, { loader as homeLoader } from './pages/Home';
import Movies, { loader as moviesLoader } from './pages/Movies';
import TvShows, { loader as tvShowsLoader } from './pages/TvShows';
import Bookmarks, { loader as bookmarksLoader } from './pages/Bookmarks';
import NotFound from './pages/NotFound';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Login />} action={loginAction} />
        <Route path="signup" element={<Signup />} action={signupAction} />
      </Route>

      <Route path="/home" element={<HomeLayout />}>
        <Route index element={<Home />} loader={homeLoader} />
        <Route path="movies" element={<Movies />} loader={moviesLoader} />
        <Route path="tv-shows" element={<TvShows />} loader={tvShowsLoader} />
        <Route
          path="bookmarks"
          element={<Bookmarks />}
          loader={bookmarksLoader}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>,
  ),
);

function App() {
  return (
    <div className="bg-primary min-h-screen font-outfit text-[15px] text-white grid justify-content-stretch pt-8 font-light">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
