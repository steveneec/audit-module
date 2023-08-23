import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/features/userSlice";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute(props: props) {
  const user = useSelector(selectUser);
  const location = useLocation();

  if (!user.isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} />;
  } else {
    if (!user.role.some((role: string) => props.allowedRoles.includes(role))) {
      return <Navigate to="/" state={{ from: location }} />;
    }
  }

  return props.children;
}

interface props extends PropsWithChildren {
  allowedRoles: string[];
}
