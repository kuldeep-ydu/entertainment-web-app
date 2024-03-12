import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../context/userProvider';
import { Triangle } from 'react-loader-spinner';

export default function RootLayout() {
  const { user, setUser } = useContext(UserContext);
  const [checkingUser, setCheckingUser] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const userExists = localStorage.getItem('entertainmentAppUser');

      if (!userExists || user) {
        setCheckingUser(false);
        return;
      }

      const response = await axios.post('/api/is-authenticated');
      setUser(response.data);
      setCheckingUser(false);
    };

    checkAuth();
  }, [setUser, user]);

  return checkingUser ? (
    <div className="grid place-content-center min-h-screen">
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="hsl(0 97% 63%)"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  ) : (
    <Outlet />
  );
}
