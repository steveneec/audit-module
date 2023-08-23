import { ReactElement } from "react";

export type navigationOption = {
  title: string;
  icon: ReactElement;
  route?: string;
  allowedRoles: string[];
  subRoutes?: navigationOption[];
};
