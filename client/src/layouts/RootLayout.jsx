import axios from 'axios';
import { useContext, useEffect } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userProvider';

export async function loader() {
  const response = await axios.post('/api/is-authenticated');
  return response.data;
}

export default function RootLayout() {
  const data = useLoaderData();
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (data.isAuthenticated) {
      setUser({ avatar: data.avatar });
    }
  }, [data, setUser, navigate]);

  return <Outlet />;
}
