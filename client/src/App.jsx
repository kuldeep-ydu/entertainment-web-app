import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Login, { action as loginAction } from './pages/Login';
import Signup, { action as signupAction } from './pages/Signup';
import AuthLayout from './layouts/AuthLayout';
import HomeLayout from './layouts/HomeLayout';
import RootLayout from './layouts/RootLayout';
import Home, { loader as homeLoader } from './pages/Home';
import Movies, { loader as moviesLoader } from './pages/Movies';
import TvShows, { loader as tvShowsLoader } from './pages/TvShows';
import Bookmarks, { loader as bookmarksLoader } from './pages/Bookmarks';
import NotFound from './pages/NotFound';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import UserProvider from './context/userProvider';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} loader={homeLoader} />
        <Route path="movies" element={<Movies />} loader={moviesLoader} />
        <Route path="tv-shows" element={<TvShows />} loader={tvShowsLoader} />
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
      <div className="bg-primary min-h-screen font-outfit text-[15px] text-white grid justify-content-stretch font-light">
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </UserProvider>
  );
}

export default App;
