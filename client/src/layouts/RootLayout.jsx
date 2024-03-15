import { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../context/userProvider';
import { Triangle } from 'react-loader-spinner';
import authService from '../services/authService';

export default function RootLayout() {
  const { user, setUser } = useContext(UserContext);
  const [checkingUser, setCheckingUser] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      setCheckingUser(true);

      if (user) {
        setCheckingUser(false);
        return;
      }

      try {
        const credentials = await authService.checkAuthentication();
        setUser(credentials);
      } catch (error) {
        console.log(error.message);
      } finally {
        setCheckingUser(false);
      }
    };

    checkAuth();
  }, [setUser, user]);

  return checkingUser ? (
    <div className="grid min-h-screen place-content-center">
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
