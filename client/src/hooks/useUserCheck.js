import authService from '../services/authService';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userProvider';

function useUserCheck() {
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

  return checkingUser;
}

export default useUserCheck;
