import { Outlet } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner';
import useUserCheck from '../hooks/useUserCheck';

export default function RootLayout() {
  const checkingUser = useUserCheck();

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
