import { createBrowserRouter } from "react-router-dom";
import Signin from "../screens/auth/Signin";
import ProtectedRoute from "./ProtectedRoute";
import Overview from "../screens/audit/Overview";
import Forms from "../screens/audit/Forms";
import {
  IoAddOutline,
  IoClipboardOutline,
  IoGridOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import Settings from "../screens/audit/Settings";
import { navigationOption } from "../types";

const router = createBrowserRouter([
  { path: "/signin", element: <Signin /> },
  {
    path: "/",
    element: (
      <ProtectedRoute allowedRoles={["__admin", "__evaluator"]}>
        <Overview />
      </ProtectedRoute>
    ),
  },
  {
    path: "/forms",
    element: (
      <ProtectedRoute allowedRoles={["__admin", "__evaluator"]}>
        <Forms />
      </ProtectedRoute>
    ),
  },
  {
    path: "/settings",
    element: (
      <ProtectedRoute allowedRoles={["__admin"]}>
        <Settings />
      </ProtectedRoute>
    ),
  },
]);

export const navigationOptions: navigationOption[] = [
  {
    title: "Dashboard",
    route: "/",
    icon: <IoGridOutline />,
    allowedRoles: ["__admin", "__evaluator"],
    subRoutes: [
      {
        title: "Role",
        route: "/overview",
        icon: <IoAddOutline />,
        allowedRoles: ["__admin", "__evaluator"],
      },
    ],
  },
  {
    title: "Forms",
    route: "/forms",
    icon: <IoClipboardOutline />,
    allowedRoles: ["__admin", "__evaluator"],
  },
  {
    title: "Settings",
    route: "/settings",
    icon: <IoSettingsOutline />,
    allowedRoles: ["__admin"],
  },
];

export default router;

export const routeNames = {
  "": "Dashboard",
  audits: "Auditorias",
  forms: "Formularios",
};
