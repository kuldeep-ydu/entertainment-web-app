import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AuthLayout from './components/AuthLayout';
import HomeLayout from './components/HomeLayout';
import Home, { loader as HomeLoader } from './pages/Home';
import Movies, { loader as MoviesLoader } from './pages/Movies';
import TvShows, { loader as TvShowsLoader } from './pages/TvShows';
import Bookmarks, { loader as BookmarksLoader } from './pages/Bookmarks';
import NotFound from './pages/NotFound';
import loginAction from './actions/loginAction';
import signupAction from './actions/signupAction';
import './globals.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<Login />} action={loginAction} />
        <Route path="signup" element={<Signup />} action={signupAction} />
      </Route>

      <Route path="/home" element={<HomeLayout />}>
        <Route index element={<Home />} loader={HomeLoader} />
        <Route path="movies" element={<Movies />} loader={MoviesLoader} />
        <Route path="tv-shows" element={<TvShows />} loader={TvShowsLoader} />
        <Route
          path="bookmarks"
          element={<Bookmarks />}
          loader={BookmarksLoader}
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
    </div>
  );
}

export default App;
