import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../authentication/firebase";
import LoadingPage from "../containers/LoadingPage";

const ProtectedComponent = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
  }, [user, navigate]);

  if (loading) {
    return <LoadingPage />;
  } else {
    return children;
  }
};

export default ProtectedComponent;
