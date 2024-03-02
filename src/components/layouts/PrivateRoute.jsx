import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../utils/firebase.config";
import { setUser, toggleLoading } from "../../redux/features/user/userSlice";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const { email, isLoading } = useSelector((state) => state.userSlice);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(
        setUser({
          name: user.displayName,
          email: user.email,
        })
      );

      dispatch(toggleLoading(false));
    });
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && !email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
