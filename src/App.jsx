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
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      <Route path="/home" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
